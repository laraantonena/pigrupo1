let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let buscar = queryObj.get("busqueda");
let series = queryObj.get("serie");
let peliculas = queryObj.get("pelicula");
let oculto = document.querySelector(".search3");
let encontrado = document.querySelector(".search4");
let texto = document.querySelector(".search2")

console.log(buscar);

if (peliculas) {
    let urlsi = `https://api.themoviedb.org/3/search/movie?api_key=c251b061cc3873b5dfe2bf2ae9caae5&query=${buscar}`;

    fetch(urlsi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let newss = data.results;
            let todoscharacters = ""; 

            if (newss.length === 0) {
                oculto.style.display = "block"; 
                encontrado.style.display = "none";
            } else {
                texto.innerText = `Movies found for: ${buscar}`; 
                for (let i = 0; i < newss.length; i++) {
                    const element = newss[i];
                    todoscharacters += `
                    <article class="article">
                        <a href="detail-movie.html?id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}" class="img">
                            <h3 class="titulos">${element.title}</h3>
                            <p class="fecha">(${element.release_date})</p>
                        </a>
                    </article>`;
                }

                encontrado.innerHTML = todoscharacters; 
                oculto.style.display = "none";
                encontrado.style.display = "flex"; 
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });

} else if (series) {
    let urlll = `https://api.themoviedb.org/3/search/tv?api_key=c251b061cc3873b5dfe2bf2ae9caae5&query=${buscar}`;
    fetch(urlll)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let newss= data.results;
            let todoscharacters = "";

            if (newss.length === 0) {
                oculto.style.display = "block"; 
                encontrado.style.display = "none"; 
            } else {
                texto.innerText = `Series found for: ${buscar}`; 
                for (let i = 0; i < info.length; i++) {
                    const element = info[i];
                    todoscharacters += `
                    <article class="articulo">
                        <a href="detail-serie.html?id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.name}" class="img">
                            <h3 class="titulo">${element.name}</h3>
                            <p class="fecha">(${element.first_air_date})</p>
                        </a>
                    </article>`;
                }
                encontrado.innerHTML = todoscharacters; 
                oculto.style.display = "none"; 
                encontrado.style.display = "flex"; 
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}
