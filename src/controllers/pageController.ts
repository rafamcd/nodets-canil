import { Request, Response } from 'express';

import { createMenuObject } from '../helpers/createMenuObject'; //importando a função que irá me retornar um objeto com qual menu deve estar ativo

import { Pet } from '../models/pet'; //importanto Pet (model) que vai ter as funções que irei usar no controller

//função que irei utilizar na rota home
export const home = (req: Request, res: Response) => {
    
    //uso meu model para listar todos os pets (como eu já tipei no model, se eu passar o mouse em cima de list vou ver que já está tipado)
    let list = Pet.getAll();

    //passando para página todos os itens que eu preciso para renderizar a página dinâmicamente
    res.render('pages/page', {
        menu: createMenuObject('all'), //vai me retornar um objeto só com esse menu "all" ativo
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    }); //carrega a view pages/page.mustache com os dados que serão renderizados dinamicamente na tela
};

//função que irei utilizar na rota dogs
export const dogs = (req: Request, res: Response) => {

    //uso meu model para listar os dogs (como eu já tipei no model, se eu passar o mouse em cima de list vou ver que já está tipado)
    let list = Pet.getFromType('dog');

    //passando para página todos os itens que eu preciso para renderizar a página dinâmicamente
    res.render('pages/page', {
        menu: createMenuObject('dogs'), //vai me retornar um objeto só com esse menu "dogs" ativo
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    }); //carrega a view pages/page.mustache com os dados que serão renderizados dinamicamente na tela
};

//função que irei utilizar na rota cats
export const cats = (req: Request, res: Response) => {

    //uso meu model para listar os cats (como eu já tipei no model, se eu passar o mouse em cima de list vou ver que já está tipado)
    let list = Pet.getFromType('cat');

    //passando para página todos os itens que eu preciso para renderizar a página dinâmicamente
    res.render('pages/page', {
        menu: createMenuObject('cats'), //vai me retornar um objeto só com esse menu "cats" ativo
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    }); //carrega a view pages/page.mustache com os dados que serão renderizados dinamicamente na tela
};

//função que irei utilizar na rota fishes
export const fishes = (req: Request, res: Response) => {

    //uso meu model para listar os fishes (como eu já tipei no model, se eu passar o mouse em cima de list vou ver que já está tipado)
    let list = Pet.getFromType('fish');

    //passando para página todos os itens que eu preciso para renderizar a página dinâmicamente
    res.render('pages/page', {
        menu: createMenuObject('fishes'), //vai me retornar um objeto só com esse menu "fishes" ativo
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    }); //carrega a view pages/page.mustache com os dados que serão renderizados dinamicamente na tela
};