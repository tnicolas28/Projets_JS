// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small')
let formulaire = document.querySelector('#formulaire');


// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * Math.floor(1000));
let coups = 0;
let nombreChoisi;


// Etape 6 - Créer la fonction vérifier
function verifierNombreChoisi(nombre)
{
    let divInst = document.createElement('div');
    let instructions = document.querySelector('#instructions');

    if(nombre < nombreAleatoire)
    {
        divInst.textContent = '#'+ coups + ' (' + nombre + ') ' +"C'est plus !";
        divInst.className = "instruction plus";

    }

    else if (nombre > nombreAleatoire)
    {
        divInst.textContent = '#'+ coups + ' (' + nombre + ') ' +"C'est moins !";
        divInst.className = "instruction moins";
    }
    else if (nombre == nombreAleatoire)
    {
        divInst.textContent = '#'+ coups + ' (' + nombre + ') ' +"Félicitation vous avez trouvé le juste prix !";
        divInst.className = "instruction fini";
    }
    instructions.prepend(divInst);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
   
    if(isNaN(input.value)){
        error.style.display = "block";
       
    }
    else {
        error.style.display = "none";
        
    }
     
});



// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(isNaN(input.value) || input.value == '' ){
        input.style.borderColor = "red";
    }
    else {
        input.style.borderColor = "silver";
        coups++;
        nombreChoisi = input.value;
        input.value = '';
        verifierNombreChoisi(nombreChoisi);
    }
    
});



