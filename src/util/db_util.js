//db config file

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
