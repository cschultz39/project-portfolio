# GradeBuddy

CS 222: Software Design Lab

Created by: Catie Schultz, Arunima Suri, Alisha Virani, Kori Williams


**Motivation Behind:**

Students struggle to effectively track their academic progress, especially concerning their grades, leading to confusion and potential academic setbacks. Existing solutions are often insufficient, lacking personalization tailored to specific subjects and their grading setups. With visual progress bars, dynamic feedback, and goal-setting features, GradeBuddy empowers students to stay on top of their academic performance and make informed decisions to achieve their goals.

----------------------------------------------------------------------------
**Steps to Launch Everything:**

1. Clone the git repository using the URL

2. Install docker (desktop version) and docker compose. Have docker open and running in the background. 

3. Install django and python

4. cd into the web_project folder

   --> this is where all the code is stored
   
6. type into terminal: `docker compose up --build`

   --> this builds the docker containers that have the database and the web project

   web: The Django web application running on http://localhost:8000

   db: The PostgreSQL database used by the application.

7. type into terminal: `docker compose exec web python manage.py makemigrations`

   --> to create generate migration files based on database models

9. type into terminal: `docker compose exec web python manage.py migrate`

   --> to create the database tables according to migration files

11. access the web application at http://localhost:8000/login

12. run: `docker compose down`

    --> this shuts down the containers

----------------------------------------------------------------------------
**Steps for Testing:**

1. Install the following:

   --> flake8 (used for linter checks)

   --> pytest and pytest-cov (used for test coverage): pip install pytest pytest-django pytest-cov

3. Ensure the requirements.txt has the following:

   --> flake8

   --> black

   --> pytest

   --> pytest-django

   --> pytest-cov

5. For the test coverage via pytest also do the following: 

   --> include this within your pyproject.toml file

         [tool.pytest.ini_options]

         DJANGO_SETTINGS_MODULE = "web_project.settings"

         python_files = "tests.py"
   
   --> include the following in your docker-compose.yml file under the "environment" section of the "web" service (be sure to include dash before, similar to the other environment variables)

      DJANGO_SETTINGS_MODULE=web_project.settings
   
7. cd into the web_project folder

8. Run `docker compose up --build`

9. Run `docker compose exec web python manage.py makemigrations`

10. Run `docker compose exec web python manage.py migrate`

11. Run the corresponding command for each test:

    --> Linter Check: `flake8`

    --> Style Check: `black web_project` (automatically resolves any issues that arise when running the command)

    --> Run tests: `docker compose exec web python manage.py test gradebuddy`

    --> See test coverage: `docker compose exec web pytest --cov=gradebuddy --cov-report=html > output.txt` (the result will be in the output.txt file within web_project)

   Note: you may need to rerun the database setup after making changes to some of the files. To do this, run docker compose down and then follow steps 5-8. 
   
----------------------------------------------------------------------------

**Note:**

You may need to completely "destroy" the database after making changes to certain .py files (such as serializers, models, views, etc.). In this scenario, do the following to ensure your changes are properly reflected. These will be ran in your terminal in the web_project directory.

1. `docker compose down -v`
2. `docker compose up --build`

_Next Portion Should Take Place in a New Terminal in webproject Directiory_

3. `docker compose exec web python manage.py makemigrations`
4. `docker compose exec web python manage.py migrate`
5. `docker compose exec web python manage.py makemigrations gradebuddy`
6. `docker compose exec web python manage.py migrate gradebuddy`

----------------------------------------------------------------------------
**Terminology**:

_Home Page:_ the screen that appears after logging in that shows all classes that a user has created. For new users, a blank home page will appear prompting the user to create their first class.

_Class Page:_ the screen that you get directed to after clicking on a class that shows all the categories for the specific class. May contain 0 categories.

_Categories Page:_ the screen that you get directed to after clicking on a category that shows all the assignments for the specific category. May contain 0 assignments.

----------------------------------------------------------------------------
