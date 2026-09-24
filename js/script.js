const API_KEY = "1ab7beeaa8458f65d10a2c22c4f07fda"

let page = 1;

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`



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
        movieCard.innerHTML = `<p>${title}</p>`
        moviesElement.appendChild(movieCard)
    })

}

getMovies(API_URL)