require('dotenv').config();
const mysql=require('mysql');
//mysql://:@/?reconnect=true
const coneccion=mysql.createConnection({
                                host:'db4free.net',
                                database:'crudfoliaco',
                                user:'miguelfoliaco',
                                password:'Mr.zektalol'})

coneccion.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connect success");
    coneccion.end();
})

module.exports=coneccion;
