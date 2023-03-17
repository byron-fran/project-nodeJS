import {Testimoniales} from '../models/Testimoniales.js'

const guardarTestimoniales = async(req,res)=>{
    const {nombre,correo, mensaje} = req.body;
    const errores = []
    if(nombre.trim() ===''){
        errores.push({mensaje : 'El nombre esta vacio'})
    };
    if(correo.trim() ===''){
        errores.push({mensaje : 'El correo esta vacio'})
    }
    if(mensaje.trim() ===''){
        errores.push({mensaje : "el mensaje esta vacio"})
    };


    if(errores.length>1){
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales',{
            pagina : "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }
    else{
        try{
            await Testimoniales.create({
                nombre, 
                correo,
                mensaje
            });
            res.redirect('/testimoniales')
        }
        catch(err){
            console.log(err)
        }
    }
 
};

export default guardarTestimoniales;