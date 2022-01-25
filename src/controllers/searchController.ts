import { Request, Response } from 'express';

import { createMenuObject } from '../helpers/createMenuObject'; //importando a função que irá me retornar um objeto com qual menu deve estar ativo

import { Pet } from '../models/pet'; //importanto Pet (model) que vai ter as funções que irei usar no controller

//função que irei utilizar na rota home
export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string; //recebendo o que o usuário digitou na busca e filtrando os Pets que possuem esse nome

    //caso usuário tenha dado ENTER sem ter preenchido a busca, redireciona para página inicial
    if(!query) {
        res.redirect('/');
        return;
    }
    
    let list = Pet.getFromName(query); //fazendo a busca dos pets com o nome enviado

    //passando para página todos os itens que eu preciso para renderizar a página dinâmicamente
    res.render('pages/page', {
        menu: createMenuObject(''), //vai me retornar um objeto com todos os menus desmarcados        
        query,
        list
    }); //carrega a view pages/page.mustache com os dados que serão renderizados dinamicamente na tela
};