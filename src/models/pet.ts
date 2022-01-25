/*
    Model que vai retornar os pets (ex: Pegar todos os Pets, filtrar os pets por tipo e filtrar os pets por nome)
*/

//como não temos banco de dados vamos devolver os dados tudo em um array (vamos fingir que esse é o nosso banco de dados)

//para não ficar repetindo sempre 'dog' | 'cat' | 'fish" vamos criar um type pra isso
type PetType = 'dog' | 'cat' | 'fish';

//criando o type que será utilizado no array de retorno
type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: 'Masculino' | 'Feminino'
}

//como todos os itens do array possuem sempre os mesmos tipos, eu uso o type Pet (sendo assim eu não posso passar um tipo igual "macaco" por exemplo)
//então data é um array do type Pet
const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino'
    },
];

//agora que temos nosso array (imagine que isso vem do banco de dados), vamos fazer as funções do model.
export const Pet = {

    //funções do meu model

    //getAll vai retornar todos os pets (array do type Pet[]) e não recebe nenhum parâmetro
    getAll: ():Pet[] => {
        return data;
    },

    //filtrar pelo tipo do pet (o parâmetro só vai aceitar se o tipo for dog, cat ou fish)
    getFromType: (type: PetType): Pet[] => {
        
        //fazendo a filtragem pelo tipo e retornando o array
        return data.filter(item => {
            //vai varrer o array e verificar se o type do item é igual ao type que passei no parâmetro
            //para mim essa função filter aí se assimila muito ao foreach
            return (item.type === type); //só vai retornar se o item do array tiver o mesmo type passado pelo parâmetro       
        });
    },

    //filtrar pelo nome do pet (que será utilizado pela busca)
    getFromName: (name: string): Pet[] => {
        
        //fazendo a filtragem pelo nome e retornando o array
        return data.filter(item => {
            return (item.name.toLowerCase().indexOf(name.toLowerCase()) > -1); //se eu passar como parâmetro "pastor alemão" e o item do array tiver esse nome, ele acrescenta no array de retorno. Eu uso o lowercase para não correr o risco de no banco estar PASTOR ALEMÃO e eu buscar por pastor alemão
        });
    }

}