// services file which interacts with the mysql db using queries

import dbConfig from './util/db_util';

let services = {

    //service which returns the TeamMembers
    listTeamMembers : (logger,cb) => {

        dbConfig.getConnection((err,connection)=>{

            let retrStatment = "select * from users"

            if(err){
                logger.log('error','Error Connecting to Mysql DB');
            }
            else {
                    connection.query(retrStatment,function(err,rows){
                    connection.release();

                    if(rows) {
                        cb(null,rows);
                    }
                    else {
                        cb(new Error());
                    }

                 });
            }

         });
    },

    //service which deltes the TeamMember with id
    deleteMember : (id,logger,cb) => {

       let delStatment = "delete from users where id="+id;

        dbConfig.getConnection((err,connection)=>{

            if(err){
                logger.log('error','Error Connecting to Mysql DB');
            }
            else {
                    connection.query(delStatment,function(err,rows){
                    connection.release();

                    if(rows) {
                        cb(null,rows);
                    }
                    else{
                        cb(new Error());
                    }
                });
            }

        });
    },

    //service which adds a new TeamMember
    addMember : (data,logger,cb) => {
        const {first_name,last_name,phone,email,role} = data;

        let addStatment = `insert into users (first_name,last_name,phone,email,role) values ('${first_name}','${last_name}','${phone}','${email}','${role}')`;

        dbConfig.getConnection((err,connection)=>{

            if(err){
                logger.log('error','Error Connecting to Mysql DB');
            }
            else {
                connection.query(addStatment,function(err,rows){
                    connection.release();
                    if(rows) {
                        services.findMember(rows.insertId,logger,(err,data)=> {
                            if(err){
                                cb(new Error());
                            }
                            else {
                                cb(null,data);
                            }
                         });
                    }
                    else{
                        cb(new Error());
                    }
                });
            }

        });
    },

    //service which finds a TeamMember based on id
    findMember : (id,logger,cb) => {

        let delStatment = "select * from users where id="+id;

        dbConfig.getConnection((err,connection)=>{

            if(err){
                logger.log('error','Error Connecting to Mysql DB');
            }
            else {
                connection.query(delStatment,function(err,rows){
                    connection.release();

                    if(rows) {
                        cb(null,rows);
                    }
                    else{
                        cb(new Error());
                    }
                });
            }

        });
    },

     //service which updates a TeamMember data based on id
    editMember : (id,details,logger,cb) => {

       let updateStatement = 'UPDATE users SET ? WHERE id = ?'

        dbConfig.getConnection((err,connection)=>{

            if(err){
                logger.log('error','Error Connecting to Mysql DB');
            }
            else {
                connection.query(updateStatement,[details,id],function(err,rows){
                    connection.release();

                    if(rows) {
                        services.findMember(id,logger,(err,data)=> {
                            if(err){
                                cb(new Error());
                            }
                            else {
                                cb(null,data);
                            }
                         });
                    }
                    else{
                        cb(new Error());
                    }
                });
            }

        });
    }
}

export default services;
