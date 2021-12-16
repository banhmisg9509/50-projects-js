const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=0fae92c78a7fc40c661268a0b816968d&language=en-US&sort_by=vote_count.desc&include_adult=true&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=0fae92c78a7fc40c661268a0b816968d&query="SEARCH_TERM"';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function getClassByRate(vote) {
  let cssClass = 'red';
  if (vote >= 8) {
    cssClass = 'green';
  } else if (vote >= 5) {
    cssClass = 'orange';
  }
  return cssClass;
}

function showMovies(movies) {
  main.innerHTML = movies
    .map((movie) => {
      const { title, poster_path, vote_average, overview } = movie;

      return `
    <div class="movie">
        <img src=${IMG_PATH + poster_path} alt="${title}"/>
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
    </div>`;
    })
    .join('');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API.replace('SEARCH_TERM', searchTerm));
    search.value = '';
  } else {
    window.location.reload();
  }
});
