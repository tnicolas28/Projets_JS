//Objet

// let chien = {

//     race : 'Caniche',
//     poil : 'Court',
//     nom : 'Siko',
//     aboiement : () => console.log('Wouaf wouaf')


// }

// chien.aboiement();

// //Destructuring sans decomposition
// let informations = ['Femme','Eva','25'];

// let sexe = informations[0];
// let nom = informations[1];
// let age = informations[2];

// //Avec décomposition

// let informations_bis = ['Homme','Rick','31'];

// let [sexe_bis,nom_bis,age_bis] = informations_bis;
// console.log(sexe_bis);

//SET

// let nombre = [10,4,6,87,25,4];
// // let monSet = new Set(nombre);
// let monSet = new Set();
// monSet.add(70);
// monSet.add('80');
// monSet.add(['mon','tableau','de','données']);
// monSet.delete('80');

// console.log(monSet.size);

//MAP

let monMap = new Map([

    ['prenom','Mark'],
    ['nom','Zuckerberg']

])

monMap.set('poste','PDG');
monMap.delete('poste');

console.log(monMap);

let utilisateurs = new Map();
utilisateurs.set('Mark Zuckerberg',{
    email : 'MkZberg@facebook.com',
    poste : 'PDG'
});

utilisateurs.set('Bill Gates',{
    email : 'BGates@microsoft.com',
    poste : 'RichMan'
})

console.log(utilisateurs);

//WEAK SET ne prend que des objets

// let voiture = new WeakSet();
// let M4RS = {

//     constructeur : 'Renault',
//     puissance : '280cv',
// }

// voiture.add(M4RS);
// voiture.delete(M4RS);
// console.log(voiture);

//WEAK MAP ne prend que des objets

// let voiture = new WeakMap();

// let index = {
//     id : 1
// }

// let GT86 = {
//     constructeur : 'Toyota',
//     puissance : '200cv'
// }

// voiture.set(index,GT86);
// voiture.delete(index);
// console.log(voiture);

//SPREAD OPERATOR - OPERATEUR DE COMPOSITION
//Exemple 1 : fusionner plusieurs tableaux

let fruits = ['fraise','poire','banane'];
let aliments = ['chocolat','oeuf','lait', ...fruits]; ///[...fruits] => REST parameter
// let total = aliments.concat(fruits);
console.log(aliments);

//Exemple 2 : découper une chaine de caractere en plusieurs élements
let phrase = "Bonjour les amis, il y a du soleil aujourd'hui";
let phraseTableau = [...phrase];
console.log(phraseTableau);

//Exemple 3 : sélectionner un élement et stocker les autres dans une variable
let devises =['dollars','euros','francs'];
let [premiereDevise,...autres] = devises;

console.log(premiereDevise);
console.log(autres);

