  
import os
from flask_admin import Admin, AdminIndexView, expose
from .models import db, User,Activities,Member, Testimony # BackendUser
from flask_admin.contrib.sqla import ModelView
from flask import request, redirect, url_for, flash, render_template
from flask_login import LoginManager, login_required, login_user, logout_user, current_user

class SecureModelView(ModelView):
    def is_accessible(self):
        # Restrict access to authenticated admin users
        return current_user.is_authenticated and current_user.is_admin

    def inaccessible_callback(self, name, **kwargs):
        # Redirect to login page if the user is not authenticated
        return redirect(url_for('login'))
    
class MyAdminIndexView(AdminIndexView):
    @expose('/')
    @login_required
    def index(self):
        return super(MyAdminIndexView, self).index()


def setup_admin(app):
        # Setup login Manager
    login_manager = LoginManager(app)
    # User loader
    @login_manager.user_loader
    def load_user(user_id):
        # You'd typically look up the user in the database using the user_id
        return User.query.filter_by(id=int(user_id)).first()


    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    app.config['LOGIN_DISABLED'] = True
    #app.config['SERVER_NAME'] = 'crispy-disco-4j7p6qg6w9xj274x6-3001.app.github.dev'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3', index_view=MyAdminIndexView())

    @app.route('/admin/login', methods=['GET', 'POST'])
    def login():
        if request.method == 'POST':
            username = request.form.get('username')
            password = request.form.get('password')
            from werkzeug.security import check_password_hash

            # Assuming 'username' and 'password' are being submitted from a form
            user = User.query.filter_by(email=username.strip()).first()  # Query the user by username

            if user and user.password == password:  # Check if password matches
                if user.is_admin:  # Check if the user has admin privileges
                  login_user(user)  # Log the user in
                    #return redirect(url_for('admin_dashboard'))  # Redirect to the admin dashboard
                return redirect(url_for('admin.index'))
            else:
                    flash('You do not have admin access.', 'danger')
                    return redirect(url_for('login'))  # Redirect to login if not an admin
        else:
                flash(f'Invalid username or password', 'danger')
                #return redirect(url_for('login'))  # Redirect to login if authentication fails
           
        return render_template('login.html')

    @app.route('/admin/logout')
    @login_required
    def logout():
        logout_user()
        return redirect(url_for('login'))


    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(SecureModelView(User, db.session))
    admin.add_view(SecureModelView(Activities, db.session))
    admin.add_view(SecureModelView(Member, db.session))
    admin.add_view(SecureModelView(Testimony, db.session))
    #admin.add_view(SecureModelView(BackendUser, db.session))
    #admin.add_view(SecureModelView(Headquater, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(SecureModelView(YourModelName, db.session))

      