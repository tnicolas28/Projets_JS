//Hoisting de fonction
addition(2,3);
//On appelle la fonction avant de la déclarer -> HISSAGE, JS hisse la fonction en tête de page
function addition(a,b){
    console.log(a+b);
}

//Le hissage ne fonctionne qu'AVEC les déclarations de fonction 
additionAno(5,2); //Ce code génère une rreur

//La fonction suivante n'est pas hissée car c'est une EXPRESSION de fonction
let additionAno = function (a,b) {
    console.log(a+b);
}

//Hoisting de variable
console.log(x);
var x = 5;

/*Ce que comprend Javascript 
var x;
console.log(x);
x=5;
*/