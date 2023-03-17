import express from 'express';
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaViajesDetalle } from '../controllers/paginaController.js';
import guardarTestimoniales from '../controllers/testimonialController.js';

const router = express.Router();


router.get('',paginaInicio)

router.get('/nosotros', paginaNosotros);

router.get('/testimoniales', paginaTestimoniales);
//method post
router.post('/testimoniales', guardarTestimoniales);


router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaViajesDetalle);

export default router;
