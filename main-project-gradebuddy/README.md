# GradeBuddy

CS 222: Software Design Lab

Created by: Catie Schultz, Arunima Suri, Alisha Virani, Kori Williams


What is GradeBuddy and Why did we build it?:

GradeBuddy is a web-based tool designed to help students manage and track their grades effectively. It provides visual feedback, dynamic recommendations, and goal-setting features. The tool was created because students often face challenges in tracking their academic progress, leading to confusion about grades and academic goals for classes that do not offer a way to check grades. Current tools lack customization for specific subjects and grading structures, which motivated us to create a more tailored and user-friendly solution!

Main Features

secure user accounts: student data is protected & saved to their account
goal-setting: students set personalized academic goals
visual progress bar: for motivation and focus on goals
dynamic feedback: tailored recommendations based on grade
grade tracking: clear overview of academic performance


Technical Architecture

<img width="2290" height="892" alt="image" src="https://github.com/user-attachments/assets/db5418b9-834b-4799-a7fa-35176c4b024d" />


Front End: Built using HTML, TailwindCSS, and Django's frontend capabilities for a responsive UI.

Back End: Implemented in Python and Django for user authentication, data processing, and student recommendations. Connects to the front end through Django's REST Framework.

Database: PostgreSQL database for storing and managing grades and user data. Communicates with the back end using Django's Object-Relational Mapper.



Video Walkthrough

https://drive.google.com/file/d/1o_Ic4HTB9pJ3pne9gYN6-l8dFUI5v5Qk/view?usp=sharing 



Steps to Launch Everything:

Clone the git repository using the URL

Install docker (desktop version) and docker compose. Have docker open and running in the background.

Install django and python

cd into the web_project folder

--> this is where all the code is stored

type into terminal: docker compose up --build

--> this builds the docker containers that have the database and the web project

web: The Django web application running on http://localhost:8000

db: The PostgreSQL database used by the application.

type into terminal: docker compose exec web python manage.py makemigrations

--> to create generate migration files based on database models

type into terminal: docker compose exec web python manage.py migrate

--> to create the database tables according to migration files

access the web application at http://localhost:8000/login

run: docker compose down

--> this shuts down the containers



Steps for Testing:

Install the following:

--> flake8 (used for linter checks)

--> pytest and pytest-cov (used for test coverage): pip install pytest pytest-django pytest-cov

Ensure the requirements.txt has the following:

--> flake8

--> black

--> pytest

--> pytest-django

--> pytest-cov

For the test coverage via pytest also do the following:

--> include this within your pyproject.toml file

  [tool.pytest.ini_options]

  DJANGO_SETTINGS_MODULE = "web_project.settings"

  python_files = "tests.py"
--> include the following in your docker-compose.yml file under the "environment" section of the "web" service (be sure to include dash before, similar to the other environment variables)

DJANGO_SETTINGS_MODULE=web_project.settings

cd into the web_project folder

Run docker compose up --build

Run docker compose exec web python manage.py makemigrations

Run docker compose exec web python manage.py migrate

Run the corresponding command for each test:

--> Linter Check: flake8

--> Style Check: black web_project (automatically resolves any issues that arise when running the command)

--> Run tests: docker compose exec web python manage.py test gradebuddy

--> See test coverage: docker compose exec web pytest --cov=gradebuddy --cov-report=html > output.txt (the result will be in the output.txt file within web_project)

Note: you may need to rerun the database setup after making changes to some of the files. To do this, run docker compose down and then follow steps 5-8.


Note:

You may need to completely "destroy" the database after making changes to certain .py files (such as serializers, models, views, etc.). In this scenario, do the following to ensure your changes are properly reflected. These will be ran in your terminal in the web_project directory.

docker compose down -v
docker compose up --build
Next Portion Should Take Place in a New Terminal in webproject Directiory

docker compose exec web python manage.py makemigrations
docker compose exec web python manage.py migrate
docker compose exec web python manage.py makemigrations gradebuddy
docker compose exec web python manage.py migrate gradebuddy


Terminology:

Home Page: the screen that appears after logging in that shows all classes that a user has created. For new users, a blank home page will appear prompting the user to create their first class.

Class Page: the screen that you get directed to after clicking on a class that shows all the categories for the specific class. May contain 0 categories.

Categories Page: the screen that you get directed to after clicking on a category that shows all the assignments for the specific category. May contain 0 assignments.

