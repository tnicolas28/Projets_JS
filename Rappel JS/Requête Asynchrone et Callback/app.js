//Les promesses :

//En cours / Honorée / Rompue
//const promesse = new Promise((resolve,reject)=>{
//Tâche asynchrone

//Promesse honorée : appelle resolve()

//Promesse rompue : appelle reject();

//});

function chargerScript(script){
    return new Promise((resolve,reject)=>{
        //Créer un élément 
        let element = document.createElement('script');
        element.src = script;
        document.head.append(element);

        //Deux possibilités : 

        //Resolve()
            element.onload = () => resolve('Fichier ' + script + ' a été chargé');
        //Reject()
            element.onerror = () => reject(new Error('Opération impossble pour le script ' + script));
    });
}

// const promesse = chargerScript('test.js');

// promesse.then(
//     function(result){
//         console.log(result);
//     },
//     function(error){
//         console.log(error);
//     }
// );

async function resultat(){
    try{
        const scriptA = await chargerScript('test.js');
        console.log(scriptA);
        const scriptB = await chargerScript('autre.js');
        console.log(scriptB)
    }
    catch(error){
        console.log(error);
        document.head.lastChild.remove();
    }
}

resultat();

//Async et Await => "sucres syntaxiques"

// async function direBonjour(){
//     const promesse = new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve('Promesse tenue'),3000);
//     });

//     let resultat = await promesse;
//     console.log(resultat);
// }

// direBonjour();