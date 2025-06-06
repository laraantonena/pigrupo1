let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
console.log("ID de la serie:", id);

let section = document.querySelector(".detail-serie");
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=c251b061cc3873b5dfe2bf2ae9caae5e&language=es-ES`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let generos = "";
    for (let i = 0; i < data.genres.length; i++) {
      generos += `<a href="detail-genres.html?id=${data.genres[i].id}&nombre=${data.genres[i].name}&tipo=serie">${data.genres[i].name}</a> `;
    }
    section.innerHTML = `
      <h1>${data.name}</h1>
      <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.name}">
      <ul>
        <li><strong>Fecha de estreno:</strong> ${data.first_air_date}</li>
        <li><strong>Géneros:</strong> ${generos}</li>
        <li><strong>Calificación:</strong> ${data.vote_average}</li>
        <li><strong>Popularidad:</strong> ${data.popularity}</li>
      </ul>
      <p><strong>Sinopsis:</strong> ${data.overview}</p>
    `;
  })
  .catch(function (error) {
    console.error("El error es:", error);
  });