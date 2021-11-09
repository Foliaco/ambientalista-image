require('dotenv').config();
//const db=require('./database/index');
const express =require('express');
const path=require('path');
const connecion=require('./database/index');
const app=express();
const multer=require('multer');
const cors=require('cors');
let nameimage=null;
const storage=multer.diskStorage({
    destination:path.join(__dirname,'public'),
    filename:(req,file,cb)=>{
        nameimage=Date.now()+file.originalname;
        cb(null,Date.now()+file.originalname)
    }
})

const upload=multer({
        storage,
        fileFilter:(r,f,c)=>{
            const filesaccept=/jpg|png|svg|jfif|jpeg/
            const minetype=filesaccept.test(f.mimetype);
            if(minetype){
                c(null,true)
                console.log('uwu')
            }
            else{
                c(null,false)
                console.log("efe")
            }

        }
        });

//middleware
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'public')))


app.get('/',(req,res)=>{
    return res.send("welcome :)");
})
app.post('/uploadimages',upload.single('image'),(req,res)=>{
    console.log(req.body)

    const {title,body,rol,tipo,persona}=req.body;

    if(title==undefined||tipo==undefined){
        return res.json({
            res:false,
            msj:'Por favor el minimo de campos requeridos'
        })
    }
    else{
        
            connecion.query(`insert into publicaciones(id_publicacion,title,body,image,fecha,usuario,archivado) values(null, '${title}',
                    '${body}','${'https://ambientalista-images.herokuapp.com/public/'+nameimage}',null,${persona},0)`,null,(err,row)=>{
                        if(err){
                            console.log(err)
                            return res.json({
                                res:false,
                                msj:'error en la base de datos',
                                err:err
                            })
                        }
                        return res.json({
                              res:true,
                              msj:'Se subio correctmente los datos'      
                        })
                        
                    })
                }
        //connecion.end();
})

app.set('port',process.env.PORT);
app.listen(app.get('port'),()=>console.log('server in port',app.get('port')));
