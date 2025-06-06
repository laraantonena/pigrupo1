const apiKey = 'c251b061cc3873b5dfe2bf2ae9caae5e';

const queryString = location.search;
const queryParams = new URLSearchParams(queryString);

const genreId = queryParams.get('id');
const type = queryParams.get('type'); 
const genreName = queryParams.get('name');

const section = document.querySelector('section');
section.classList.add('detailgenres');

document.querySelector('h1').innerText = `Género: ${genreName}`;

const endpoint = `https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&language=es-ES&with_genres=${genreId}`;

fetch(endpoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const section = document.querySelector('section');
    let html = '';

    data.results.slice(0, 10).forEach(function(item) {
      const title = item.title || item.name;
      const imgSrc = item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : './img/no-image.png';

        if (type === "movie") {
          html += `
        <article>
          <a href="./detail-movie.html?id=${item.id}&type=${type}">
            <img src="${imgSrc}" alt="${title}">
          </a>
          <h2>${title}</h2>
        </article>
      `;
        }
      else {
          html += `
        <article>
          <a href="./detail-series.html?id=${item.id}&type=${type}">
            <img src="${imgSrc}" alt="${title}">
          </a>
          <h2>${title}</h2>
        </article>
      `;
        }

    });

    section.innerHTML = html;
  })
.catch(function (error) {
        console.log("El error es: " + error);
    });