import { app,port } from './Server.js';
import mysql from 'mysql2';


app.get('/message',(request,response)=>{
    const connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"password",
        database:"linkedin",
    });

    var nome = request.query.nome;
    var cogn = request.query.cogn;
    var email = request.query.email;
    var text = request.query.text;

    let str = [
        [nome],
        [cogn],
        [email],
        [text]
    ];

    connection.connect((error)=>{
        if(error) { throw error; }

        connection.query(
            "INSERT INTO message (nome,cogn,email,txt) "
            + " VALUE (?,?,?,?)"
            ,str,(error,data)=>{
                if(error) { throw error; }

                response.send('Messagio inviato!');
                response.end();
            }
        );
        
        connection.end();
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});