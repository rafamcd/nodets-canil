/*
    Essa função é feita para dizer qual é o menu ativo que irá aparecer no site
*/

type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes'; //estou definindo qual type do parâmetro que vou receber (só pode ser esses)

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    }; //a principio vamos criar o objeto de retorno como todos os menus sendo falsos

    //transformando o item do menu que eu quero para true
    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    //retornando o objeto dizendo qual menu deve estar ativo
    return returnObject;
}