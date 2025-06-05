const apiKey = "c251b061cc3873b5dfe2bf2ae9caae5e";  
// const movieId =  
 moviepopularesurl = `https://api.themoviedb.org/3/movie/%${movieid}popular?api_key=${apiKey}`;

// let queryString = location.search;  
// let queryStringObj = new URLSearchParams(queryString);
// let id = queryStringObj.get("id"); 
// let sectionHTML = ``; 


fetch(moviepopularesurl)
.then(function(response) {  
    return response.json();})
    .then(function(data) { 
        let section= data.results;
    })
    //  for(let i = 0; i < section.length; i++) {
    //     sectionHTML += `
    //         <article class="foto">
    //             <a href="./detail-movie.html?id=${sectionHTML[i].id}">
    //             <img src="https://image.tmdb.org/t/p/w500${sectionHTML[i].poster_path}" alt="imagen de pelicula">
    //             <img src=""  alt="imagen de pelicula">
    //             </a>
    //             <h3>title:"${movies[i].title}"</h3>
    //             <p></p>
    //         </article>
    //     `;   }

 .catch (function (error){
    console.log (`error:${error}`)
});


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
