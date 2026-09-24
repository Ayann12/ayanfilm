const API_KEY = "1ab7beeaa8458f65d10a2c22c4f07fda"

let page = 1;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`



async function getMovies(url) {
    const res = await fetch(url)
    const data = res.json()
    console.log(data.results)
}