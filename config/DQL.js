import mysql from 'mysql2';
import fs from 'fs';

function Query(sql) {
    let jsonFile = [];

    const connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"password",
        database:"italia",
    });

    connection.connect(function(error){
        if(error) {throw error;}
        connection.query(sql,(error,data)=>{
                if(error) {
                    throw error;
                }

                jsonFile = data;
                jsonFile = JSON.stringify(jsonFile);
                fs.writeFile('allegati/file.json',jsonFile,(error)=>{
                    if(error) { throw error; }
                });
            });

            connection.end();
    });
}

export default Query;