let changerVille = document.querySelector('#changer');
changerVille.addEventListener('click',() => {
  let villeChoisie = prompt('Quelle ville souhaitez vous voir ?');
  recevoirTemperature(villeChoisie);
  
})





function recevoirTemperature(ville){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=1e7a8c88a5ae3110380bbe93b336a18b&units=metric';
  let requeteHttp = new XMLHttpRequest();
  requeteHttp.open('GET',url);
  requeteHttp.responseType = 'json';
  requeteHttp.send();
  requeteHttp.onload = function () {
   if(requeteHttp.readyState === XMLHttpRequest.DONE){
      if(requeteHttp.status === 200){
         let reponse = requeteHttp.response;    
          console.log(reponse.main.temp);
      
      document.querySelector('#temperature_label').textContent = reponse.main.temp;
      document.querySelector('#ville').textContent = ville;
   }
  }
}
}