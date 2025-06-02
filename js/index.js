const apiKey = "c251b061cc3873b5dfe2bf2ae9caae5e";  
const movieId =  
 movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-ES`;
let queryString = location.search;  
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id"); 
let section = ``; 


fetch(movieDetailUrl)
.then(function(response) {  
    return response.json();})
    .then(function(data) { 
        let section= data.results;
    })
     for(let i = 0; i < section.length; i++) {
        section += ` <h2></h2>
        <section class="peliculaspopulares">
            <article class="foto">
                <a href="./detail-movie.html">
                <img src=""  alt="imagen de pelicula">
                </a>
                <h3></h3>
                <p></p>
            </article>
        `;   }




// fetch(movieDetailUrl)   
// .then(function(response) {
//     return response.json();
// })  

// .then(function(data) {
//     console.log(data);
//     document.querySelector(".namepj").innerText = data.title;
//     document.querySelector(".releasedatepj").innerText = `Fecha de Estreno: ${data.release_date}`;
//     document.querySelector(".genrepj").innerText = `Género: ${data.genres[0].name}`;
//     document.querySelector(".ratingpj").innerText = `Calificación: ${data.vote_average}`;
//     document.querySelector(".runtimepj").innerText = `Duración: ${data.runtime} minutos`;
//     document.querySelector(".overviewpj").innerText = `Sinopsis: ${data.overview}`;
//     document.querySelector(".imgpj").src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
// })   
