let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

fetch()
then(function(response){
     response.json()
})
    .then(function(data) {
      
        console.log(data);
        document.querySelector(".namepj").innerText = data.title;
        document.querySelector(".releasedatepj").innerText = `Fecha de Estreno: ${data.release_date}`;
        document.querySelector(".genrepj").innerText = `Género: ${data.genres[0].name}`;
        document.querySelector(".ratingpj").innerText = `Calificación: ${data.vote_average}`;
        document.querySelector(".runtimepj").innerText = `Duración: ${data.runtime} minutos`;
        document.querySelector(".overviewpj").innerText = `Sinopsis: ${data.overview}`;
        document.querySelector(".imgpj").src = `https://image.tmdb.org/t/p/w500${data.image}`;
    })
   .catch(function(error){
    console.error("Error: " + error)
})

