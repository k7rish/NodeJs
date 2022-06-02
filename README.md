# Project

*Problem statement:Create a simple login form where a user can sign in and then there should be one page where user can rate as well as put comments on the movies (you can make list of any 10 movies). The average rating and comments should be visible besides the movie name.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


<h1>Technology Used:</h1>

Front end:
CSS3
Bootstrap

Back end:
Nodejs
EJS
Express

Database used:
MongoDB
Mongoose

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

<h1>Steps required to run the code:</h1>

-Make sure you have nodejs installed in your computer if not I have mentioned the process to download it in windows below

-Install nodemon by entering <strong>npm install -g nodemon</strong> in terminal

-Then install mongodb server on  https://www.mongodb.com/try/download/community (If already downloaded ignore this step)

-Clone the project in your computer by  <strong>git clone https://github.com/abhishekdhar30/Internship_assg02</strong> command on terminal.

-Open the terminal having path set to the directory in which project is present

-Run <strong>npm install</strong> (this command will install all packages present in our json file)

-Run <strong>nodemon app.js</strong> command

-If you are unable to install nodemon for some reason you can also use <strong>node app.js</strong> instead of above step

-Open browser and set url as <strong>localhost:3000</strong> and press enter this will open our project

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------------------------------


<h1>Installation Steps to download nodejs in windows(This step is for those who don't have installed nodejs in their pc)-</h1>

-Download the Windows installer from the https://nodejs.org/en/ web site. 

-Choose the LTS version that’s shown on the left. 

-Run the installer (the .msi file you downloaded in the previous step.)

-Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).

- Restart your computer. You won’t be able to run nodejs until you restart your computer.

- Confirm that Node has been installed successfully on your computer by opening a Hyper terminal and typing in the commands node --version

You should see the version of node you just installed.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------


<h1>Logic:</h1>

I have created two pages one for login and another for movies.

I have set login page as home page i.e It should be the first page of the project

I have created 10 blocks in movies page for movies in which user can enter ratings and comments and they will be reflect beside to movie name where rating and comments are entered

I have used mongoose mongodb database to store data in database 

The actual work should be like this I have stored the data which user entered in database and when the user click on submit button it will show all data  to movies page bcoz I have redirected the page back to movies page 

And I have added one extra feature which is when the user login the page all the previous data in database will be deleted
