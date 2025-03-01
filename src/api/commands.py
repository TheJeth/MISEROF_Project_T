
import click
from api.models import db, User

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.first_name="Jethro"
            user.last_name="Guerrier"
            user.tel="7864323578"
            user.email = "guerrier.jethro" + str(x) + "@gmail.com"
            user.password = "Jeth1234@"
            user.is_admin= True
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")


            user = User()
            user.first_name="Elena"
            user.last_name="Pierre"
            user.tel="7864323578"
            user.email = "miserof27" + str(x) + "@gmail.com"
            user.password = "Elena2024"
            user.is_admin= True
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")


        print("All test users created")

    @app.cli.command("delete-all-data")
    def delete_all_data():
        #This function helps me to delete the data in the table I choose( Table User for example)
        db.session.query(User).delete()
        #db.session.query(Activity).delete()
        db.session.commit()
        print("Data was deleted")