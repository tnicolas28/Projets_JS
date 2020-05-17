//Fonction timer avec utilisation de la récursivité
function timer(secondes){
    if(secondes > 0){
        console.log(secondes);
        timer(secondes - 1);
    }

    else{
        console.log(secondes);
    }
}

//Fonction timer avec une boucle for
function timerFor(secondes){ 
    for(let i = 0; i <= secondes; secondes--)
    {
        console.log(secondes);
        
    }
}

//timer(10);
//timerFor(10);

//Exercice récursivité

function sommeDecrementee(nombre)
{
 if(nombre > 0)
 {     
     
     nombre  += sommeDecrementee(nombre - 1) ;
 }
 
 
 return nombre;   
}


console.log(sommeDecrementee(1));