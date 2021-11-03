require('dotenv').config();
const mysql=require('mysql');
//mysql://:@/?reconnect=true
const coneccion=mysql.createConnection({
                                host:'us-cdbr-east-04.cleardb.com',
                                database:'heroku_16ceaac458aabac',
                                user:'b7aed29a3eb1dd',
                                password:'716836f2'})

coneccion.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connect success");
    coneccion.end();
})

module.exports=coneccion;