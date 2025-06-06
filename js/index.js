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

    for(let i = 0; i < 5; i++) {
        moviesHTML += `
            <article class="foto">
                <a href="./detail-movie.html?id=${movies[i].id}">
                <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}"  alt="imagen de pelicula">
                </a>
                <h3>${movies[i].title}</h3>
                <p>${movies[i].release_date}</p>
                
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

    for(let i = 0; i < 5 ; i++) {
        criticaHTML += `
            <article class="foto">
                <a href="./detail-movie.html?id=${criticas[i].id}">
                <img src="https://image.tmdb.org/t/p/w500/${criticas[i].poster_path}" alt="imagen de pelicula">
                </a>
                <h3>${criticas[i].title}</h3>
                <p>${criticas[i].release_date}</p>
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

    for(let i = 0; i < 5; i++) {
        seriesHTML += `
            <article class="foto">
                <a href="./detail-series.html?id=${series[i].id}">
                <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="imagen de serie">
                </a>
                <h3>${series[i].name}</h3>
                <p>${series[i].first_air_date}</p>
            </article>
        `;
    }
    seriesContainer.innerHTML = seriesHTML;
})
.catch(function(error){
    console.error("Error: " + error)
})
