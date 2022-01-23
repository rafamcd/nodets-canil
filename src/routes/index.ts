import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router(); //inicializando as rotas

router.get('/', PageController.home); //rota "/"
router.get('/dogs', PageController.dogs); //rota "/dogs"
router.get('/cats', PageController.cats); //rota "/cats"
router.get('/fishes', PageController.fishes); //rota "/fishes"

router.get('/search', SearchController.search); //rota "/search"

export default router; //exportando as rotas