const apiKey = "c251b061cc3873b5dfe2bf2ae9caae5e"; 
const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-ES`;
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("Id");

fetch(movieDetailUrl);
then(function(response){
     response.json()
})
    .then(function(data) {
      
          let section= data.results;
    
     for(let i = 0; i < section.length; i++) {
        section += ` 
        <article id="detail-movie">
                <h1 class="namee"> Nombre de la pelicula: </h1>
                <img class="imgn" src=""  alt="imagen de pelicula">
                <h4 class="releasedatee"> Fecha de lanzamiento: </h4>
                <h4 class="genrepj"> Genero de la pelicula: </h4>
                <h4 class="ratingpj"> Calificacion: </h4>
                <h4 class="runtimepj"> Tiempo de duracion: </h4>
                <p class="decripcionpj"> Descripcion: </p>
         </article>
        `}
    })

   .catch(function(error){
    console.error("Error: " + error)
})
