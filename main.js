
// Objetos

// const user  = {
//   name: 'Diego',
//   idade: 27,
//   address: {
//     street: 'Rua teste',
//     number: 176
//   }
// }

// Desestruturação

// const data = user.address 

// correto

// const MostrarIdade = ({name, idade, address, number}) => {
//   const data = {
//     name,
//     idade,
//     address,
//     number
//   };

//   const dados = JSON.stringify(data);

//   return dados;
// };

// const {address,name,idade: age} = user;

// const data = JSON.stringify({address , age  });
// console.log(MostrarIdade(user));

//  Rest Operator

// const {name, ...rest} = user;

// o resto da propriedade menos name que tirei
// console.log(JSON.stringify(rest));

//  Rest e desestruturação para arrays

// const arrays = [1,2,3,4,5,6,7,8,9,10];

// const [] = arrays;

// // const first = arrays[0];

// const [first, , third, ...rest] = arrays;

// console.log(JSON.stringify({first,third, rest})); 

// SHORT SINTAXE OU SINTAXE CURTA

// const name = "Diego";

// const age  = 27;

// const user = {
//   name,
//   age,
// };

// Optional chaining

const user  = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
    zip: {
      code: '89160000',
      city: 'Rio do sul'
    }
  }
}

// user.address ? user.address.street  : 'Não informado';


// user?.address?.zip.code ?? 'Não informado';

// const key = 'street';
// const age = 'idade';


// console.log(JSON.stringify(user.address?.zip?.code ?? 'Não informado')); 

// console.log(JSON.stringify(user.address[key]));
// console.log(JSON.stringify(user.idade[age]));

// métodos de array

// const newArray = [];

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// formas de percorrer um array

// for(const i in array) {
//   console.log(JSON.stringify(array[i])) + 1;
// }

// const newArray = array.map((item) => {
//   if(item % 2 === 0) {
//     return item * 10;
//   }
//   return item;
// });

// console.log(newArray);

// array.forEach((item) => {
//   console.log(JSON.stringify(item));
// })

// array.map((i) => {
//   console.log(JSON.stringify((i * 2)));
// });


// map, filter, every, some, find, findIndex, reduce

// find
// const busca = array.filter( item => item % 2 == 0); 

// console.log(busca);

// recuce

// const soma = array.reduce((acc,item) => {
//   console.log( acc + ','  + item + '----');
//   return acc + item;
// }, 0); // valor  inicial 0

// console.log(soma);

// template literals

// const name = "Diego";
// // const message = "Bem vindo: " + name;

// const message = `Bem vindo, ${name}`;
// console.log(message);

// promises

// const somaDoisNumeros = (a,b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(a+b);
//     },2000);
//   });
// }

// const fetch = ('https://api.github.com/users/diego3g');
 

// somaDoisNumeros(1,3)
//   .then((soma) => {
//     console.log(soma);
//   }).catch((err) => {
//     console.log(err);
//   });


// ex:

/**
 * Criamos uma constante que seu valor
 * está ligado a uma função fetch que
 * nesse exemplo é uma busca na pokeapi
 */

// fetch('https://pokeapi.co/api/v2/pomemon/1/')
//   .then(() => {
//       /**
//      * Sabendo que o retorno dessa função
//      * é um JSON, eu digo, após terminar a
//      * execução da promise, transforme o
//      * seu resultado em um JSON 
//      */
//     return res.json();
//   })
//   .then((res) => {
//      /**
//      * Apenas logando a resposta em formato
//      * JSON vindo da promise
//      */
//       console.log(res);
//   });

// const fetch = require('node-fetch');

// fetch('https://api.github.com/users/diego3g')
//   .then(Response => {
//     console.log(Response.text())
//   })
//   .then(body => console.log(body))
//   .catch((err) => {
//     console.log(err);
//   });


async function buscaDadosGitHub() {
  try{
    const url = "zxxcxzc";
    const response = await url('adsdasd');
    const body = await response.json();
  }catch(err) {
    console.log(err);
  }
}

buscaDadosGitHub();