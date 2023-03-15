let bntNewMovieDOM = document.getElementById ('btnNewMovie')
let tbodyAdminDOM = document.getElementById('adminTableMovie')
let formCRUDMovieDOM = document.getElementById('formCRUDMovie')
let listMovies = []


const storageMovie= localStorage.getItem("listMovies")
if(storageMovie){
    listMovies = JSON.parse(storageMovie) 
}

//funcion para cargar la pelicula editada
function loadMovie(movie){
    const codeDOM = document.getElementById('movieCodeForm')
    const titleDOM = document.getElementById('movieTitleForm')
    const descriptionDOM = document.getElementById('movieDescriptionForm')
    codeDOM.value = movie.code
    titleDOM.value = movie.title
    descriptionDOM.value = movie.description

}




//funcion para eliminar pelicula
function deleteMovie(id){
    listMovies = listMovies.filter(m=> m.id != id)
    localStorage.setItem("listMovies", JSON.stringify(listMovies))
    generateTableMovies(listMovies)
}

//funcion para favoritos



function generateTableMovies (listMovies){
    tbodyAdminDOM.innerHTML = ''
    listMovies.forEach((movie)=> {
        const trDOM = document.createElement('tr')
        const thDOM = document.createElement('th')
        thDOM.textContent = movie.code
        const tdtitleDOM = document.createElement('td')
        tdtitleDOM.textContent = movie.title
        const tdDescriptionDOM = document.createElement('td')
        tdDescriptionDOM.textContent = movie.description
        const tdPublishDOM = document.createElement('td')
        tdPublishDOM.textContent = movie.publish ? "Si" : "No" 
        const tdActionsDOM = document.createElement('td')
        const btnEditDOM = document.createElement('button')
        btnEditDOM.innerHTML = `<span class="fa fa-solid fa-pencil"></span>`
        btnEditDOM.classList = 'btn btn-outline-dark me-1'
        btnEditDOM.setAttribute("data-bs-toggle", "modal");
        btnEditDOM.setAttribute("data-bs-target", "#productModal");
        btnEditDOM.onclick = () => {loadMovie(movie)}
        const btnDeleteDOM = document.createElement('button')
        btnDeleteDOM.innerHTML = `<span class="fa fa-solid fa-trash"></span>`
        btnDeleteDOM.classList = 'btn btn-outline-danger'
        btnDeleteDOM.setAttribute("data-bs-toggle", "modal");
        btnDeleteDOM.setAttribute("data-bs-target", "#confirmDelete");
        btnDeleteDOM.onclick = () => {deleteMovie(movie.id)}
        const btnFavoriteDOM = document.createElement('button')
        btnFavoriteDOM.innerHTML = `<i class="fa-solid fa-star"></i></button>`
        btnFavoriteDOM.classList = 'btn btn-outline-danger'
        btnFavoriteDOM.setAttribute("data-bs-toggle", "modal");
        btnFavoriteDOM.setAttribute("data-bs-target", "#favorite");
        btnFavoriteDOM.onclick = () => {favoriteMovie(movie.title)}
        tdActionsDOM.appendChild(btnEditDOM)
        tdActionsDOM.appendChild(btnDeleteDOM)
        tdActionsDOM.appendChild(btnFavoriteDOM)
        trDOM.appendChild(thDOM)
        trDOM.appendChild(tdtitleDOM)
        trDOM.appendChild(tdDescriptionDOM )
        trDOM.appendChild(tdPublishDOM)
        trDOM.appendChild(tdActionsDOM)
        tbodyAdminDOM.append(trDOM)
    });
}

bntNewMovieDOM.onclick = (e)=>{
    const codeDOM = document.getElementById('movieCodeForm')
    const titleDOM = document.getElementById('movieTitleForm')
    const descriptionDOM = document.getElementById('movieDescriptionForm')
    codeDOM.value = ''
    titleDOM.value = ''
    descriptionDOM.value = ''
}

formCRUDMovieDOM.onsubmit = (e)=>{
    e.preventDefault()
    const codeDOM = document.getElementById('movieCodeForm')
    const titleDOM = document.getElementById('movieTitleForm')
    const descriptionDOM = document.getElementById('movieDescriptionForm')
    const typeOptionDOM= document.getElementById("typeOptionForm")
    if(codeDOM.value && titleDOM.value && descriptionDOM.value && typeOptionDOM.value){
        // const movie = listMovies.find(movie => movie.code == codeDOM)
        //     listMovies[movie].code = codeDOM.value
        //     listMovies[movie].title = titleDOM.value
        //     listMovies[movie].description = descriptionDOM.value
        //     listMovies[movie].typeoption = tbodyAdminDOM.value
                listMovies.push({
                    id: Date.now(),
                    code: codeDOM.value,
                    title: titleDOM.value,
                    description:descriptionDOM.value,           
                })
                localStorage.setItem('listMovies', JSON.stringify(listMovies))
        }      
            generateTableMovies (listMovies)
}



generateTableMovies (listMovies)