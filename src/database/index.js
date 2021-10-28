require('dotenv').config();
const mysql=require('mysql');
const coneccion=mysql.createConnection({host:process.env.DB_HOST,database:process.env.DB_NAME,user:process.env.DB_USER,password:''})

coneccion.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connect success");
})

module.exports=coneccion;