require('dotenv').config();
const mysql=require('mysql');
//mysql://:@/?reconnect=true
const coneccion=mysql.createConnection({
                                host:'uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
                                database:'p0pazym23ybflqyi',
                                user:'haslw3bgqtomglji',
                                password:'wl4fypw7lg1f40ud'})

coneccion.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connect success");
    coneccion.end();
})

module.exports=coneccion;
