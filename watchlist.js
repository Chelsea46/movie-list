import {displayMovieList} from "./index"
const watchResults = document.getElementById("watch-result-grid")
const watchList = JSON.parse(localStorage.getItem("savedMovieArray"));
console.log(watchList)


function renderWatchList(){

    console.log("hello")
    // watchResults.innerHTML += 
    // ` 
    //     <div class = "movie-poster">
    //         <img src = "${data.Poster}" alt = "movie poster">
    // </div>
    //     <div class = "movie-info">
    //         <h3 class = "movie-title">${data.Title}</h3><p>⭐${data.Ratings[0].Value}</p>
    //         <ul class = "movie-misc-info">
    //             <li class = "year">Year: ${data.Year}</li>
    //             <li class = "rated">Rated: ${data.Rated}</li>
    //             <li class="genre">Genre:${data.Genre}</li>
    //             <li class = "duration">${data.Runtime}</li>
    //             <div id="wish-btn"><i class="fa-solid fa-circle-plus"></i></div>
    //         </ul>
    //         <p class = "plot"><b>Plot:</b>${data.Plot}</p>
    //         <p> ${data.imdbID}
    // </div> 
    // <div class="row-border"></div>
    // `

}


window.onload=()=>renderWatchlist();