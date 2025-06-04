const apiKey = "c251b061cc3873b5dfe2bf2ae9caae5e"; 
const movieid = "";
const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-ES`;

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("movieId");

fetch(movieDetailUrl);
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
        document.querySelector(".imgpj").src = `${data.image}`;
    })
   .catch(function(error){
    console.error("Error: " + error)
})

