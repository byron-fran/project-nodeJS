import router from './routers/index.js'
import express from 'express';
import db from './config/db.js'

const app = express();

//conexion base de datos

db.authenticate()
    .then(()=> console.log('conexion base de datos conenctado'))
    .catch((err)=> console.log(err))


//habilitar pug
app.set('view engine', 'pug');

app.use((req,res,next)=>{
    const year = new Date();

    res.locals.fecha = year.getFullYear();
    next()

});

//habilitar body parser
app.use(express.urlencoded({ extended:true}))

app.use('', router);
//habilitar css
app.use(express.static('public'));
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('puerto conectado')
})