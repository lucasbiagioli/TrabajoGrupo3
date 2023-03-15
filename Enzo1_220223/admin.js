let bntNewMovieDOM = document.getElementById("btnNewMovie");
let tbodyAdminDOM = document.getElementById("adminTableMovie");
let formCRUDMovieDOM = document.getElementById("formCRUDMovie");
let listMovies = [];
let movieToEdit = null;
const storageMovie = localStorage.getItem("listMovies");
if (storageMovie) {
    listMovies = JSON.parse(storageMovie);
}

//funcion para cargar la pelicula editada
function loadEditMovie(movie) {
    console.log(movie);
    document.querySelector(
        "#exampleModalLabel"
    ).innerText = `Edit ${movie.Title}`;
    movieToEdit = movie;
    console.log(movieToEdit);
    const idDOM = document.getElementById("movieIdForm");
    idDOM.value = movie.id;
    const titleDOM = document.getElementById("movieTitleForm");
    titleDOM.value = movie.Title;
    const genreDOM = document.getElementById("genreForm");
    genreDOM.value = movie.Genre;
    const imgDOM = document.getElementById("movieImgForm");
    imgDOM.value = movie.Images;
    const plotDOM = document.getElementById("plotForm");
    plotDOM.value = movie.Plot; 
}

//funcion para eliminar pelicula
function deleteMovie(id) {
    swal({
        title: "Estas seguro que quieres eliminar?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            listMovies = listMovies.filter((m) => m.id != id);
            localStorage.setItem("listMovies", JSON.stringify(listMovies));
            generateTableMovies(listMovies);
            swal("Poof! La Película fue eliminada con exito!", {
                icon: "success",
            });
        } else {
            swal("Tu Película fue salvada!");
        }
    });
}

function favoriteMovie(id) {
    const movie = listMovies.find((m) => m.id == id);
    movie.Principal = !movie.Principal;
    console.log(movie);
    // console.log(listMovies);
    localStorage.setItem("listMovies", JSON.stringify(listMovies));
    generateTableMovies(listMovies);
}


function generateTableMovies(listMovies) {
    tbodyAdminDOM.innerHTML = '';
    listMovies.forEach((movie) => {
        const trDOM = document.createElement("tr");
        const thDOM = document.createElement("th");
        thDOM.textContent = movie.id;
        thDOM.classList = "text-center align-middle";
        const tdTitleDOM = document.createElement("td");
        tdTitleDOM.classList = "text-center align-middle";
        tdTitleDOM.textContent = movie.Title;
        const tdGenreDOM = document.createElement("td");
        tdGenreDOM.classList = "text-center align-middle";
        tdGenreDOM.textContent = movie.Genre.split(",")[0];
        const tdPlopDOM = document.createElement("td");
        tdPlopDOM.classList = "text-center  align-middle";
        tdPlopDOM.textContent = movie.Plot;
        const tdPublishDOM = document.createElement("td");
        tdPublishDOM.classList = "text-center align-middle";
        tdPublishDOM.textContent = movie.Delete ? "No" : "Si";
        const tdActionsDOM = document.createElement("td");
        tdActionsDOM.classList = " align-middle d-flex p-5 ";
        const btnEditDOM = document.createElement("button");
        btnEditDOM.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
        btnEditDOM.classList = "btn btn-outline-light me-1";
        btnEditDOM.setAttribute("data-bs-toggle", "modal");
        btnEditDOM.setAttribute("data-bs-target", "#movieModal");
        btnEditDOM.onclick = () => {
            loadEditMovie(movie)    };
        const btnDeleteDOM = document.createElement("button");
        btnDeleteDOM.innerHTML = `<span class="fa fa-solid fa-trash"></span>`;
        btnDeleteDOM.classList = "btn btn-outline-danger me-1";
        btnDeleteDOM.setAttribute("data-bs-toggle", "modal");
        btnDeleteDOM.setAttribute("data-bs-target", "#confirmDelete");
        btnDeleteDOM.onclick = () => {
            deleteMovie(movie.id);
        };
        const btnFavoriteDOM = document.createElement("button");
        btnFavoriteDOM.innerHTML = `<i class="fa-regular fa-star"></i>`;
        btnFavoriteDOM.classList = `btn btn-outline-light ${
      movie.Principal ? "fav" : ""
    }`;
        btnFavoriteDOM.setAttribute("data-bs-toggle", "modal");
        btnFavoriteDOM.setAttribute("data-bs-target", "#favorite");
        btnFavoriteDOM.onclick = () => {
            favoriteMovie(movie.id);
        };
        tdActionsDOM.appendChild(btnEditDOM);
        tdActionsDOM.appendChild(btnDeleteDOM);
        tdActionsDOM.appendChild(btnFavoriteDOM);
        trDOM.appendChild(thDOM);
        trDOM.appendChild(tdTitleDOM);
        trDOM.appendChild(tdGenreDOM);
        trDOM.appendChild(tdPlopDOM);
        trDOM.appendChild(tdPublishDOM);
        trDOM.appendChild(tdActionsDOM);
        tbodyAdminDOM.append(trDOM);
    });
}

bntNewMovieDOM.onclick = (e) => {
    const idDOM = document.getElementById ("movieIdForm");
    const titleDOM = document.getElementById("movieTitleForm");
    const plotDOM = document.getElementById("plotForm");
    const genreDOM = document.getElementById("genreForm");
    const imgDOM = document.getElementById("movieImgForm");
    idDOM.value = ''
    titleDOM.value = ''
    genreDOM.value = ''
    plotDOM.value = ''
    imgDOM.value = ''

    movieToEdit = null;
};


formCRUDMovieDOM.onsubmit = (e) => {
    e.preventDefault();
    const idDOM = document.getElementById("movieIdForm");
    const titleDOM = document.getElementById("movieTitleForm");
    const genreDOM = document.getElementById("genreForm");
    const plotDOM = document.getElementById("plotForm");
    const imgDOM = document.getElementById("movieImgForm");
    if (
        idDOM.value &&
        titleDOM.value &&
        genreDOM.value &&
        plotDOM.value &&
        imgDOM.value
    ) {
        if (movieToEdit) {
            const id = listMovies.findIndex((m) => m.id == movieToEdit.id);
            listMovies[id].id = idDOM.value;
            listMovies[id].Title = titleDOM.value;
            listMovies[id].Genre = genreDOM.value;
            listMovies[id].Plot = plotDOM.value;
            listMovies[id].Images = imgDOM.value;
        } else {
            const newMovie = {
                id: Date.now(),
                ComingSoon: true,
                Title: titleDOM.value,
                Year: "2016",
                Rated: "PG-13",
                Released: "30 Dec 2013",
                Runtime: "1h 30min",
                Genre: genreDOM.value,
                Director: "David F. Sandberg",
                Writer: "N/A",
                Actors: "Teresa Palmer, Maria Bello, Gabriel Bateman, Alexander DiPersia",
                Plot: plotDOM.value,
                Language: "English",
                Country: "USA",
                Awards: "N/A",
                Poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sS5mCrpSXghQl4kh2y3aTN4M74v.jpg",
                Metascore: "N/A",
                imdbRating: "N/A",
                imdbVotes: "N/A",
                imdbID: "tt332220",
                Type: "movie",
                Response: "True",
                Available: true,
                Delete: false,
                Principal: false,
                Trailer: "https://www.youtube.com/watch?v=w1VXHtIqrYU&ab_channel=WarnerBros.PicturesEspa%C3%B1a",
                Images:imgDOM.value,
            };

            listMovies.push(newMovie);
        }
        localStorage.setItem("listMovies", JSON.stringify(listMovies));
        generateTableMovies(listMovies);
    }
};

generateTableMovies(listMovies);