function addition(nb1,nb2){
    let result = parseInt(nb1) + parseInt(nb2);
    return result;
}

function soustraction(nb1,nb2){
    let result = parseInt(nb1) - parseInt(nb2);
    return result;
}

function multiplication(nb1,nb2){
    let result = parseInt(nb1) * parseInt(nb2);
    return result;
}

function division(nb1,nb2){
    if (nb2 != 0)
        {
        let result = parseInt(nb1) / parseInt(nb2);
        return result;}
    else {alert('Erreur : impossible de diviser par 0');}
}



function choixCalcul()
{   
    do{
        do{
            var choix = Number(prompt("Selectionner un calcul : \n 1-Addition \n 2-Soustraction \n 3-Multiplication \n 4-Division "));
            console.log(choix);
        }while(choix != 1 && choix != 2 && choix != 3 && choix != 4);

        do {

                var nb1 = prompt("Entrez le premier nombre");
                var nb2 = prompt("Entrez le second nombre"); 

        }while(isNaN(nb1) || isNaN(nb2));

        
            switch (choix) {

                case 1 :
                    resultat = addition(nb1,nb2);
                    break;
                case 2 :
                    resultat = soustraction(nb1,nb2);
                    break;
                case 3 :
                    resultat = multiplication(nb1,nb2);
                    break;
                case 4 :
                    if (nb2 != 0){resultat = division(nb1,nb2);}
                    else{alert("Erreur : impossible de diviser par 0");}
                    break;
                default :
                    alert("Erreur : veuillez choisir une opération valide"); 
            }
        alert(resultat);
        let restart =  confirm("Voulez vous refaire un calcul ?");
        
   
        }while(restart == true || nb2 == 0);
    }

choixCalcul();
