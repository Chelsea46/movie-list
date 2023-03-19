
const searchBar = document.getElementById("search-bar")
const searchResults = document.getElementById("result-grid")
const searchButton = document.getElementById("search-button")
let movieArray = []
let savedMovieArray = []
let watchlistArray = JSON.parse(localStorage.getItem("watchlistKey")) || []


// https://www.omdbapi.com/?s=thor&apikey=97393ea0

searchButton.addEventListener('click', fetchResults);

function fetchResults(){
    let inputVal = searchBar.value.trim()
    fetch(`https://www.omdbapi.com/?s=${inputVal}&apikey=97393ea0`)
    .then(resp => resp.json())
    .then(data => 
        movieId(data.Search)
    )
};

function movieId(movies){
    for(let i=0; i<movies.length; i++){
        let id = movies[i].imdbID
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=97393ea0`)
        .then(resp => resp.json())
        .then(data => {
            const movie = {
                poster: data.Poster,
                title: data.Title,
                rating: data.Ratings[0].Value,
                runtime: data.Runtime,
                genre: data.Genre,
                plot: data.Plot,
                id: data.imdbID
            }
            movieArray.push(movie)
            localStorage.setItem("movies", JSON.stringify(movieArray))
            displayMovieList(data)
        })
    }
};

function displayMovieList(movie){
        searchResults.innerHTML += 
        ` 
            <div class = "movie-poster">
                <img src = "${movie.Poster}" alt = "movie poster">
        </div>
            <div class = "movie-info">
                <h3 class = "movie-title">${movie.Title}</h3><p>⭐${movie.Ratings[0].Value}</p>
                <ul class = "movie-misc-info">
                    <li class = "year">Year: ${movie.Year}</li>
                    <li class = "rated">Rated: ${movie.Rated}</li>
                    <li class="genre">Genre:${movie.Genre}</li>
                    <li class = "duration">${movie.Runtime}</li>
                    <div id="${movie.imdbID}" onclick="addToLocal(${movie.imdbID})">
                    <i class="fa-solid fa-circle-plus"></i>
                    </div>
                </ul>
                <p class = "plot"><b>Plot:</b>${movie.Plot}</p>
                <p> ${movie.imdbID}
        </div> 
    <div class="row-border"></div>
    `
};

function addToLocal(id) {

    console.log("hello")

    // if(!localArr.includes(id)) {

    //     localArr.push(id)
    //     localStorage.setItem("films", JSON.stringify(localArr))

    //     const currentIdWatchlist = document.getElementById(`${id}-watchlist`)

    //     currentIdWatchlist.innerHTML = `
    //         <img src="./images/circle-check-solid.svg" alt="#" class="check-icon">
    //         <p>Added</p>
    //     `

    //     currentIdWatchlist.classList.remove("watchlist-wrapper")
    //     currentIdWatchlist.classList.add("added-wrapper")

    }
