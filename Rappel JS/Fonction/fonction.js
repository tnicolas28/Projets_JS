// let maFonction = function (){
//     console.log("Salut ! ");
// }

// let maFonctionFlechee = nom => {console.log('Salut ' + nom + ' !')};
// let maFonctionFlechee2PARAM = (nom,prenom) => {console.log('Salut ' + nom + ' ' + prenom + ' !');}

// maFonction();
// maFonctionFlechee('Nicolas');
// maFonctionFlechee2PARAM('TRAN', 'Nicolas');

//Fonction avec nb parametre infini

function addition(...nombres){
    let resultat = 0;
    nombres.forEach( (nombre) => {
        resultat += nombre;
    })
    console.log(resultat);
}

addition(5,5,5);