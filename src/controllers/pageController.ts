import { Request, Response } from 'express';

//função que irei utilizar na rota home
export const home = (req: Request, res: Response) => {
    res.send('Home no controller');
    // res.render('pages/page');
};

//função que irei utilizar na rota dogs
export const dogs = (req: Request, res: Response) => {

    // res.render('pages/page');
};

//função que irei utilizar na rota cats
export const cats = (req: Request, res: Response) => {

    // res.render('pages/page');
};

//função que irei utilizar na rota fishes
export const fishes = (req: Request, res: Response) => {

    // res.render('pages/page');
};