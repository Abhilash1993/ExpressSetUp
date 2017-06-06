//db config file
//id int, first_name varchar(60), last_name varchar(30), phone varchar(30), email varchar(30), role varchar(8) table schema
import mysql from 'mysql';

let connectionPool  =    mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : 'abcd',
    database : 'team-member',
    debug    :  false
});

export default connectionPool;
