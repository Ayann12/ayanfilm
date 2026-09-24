const API_KEY = "1ab7beeaa8458f65d10a2c22c4f07fda"

let page = 1;

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
const API_IMAGE_URL = "https://image.tmdb.org/t/p/w1280"



async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}


function showMovies(movies) {
    moviesElement.innerHTML = ''
    movies.forEach(movie => {
        const { title, poster_path, overview } = movie
        const movieCard = document.createElement("div")
        movieCard.classList.add("movie")

        movieCard.innerHTML = `
        <img src="${API_IMAGE_URL + poster_path}" alt="html the movie image" />

        <div class="detail">
         <h3>${title}</h3>
         <p>${overview.substring(0, 200)}...</p>
        </div>
        
       `
        moviesElement.appendChild(movieCard)
    })

}

getMovies(API_URL)