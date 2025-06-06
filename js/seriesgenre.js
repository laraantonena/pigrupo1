const apiKey = 'c251b061cc3873b5dfe2bf2ae9caae5e';

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=es-ES`)
  .then(res => res.json())
  .then(data => {
    const genresSection = document.querySelector('.genre');
    let html = '';

    data.genres.forEach(genre => {
      html += `
        <div class="genero">
          <a href="./detail-genres.html?id=${genre.id}&type=tv&name=${genre.name}">
            <p class="genretitle">${genre.name}</p>
          </a>
        </div>
      `;
    });

    genresSection.innerHTML = html;
  })
  .catch(error => console.log(error));
