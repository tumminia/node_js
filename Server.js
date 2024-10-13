import fs from 'fs';
import express from 'express';
import Query from './config/DQL.js';

const app = express();
const port = 8080;
let tag = "";

app.get('/',(request,response)=>{
    fs.readFile('allegati/index.html',(error,data)=>{
        if(error) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            tag = "<h1 style='text-align:center;color:red;'>HTTP ERROR 404 NOT FOUND</h1>";
            return response.end(tag);
       }

       response.writeHead(200,{
        'Content-Type':'text/html'
       });
       response.write(data);
       response.end();
    });
});

app.post('/json',(request,response)=>{
    Query(
        "SELECT * FROM olimpiadi"
    );
     
    fs.readFile('allegati/file.json',(error,data)=>{
        if(error) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            tag = "<h1 style='text-align:center;color:red;'>HTTP ERROR 404 NOT FOUND</h1>";
            return response.end(tag);
       }

       response.writeHead(200,{
        'content-type':'application/json'
       });
       response.write(data);
       response.end();
    });
});

export {app,port};