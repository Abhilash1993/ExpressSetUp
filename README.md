# express-mysql-restapi

Rest API's with Winston logger implemented.

# To run the App
1. create datbase named "team-member" , table named "users" (please refer file https://github.com/Neera-Dixit/express-mysql-restapi/blob/master/src/util/db_util.js for more info)
2. npm install
3. npm start
4. access Rest APi using the follow url's using POSTMAN

# To access the API
1. http://localhost:8123/viewAll - GET - to get all the user details
2. http://localhost:8123/deleteMember/1 - DELETE - to delete a user with user ID '1'
3. http://localhost:8123/editMember/1 - POST - to update user details  with user ID '1' (user details as part of request body)
4. http://localhost:8123/addMember - POST - to add a new user (user details as part of request body , no need os user ID as user ID will be auto generated)

can you the following schema to create table

id int,
first_name varchar(60),
last_name varchar(30),
phone varchar(30),
email varchar(30),
role varchar(8)


access the link https://github.com/Neera-Dixit/express-mysql-restapi/blob/master/src/logFile.txt to view the sample logs generated
