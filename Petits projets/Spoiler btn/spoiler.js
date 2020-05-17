let btn = document.querySelector('button');
var hidden = true;
let paragraphe = document.querySelector('p');
btn.addEventListener('click', () => {

    if(hidden == true && confirm('Etes vous sur ?'))
    {
        
        paragraphe.style.visibility = "visible"; 
        btn.innerHTML = "Cacher";
        hidden = false;
        
    }

    else if (hidden == false)
    {
        btn.innerHTML  = "Voulez vous voir le message caché ?";
        paragraphe.style.visibility = "hidden";
        hidden = true ;
    }


});



