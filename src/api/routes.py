"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Activities, Member, Testimony
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import json, datetime
import cloudinary
import cloudinary.uploader
          
cloudinary.config( 
  cloud_name = "dkwnepcnk", 
  api_key = os.getenv("CLOUDINARY_API_KEY"), 
  api_secret = os.getenv("CLOUDINARY_SECRET_KEY"), 
)  
 


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/authentication', methods=['GET'])
@jwt_required()
def authenticate_user():
    response_body = {msg: "Congrats, you are authenticated!"}
    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def handle_login():
    body = request.get_json(force=True)
    email = body.get('email')
    password = body.get('password')
    if email is None or password is None:
        raise APIException(400, "Email and password are required")
    user = User.query.filter_by(email=email).first()
    if user is None or user.password!= password:
        raise APIException(400, "Invalid email or password")
    expires = datetime.timedelta(hours=1)
    access_token = create_access_token(identity=user.id,expires_delta=expires)
    response_body = {

        "message": "You are successfully logged in",
        "access_token": access_token,
        "user" : user.serialize()
        
    }

    return jsonify(response_body), 200

@api.route("/get-user-info", methods=["GET"])
@jwt_required()
def get_user_info():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user is None:
        raise APIException(400, "User not found")
    return jsonify(user.serialize()), 200


@api.route('/activities', methods=['POST'])
@jwt_required()
def handle_createActivities():
    body = request.get_json(force=True)
    description = body.get('description')
    start_date = body.get('start_date')
    end_date = body.get('end_date')
    responsible = body.get('responsible')
    if description is None or start_date is None or end_date is None or responsible is None:
        raise APIException(400, "Description, start_date, end_date and responsible are required")
    activity = Activities(description=description, start_date=start_date, end_date=end_date, responsible=responsible)
    db.session.add(activity)
    db.session.commit()
    db.session.refresh(activity)
    response_body = {
        "message": "Activity created",
        "activity": activity.serialize()
    }
    return jsonify(response_body), 200



@api.route('/activities', methods=['GET'])
def get_activities():
    activities = Activities.query.all() #a query that checks the query all the activities and put them in a variable named activity
    serialized_activities = [] # the list of activities once they are serialized (a function that organizes the info ref model: serialized function)
    for activity in activities :
        serialized_activities.append(activity.serialize())# append or add each activity after they have been serialized
    response_body = {
        "message": "Here is the list of activities",
        "activities": serialized_activities
    }
    return jsonify(response_body), 200


@api.route('/members', methods=['POST'])
@jwt_required()
def create_members():
    raw_data = request.form.get("data")
    print("raw_data print: ",raw_data)
    picture = request.files.get("file")
    print("picture print: ",picture)
    body = json.loads(raw_data)
    first_name = body.get('first_name')
    last_name = body.get('last_name')
    email = body.get('email')
    tel = body.get('tel')
    description = body.get('description')
    
    
    if first_name is None or last_name is None or email is None or tel is None or description is None or picture is None:
       return jsonify({"msg" : "first_name, last_name, email, tel,description picture are required"}),400
    check_member = Member.query.filter_by(email=email).first()#the first email is the table properties the second one is the variable found above in the create_member function 
    if check_member :
        return jsonify({"msg" : "Member with this email already exists"}),409
    

    response = cloudinary.uploader.upload(picture)
    member = Member(first_name=first_name, last_name=last_name, email=email, tel=tel, description=description, picture=response["secure_url"])
    db.session.add(member)
    db.session.commit()
    db.session.refresh(member)
    response_body = {
        "message": "Member registered successfully",
        "member": member.serialize()
    }
    return jsonify(response_body), 200
    



@api.route('/members', methods=['GET'])
def get_members():
    members = Member.query.all() #a query that checks the query all the activities and put them in a variable named activity
    serialized_members = [] # the list of activities once they are serialized (a function that organizes the info ref model: serialized function)
    for member in members :
        serialized_members.append(member.serialize())# append or add each activity after they have been serialized
    response_body = {
        "message": "Here is the list of the members",
        "members": serialized_members
    }
    return jsonify(response_body), 200

@api.route('/testimony', methods=['POST'])
def post_testimony():
    body = request.get_json(force=True)
    full_name = body.get('full_name')
    description = body.get('description')
     
    if full_name is None or description is None :
        raise APIException(400, "full_name, description,date are required")
    testimony = Testimony(full_name=full_name, description=description)
    db.session.add(testimony)
    db.session.commit()
    db.session.refresh(testimony)
    response_body = {
        "message": "Member registered successfully",
        "testimony": testimony.serialize()
    }
    return jsonify(response_body), 200



@api.route('/testimony', methods=['GET'])
def get_testimonies():
    testimonies = Testimony.query.all() #a query that checks the query all the activities and put them in a variable named activity
    serialized_testimonies = [] # the list of activities once they are serialized (a function that organizes the info ref model: serialized function)
    for testimony in testimonies :
        serialized_testimonies.append(testimony.serialize())# append or add each activity after they have been serialized
    response_body = {
        "message": "Here is the list of the members",
        "testimonies": serialized_testimonies
    }
    return jsonify(response_body), 200