let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let section = document.querySelector(".detail-movie");

const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c251b061cc3873b5dfe2bf2ae9caae5e`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let generos = "";
        for (let i = 0; i < data.genres.length; i++) {
            generos += `<a href="detail-genres.html?id=${data.genres[i].id}&nombre=${data.genres[i].name}&tipo=pelicula">${data.genres[i].name}</a> `;
        }

        section.innerHTML = `
            <section>
                <h1>Nombre de la película: ${data.title}</h1>
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
                <ul>
                    <li>Fecha de lanzamiento: ${data.release_date}</li>
                    <li>Género: ${generos}</li>
                    <li>Calificación: ${data.vote_average}</li>
                    <li>Popularidad: ${data.popularity}</li>
                </ul>
                <p>${data.overview}</p>
            </section>
        `;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });