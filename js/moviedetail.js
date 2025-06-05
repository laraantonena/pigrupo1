        let queryString = location.search;
        let queryStringObj = new URLSearchParams(queryString);
        let id = queryStringObj.get("id");
        let article = document.querySelector(".detail-movie");
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c251b061cc3873b5dfe2bf2ae9caae5e`
        console.log(id)

        fetch(url)
            .then(function (response) {
                return response.json();
            })

            .then(function (data) {
               console.log(data);

               let generos = "";

               for (let i = 0; i < data.genre.length; i++) {
                generos += `<a href="detallegenero.html?id=${results.genres[i].id}&nombre=${results.genres[i].name}&tipo=pelicula">${results.genres[i].name}</a>`
               }
               article.innerHTML = `
                 <article>
                   <h1> Nombre de la pelicula: ${data.title} </h1>
                   <img src=""https:/image.tmdb.org/t/p/w500/${data.poster_path}"  alt="${results.title}">
                  <ul>
                   <li> Fecha de lanzamiento:${data.release_date}</li>
                   <li> Genero de la pelicula: ${generos}</li>
                   <li> Calificacion:${data.vote_average}</li>
                   <li> Popularity:${data.popularity} </li>
                   </ul>
                   <p>${data.overview}</p>
                  </article>
               
               `
               })

             .catch(function(error){
    console.log("El error es: " + error)
            });
