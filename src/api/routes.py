"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/admin-login', methods=['POST'])
def handle_admin_login():
    body = request.get_json(force=True)
    email = body.get('email')
    password = body.get('password')
    if email is None or password is None:
        raise APIException(400, "Email and password are required")
    user = User.query.filter_by(email=email).first()
    if user is None or not user.verify_password(password):
        raise APIException(400, "Invalid email or password")
    access_token = create_access_token(identity=user.id)
    response_body = {

        "message": "You are successfully logged in",
        "access_token": access_token,
        "user" : user.serialize()
        
    }

    return jsonify(response_body), 200