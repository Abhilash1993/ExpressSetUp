# express-mysql-restapi

Rest API's with Winston logger implemented.

# to run the App
1. create datbase named "team-member" , table named "users" (please refer file https://github.com/Neera-Dixit/express-mysql-restapi/blob/master/src/util/db_util.js for more info)
2. npm install
3. npm start
4. access Rest APi using the follow url's using POSTMAN

i. http://localhost:8123/viewAll - GET - to get all the user details
ii. http://localhost:8123/deleteMember/1 - DELETE - to delete a user with user ID '1'
iii. http://localhost:8123/editMember/1 - POST - to update user details  with user ID '1' (user details as part of request body)
iv. http://localhost:8123/addMember - POST - to add a new user (user details as part of request body , no need os user ID as user ID will be auto generated)

