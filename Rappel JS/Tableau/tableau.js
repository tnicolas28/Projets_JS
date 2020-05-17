let monTableau = ['Jean','Didier','Pat'];
let monTableau2D = [

    ['Jean','Didier','Pat'],
    ['Dujardin','Raoult','Ewing']

];

let tableauAssociatif = {

    'prenom' : 'Jean',
    'nom' : 'Dujardin',
    'metier' : 'Acteur'
};

//AJOUT ELEMENT : PUSH (ajout à la fin) ou UNSHIFT (au début)

// //Ajout d'un élément dans un tableau 
// monTableau.push('Jacques'); //A la fin
// monTableau.unshift('Ezra'); //Au début

// //Ajout d'un élément dans un tableau 2D
// monTableau2D[0].push('Jacques'); //Ajout dans le 1er nableau
// monTableau2D[1].push('Cartier'); //Ajouter dans le 2nd tableau
// console.log(monTableau2D);

// //Ajout d'élément dans un tableau associatif
// tableauAssociatif['nationalite'] ='Français';
// console.log(tableauAssociatif);


//RETIRER DES ELEMENTS D'UN TABLEAU : SHIFT (retire au début) , POP

//Tableau normal
// monTableau.shift();
// console.log(monTableau);

// //Tableau 2D
// monTableau2D[0].pop();
// console.log(monTableau2D);

// //Tableau associatif                                         
// delete(tableauAssociatif.metier);
// console.log(tableauAssociatif);

//Trouver un index : UNIQUEMENT VALABLE SUR LES TABLEAU SIMPLE
// console.log(monTableau.indexOf('Jean')); // Affiche 0 car c'est l'index de cet élément

//Transformer tableau en chaine de caracteres
// console.log(monTableau.join(' ')); //En parametre on peut modifier les séparateurs
// console.log(monTableau2D[0].join(' '));

//SPLICE : Disponible pour les tableaux simple et à plusieurs dimensions
//Permet de modifier, remplacer, ajouter et supprimer des éléments
// monTableau.splice(0,0,'yo','les','potes');
// console.log(monTableau);

// let ajoutTableau = ['35','40','45'];
// monTableau2D.splice(2,0,ajoutTableau);
// console.log(monTableau2D);

//For In (Renvoie l'index)
// let panier = ['pomme','poire','banane'];

// for (const fruit in panier) {
//     console.log(panier[fruit]);
// }

//For of (Renvoie la valeur de l'élément)
// let panier = ['pomme','fraise','poire']
// for (const fruit of panier) {
//     console.log(panier.indexOf(fruit));    
// }

// //For Each (à utiliser avec une fonction anonyme ou utilisation avec fonction flechée)
// let listePays = ['France','Japon','Maroc','Turquie'];
// listePays.forEach(pays => console.log(pays)); //Fonction flechée
// listePays.forEach(function(pays){console.log(pays);}); //Fonction anonyme

// //Concaténer un tableau associatif
// let chaine ='';
// for (const valeur in tableauAssociatif) {
//    chaine += (valeur + ' : ' + tableauAssociatif[valeur] + '\n'); 
// }
// console.log(chaine);

function concatenerTableauAssociatif(tableau){
    let chaine = '';
    for (const valeur in tableau) {
        chaine += (valeur + ' : ' + tableau[valeur] + '\n'); 
     }
     console.log(chaine);
}

let profil = {

    'nom' : 'Zed',
    'ville' : 'Paris',
    'telephone' : '0645783241'

} ;

concatenerTableauAssociatif(profil);

