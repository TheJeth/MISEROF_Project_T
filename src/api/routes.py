"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, render_template  
from api.models import db, User, Activities, Member, Testimony
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import json, datetime
import cloudinary
import cloudinary.uploader as uploader
from threading import Thread
from flask_mail import Message
#from api.services.mail_service import send_async_email, send_email


          
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
    response_body = {"msg": "Congrats, you are authenticated!"}
    return jsonify(response_body), 200

@api.route('/token', methods=['POST'])
def create_token():
    body = request.get_json(force=True)
    email = body.get('email')
    password = body.get('password')
    if email is None or password is None:
        print("Hello")
        raise APIException("Email and password are required", 400)
    user = User.query.filter_by(email=email).first()
    if user is None or user.password != password:
        print("Goodbye!")
        raise APIException("Invalid email or password", 400)
    expires = datetime.timedelta(hours=1)
    access_token = create_access_token(identity=user.id, expires_delta=expires)
    response_body = {
        "message": "You are successfully logged in",
        "access_token": access_token,
        "user": user.serialize()
    }
    return jsonify(response_body), 200

@api.route("/get-user-info", methods=["GET"])
@jwt_required()
def get_user_info():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user is None:
        raise APIException("User not found", 400)
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
        raise APIException("Description, start_date, end_date and responsible are required", 400)
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
    activities = Activities.query.all()
    serialized_activities = [activity.serialize() for activity in activities]
    response_body = {
        "message": "Here is the list of activities",
        "activities": serialized_activities
    }
    return jsonify(response_body), 200


@api.route('/members', methods=['POST'])
@jwt_required()
def create_members():
    try:
        # Retrieve the form data and file
        data = request.form.get("data")
        files = request.files.get("file")

        if data is None:
            return jsonify({"msg": "No data provided"}), 400

        # Parse data as JSON
        try:
            data = json.loads(data)
        except json.JSONDecodeError:
            return jsonify({"msg": "Data is not valid JSON"}), 400

        # Check for missing required fields
        required_fields = ['first_name', 'last_name', 'email', 'tel', 'description']
        missing_fields = [field for field in required_fields if not data.get(field)]
        if missing_fields:
            return jsonify({"msg": f"Missing required fields: {', '.join(missing_fields)}"}), 400

        # Check for an existing member with the same email
        check_member = Member.query.filter_by(email=data.get('email')).first()
        if check_member:
            return jsonify({"msg": "Member with this email already exists"}), 409

        # Handle the file if needed, e.g., save or process it
        # Process picture field if provided in files (e.g., store or upload to a cloud service)
        cloudinary_response = uploader.upload(files)  # Example for handling base64 pictures

        # Create a new Member instance
        new_member = Member(
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            email=data.get('email'),
            tel=data.get('tel'),
            description=data.get('description'),
            picture=cloudinary_response["secure_url"]
        )

        # Save to the database
        db.session.add(new_member)
        db.session.commit()

        return jsonify({
            "message": "Member registered successfully",
            "member": new_member.serialize()
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": f"An error occurred: {str(e)}"}), 500





@api.route('/members', methods=['GET'])
def get_members():
    members = Member.query.all()
    serialized_members = [member.serialize() for member in members]
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

    if full_name is None or description is None:
        raise APIException("full_name and description are required", 400)
    testimony = Testimony(full_name=full_name, description=description)
    db.session.add(testimony)
    db.session.commit()
    db.session.refresh(testimony)
    response_body = {
        "message": "Testimony posted successfully",
        "testimony": testimony.serialize()
    }
    return jsonify(response_body), 200

@api.route('/testimony', methods=['GET'])
def get_testimonies():
    testimonies = Testimony.query.all()
    serialized_testimonies = [testimony.serialize() for testimony in testimonies]
    response_body = {
        "message": "The different testimonies are here",
        "testimonies": serialized_testimonies
    }
    return jsonify(response_body), 200

# @api.route('/forgot-password', methods=['POST'])
# def forgot_password():
#     body = request.get_json()
#     email = body.get('email')
#     if not email:
#         return jsonify({"error": "Email is required"}), 400

#     user = User.query.filter_by(email=email).first()
#     if not user:
#         return jsonify({"error": "User not found"}), 404

#     expires = datetime.timedelta(minutes=5)
#     reset_token = create_access_token(str(user.id), expires_delta=expires)
#     url = request.url_root + "api/reset-password/"
#     return send_email('Reset Your Password',
#                         sender=os.getenv("SENDER_EMAIL"),
#                         recipients=[user.email],
#                         text_body='Hi '+ str(user.first_name)+', We received a request to reset your password. Click the button below to reset your password:'+ str(url) + str(reset_token) + ' If you did not request a password reset, please ignore this email or contact support if you have questions. Thank you, The Miserof Web Support Team',

#                         html_body='<style>body {font-family: Arial, sans-serif;background-color: #f4f4f4;margin: 0;padding: 0;}.email-container {max-width: 600px;margin: 20px auto;background-color: #ffffff;padding: 20px;border: 1px solid #dddddd;border-radius: 5px;}.email-header {text-align: center;border-bottom: 1px solid #dddddd;padding-bottom: 10px;margin-bottom: 20px;}.email-header h1 {margin: 0;color: #333333;}.email-body {color: #333333;line-height: 1.6;}.email-body p {margin: 20px 0;}.reset-button {display: block;width: 200px;margin: 20px auto;padding: 10px 20px;text-align: center;background-color: #007bff;color: #ffffff;text-decoration: none;border-radius: 5px;}.reset-button:hover {background-color: #0056b3;}.email-footer {text-align: center;color: #777777;font-size: 12px;margin-top: 20px;}</style><div Name="email-container"><div className="email-header"><h1>Password Reset Request</h1></div><div className="email-body"><p>Hi ' + str(user.first_name)+',</p><p>We received a request to reset your password. Click the button below to reset your password:</p><a href="'+str(url) + str(reset_token)+'" Name="reset-button">Reset Password</a><p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p><p>Thank you,<br>The Miserof Church Web Support Team</p></div>')


# @api.route('/reset-password', methods = ['POST'])
# def reset_password():
#     body = request.get_json()
#     reset_token = body.get('reset_token')
#     password = body.get('password')

#     if not reset_token or not password:
#         return jsonify({"error": "Reset token and password are required"}), 400

#     user_id = decode_token(reset_token)['identity']

#     user = User.query.filter_by(id=user_id).first()
#     if not user:
#         return jsonify({"error": "User not found"}), 404

#     user.password=password
#     db.session.commit()

#     return send_email('Password reset successful',
#                         sender=os.getenv("SENDER_EMAIL"),
#                         recipients=[user.email],
#                         text_body='Password reset was successful',
#                         html_body='<p>Password reset was successful</p>')


# Route to insert data
#@api.route('/insert_user', methods=['POST'])
#def insert_user():
#    try:
#        # Get data from JSON request
#        data = request.json
        
        # Create a new user instance
#        new_user = User(
 #           first_name=data['Jethro'],
#            last_name=data['Guerrier'],            
#            email=data['guerrier.jethro@gmail.com'],
#            tel=data['7867729823'],
#            password=['Jeth1234@'],
#            picture= [''],
#            is_active=True,
#            is_admin=True
#        )
        
        # Add and commit the new user to the database
#        db.session.add(new_user)
#        db.session.commit()
        
#        return jsonify({
#            'message': 'User inserted successfully',
#            'user_id': new_user.id
#        }), 201
    
#    except Exception as e:
        # Rollback the session in case of error
#        db.session.rollback()
#        return jsonify({
#            'error': str(e)
#        }), 400


if __name__ == '__main__':
    app.run(debug=True)