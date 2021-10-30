require('dotenv').config();
const mysql=require('mysql');
const coneccion=mysql.createConnection({host:'node82715-env-8156362.jelastic.saveincloud.net',
                                        database:'colegio_ambientalista',user:'root',password:'VDliGecnLc'})

coneccion.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connect success");
})

module.exports=coneccion;