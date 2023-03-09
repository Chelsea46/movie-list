const searchBar = document.getElementById("search-bar")
const searchResults = document.getElementById("result-grid")
const searchButton = document.getElementById("search-button")


// https://www.omdbapi.com/?s=thor&apikey=97393ea0

searchButton.addEventListener('click', fetchResults);

function fetchResults(){
    let inputVal = searchBar.value.trim()
    fetch(`https://www.omdbapi.com/?s=${inputVal}&apikey=97393ea0`)
    .then(resp => resp.json())
    .then(data => 
        movieId(data.Search)
        // displayMovieList(data.Search)
    )
}

function movieId(movies){
    for(let i=0; i<movies.length; i++){
        let id = movies[i].imdbID
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=97393ea0`)
        .then(resp => resp.json())
        .then(data => displayMovieList(data))
    }
}

function displayMovieList(data){
    // for(let i=0; i < data.length; i++){
    //     if(data[i].Poster != "N/A")
    //         moviePoster = data[i].Poster;
    //     else 
    //         moviePoster = "image_not_found.png";

        searchResults.innerHTML += 
        ` 
            <div class = "movie-poster">
                <img src = "${data.Poster}" alt = "movie poster">
        </div>
            <div class = "movie-info">
                <h3 class = "movie-title">${data.Title}</h3><p>⭐${data.Ratings[0].Value}</p>
                <ul class = "movie-misc-info">
                    <li class = "year">Year: ${data.Year}</li>
                    <li class = "rated">Rated: ${data.Rated}</li>
                    <li class="genre">Genre:${data.Genre}</li>
                    <li class = "duration">${data.Runtime}</li>
                    <div id="wish-btn"><i class="fa-solid fa-circle-plus"></i></div>
                </ul>
                <p class = "plot"><b>Plot:</b>${data.Plot}</p>
                <p> ${data.imdbID}
        </div> 
    <div class="row-border"></div>
    `
    
    const wishBtn = document.getElementById("wish-btn");
    wishBtn.addEventListener('click', addToWishlist);

    function addToWishlist(){

    }
};

