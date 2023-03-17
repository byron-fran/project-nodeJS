import { Testimoniales } from "../models/Testimoniales.js";
import Viaje from "../models/Viaje.js";

const paginaInicio =async (req,res)=>{

    //consultar a base de datos
    try{

       
        const viajes = await Viaje.findAll({limit :3})
        const testimoniales = await Testimoniales.findAll({limit :3})
        res.render('inicio',{
            pagina : "inicio",
            clase :'home',
            viajes,
            testimoniales
    
        })
    }
    catch(err){
        console.log(err)
    }
};
const paginaNosotros = (req,res)=>{
    res.render('nosotros', {
        pagina : "Nosotros"
    })
}
    

const paginaTestimoniales =async(req,res)=>{

    try{
        const testimoniales = await Testimoniales.findAll();
      
    res.render('testimoniales',{
        pagina : "Testimoniales",
        testimoniales
    })}
    catch(err){
        console.log(err)
    }

};
const paginaViajes = async(req,res)=>{
    const viajes = await Viaje.findAll();
    console.log(viajes)
    res.render('viajes',{
        pagina : "Próximos Viajes",
        viajes
    })
}
const  paginaViajesDetalle =async(req,res)=>{
    const {slug } = req.params;
    try{
        const viaje = await Viaje.findOne({where:{slug}})
        res.render('viaje', {
            pagina : 'infomarcion Viaje',
            viaje
        });
    }
    catch(err){
        console.log(err)
    }
  
};


export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaViajesDetalle
};