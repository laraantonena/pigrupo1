const apiKey = 'c251b061cc3873b5dfe2bf2ae9caae5e';

const queryString = location.search;
const queryParams = new URLSearchParams(queryString);

const genreId = queryParams.get('id');
const type = queryParams.get('type'); // "movie" o "tv"
const genreName = queryParams.get('name');

document.querySelector('h1').innerText = `Género: ${genreName}`;

const endpoint = `https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&language=es-ES&with_genres=${genreId}`;

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    const section = document.querySelector('section');
    let html = '';

    data.results.slice(0, 10).forEach(item => {
      const title = item.title || item.name;
      const imgSrc = item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : './img/no-image.png';

      html += `
        <article>
          <a href="./detail-${type}.html?id=${item.id}">
            <img src="${imgSrc}" alt="${title}">
          </a>
          <h2>${title}</h2>
        </article>
      `;
    });

    section.innerHTML = html;
  })
  .catch(error => console.log(error));
