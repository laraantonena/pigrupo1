const apiKey = "c251b061cc3873b5dfe2bf2ae9caae5e";

const moviepopularsurl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const tvpopularsurl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
const criticaurl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
// const moviePopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=c251b061cc3873b5dfe2bf2ae9caae5e`;
// const tvPopularUrl = `https://api.themoviedb.org/3/tv/popular?api_key=c251b061cc3873b5dfe2bf2ae9caae5e`;

const movieContainer = document.querySelector('.peliculaspopulares');
const seriesContainer = document.querySelector('.seriespopulares');
const criticaContainer = document.querySelector('.criticapeliculas');

let moviesHTML = '';
let seriesHTML = '';
let criticaHTML = '';


fetch(moviepopularsurl)
.then(function(response){
    return response.json();
})
.then(function(data){
    let movies= data.results;

    for(let i = 0; i < movies.length; i++) {
        moviesHTML += `
            <article class="foto">
                <a href="./detail-movie.html">
                <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}"  alt="imagen de pelicula">
                </a>
                <h3>${movies[i].title}</h3>
                
            </article>
        `;
    }
    movieContainer.innerHTML = moviesHTML;
})
.catch(function(error){
    console.error("Error: " + error)
})

fetch(criticaurl)
.then(function(response){
    return response.json();
})  
.then(function(data){
    let criticas = data.results;

    for(let i = 0; i < criticas.length; i++) {
        criticaHTML += `
            <article class="foto">
                <a href="./detail-movie.html">
                <img src="https://image.tmdb.org/t/p/w500/${criticas[i].poster_path}" alt="imagen de pelicula">
                </a>
                <h3>${criticas[i].title}</h3>
                
            </article>
        `;
    }
    criticaContainer.innerHTML = criticaHTML;
})
.catch(function(error){
    console.error("Error: " + error)})


fetch(tvpopularsurl)
.then(function(response){
    return response.json();
})  
.then(function(data){
    let series = data.results;

    for(let i = 0; i < series.length; i++) {
        seriesHTML += `
            <article class="foto">
                <a href="./detail-series.html">
                <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="imagen de serie">
                </a>
                <h3>${series[i].name}</h3>
                
            </article>
        `;
    }
    seriesContainer.innerHTML = seriesHTML;
})
.catch(function(error){
    console.error("Error: " + error)
})
//   .then(response {
//     if (!response.ok) {
//       throw new Error('Error fetching popular movies');
//     }
//     return response.json();
//   })
//   .then(data => {
//     const movies = data.results;
//     movies.forEach(movie => {
//       moviesHTML += `
//         <article class="foto">
//           <a href="./detail-movie.html?id=${movie.id}">
//             <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//           </a>
//           <h3>${movie.title}</h3>
//           <p>${movie.overview ? movie.overview.substring(0, 100) + '...' : 'Sin descripción disponible.'}</p>
//         </article>
//       `;
//     });
//     if (movieContainer) {
//       movieContainer.innerHTML = moviesHTML;
//     }
//   })
//   .catch(error => {
//     console.error(error);
//     if (movieContainer) {
//       movieContainer.innerHTML = '<p>No se pudieron cargar las películas populares.</p>';
//     }
//   });

// // Fetch popular TV series
// fetch(tvPopularUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error fetching popular TV series');
//     }
//     return response.json();
//   })
//   .then(data => {
//     const series = data.results;
//     series.forEach(show => {
//       seriesHTML += `
//         <article class="foto">
//           <a href="./detail-series.html?id=${show.id}">
//             <img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">
//           </a>
//           <h3>${show.name}</h3>
//           <p>${show.overview ? show.overview.substring(0, 100) + '...' : 'Sin descripción disponible.'}</p>
//         </article>
//       `;
//     });
//     if (seriesContainer) {
//       seriesContainer.innerHTML = seriesHTML;
//     }
//   })
//   .catch(error => {
//     console.error(error);
//     if (seriesContainer) {
//       seriesContainer.innerHTML = '<p>No se pudieron cargar las series populares.</p>';
//     }
//   });


// const apiKey = "c251b061cc3873b5dfe2bf2ae9caae5e";  
// // const movieId =  
// //  moviepopularsurl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
// const moviePopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;
// const tvPopularUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es-ES&page=1`;
// // let queryString = location.search;  
// // let queryStringObj = new URLSearchParams(queryString);
// // let id = queryStringObj.get("id"); 
// const movieContainer = document.querySelector('.peliculaspopulares');
// const seriesContainer = document.querySelector('.seriespopulares');
// let moviesHTML = '';
// let seriesHTML = '';
// // let peliculaspopulares = ``; 


// fetch(moviepopularsurl)
// .then(function(response) {  
//     return response.json();})
// .then(function(data) {
//     const movies = data.results;
//     movies.forEach(movie => {
//       moviesHTML += `
//         <article class="foto">
//           <a href="./detail-movie.html?id=${movie.id}">
//             <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//           </a>
//           <h3>${movie.title}</h3>
//           <p>${movie.overview ? movie.overview.substring(0, 100) + '...' : 'Sin descripción disponible.'}</p>
//         </article>
//       `;
//     });
// })
// .catch (function (error){
//     console.log (`error:${error}`)
// })
    
// // .then(function(data)
// //  {
            
// //      for(let i = 0; i < peliculaspopulares.length; i++) {
// //         peliculaspopulares += `
// //             <article class="foto">
// //                 <a href="./detail-movie.html?id=${peliculaspopulares[i].id}">
// //                 <img src="https://image.tmdb.org/t/p/w500${peliculaspopulares[i].poster_path}" alt="imagen de pelicula">
// //                 </a>
// //                 <h3>title:"${peliculaspopulares[i].title}"</h3>
// //                 <p></p>
// //             </article>
// //         `;   }
// //     })
    

// //  .catch (function (error){
// //     console.log (`error:${error}`)
// // })

// fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1')
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     let peliculapopular = data.results;
    

//     for(let i = 0; i < peliculapopulare.length; i++) {
//         peliculaspopulares += `
//             <article class="foto">
//                 <a href="./detail-movie.html?id=${peliculaspopulares[i].id}">
//                 <img src="https://image.tmdb.org/t/p/w500${peliculaspopulares[i].poster_path}" alt="imagen de serie">
//                 </a>
//                 <h3>${peliculaspopulares[i].name}</h3>
//                 <p>${peliculaspopulares[i].description}</p>
//             </article>
//         `;
//     }
//     document.querySelector('.tv-popular').innerHTML = sectionHTML;
// })
// .catch (function (error){
//     console.log (`error:${error}`)
// });