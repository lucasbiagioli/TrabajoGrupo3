let bntNewMovieDOM = document.getElementById ('btnNewMovie')
let tbodyAdminDOM = document.getElementById('adminTableMovie')
let formCRUDMovieDOM = document.getElementById('formCRUDMovie')
let listMovies = []
let movieToEdit = null;


const storageMovie= localStorage.getItem("listMovies")
if(storageMovie){
    listMovies = JSON.parse(storageMovie) 
}

//funcion para cargar la pelicula editada
function loadEditMovie(movie){
    movieToEdit = movie;
    const codeDOM = document.getElementById('movieCodeForm')
    const titleDOM = document.getElementById('movieTitleForm')
    const descriptionDOM = document.getElementById('movieDescriptionForm')
    const typeOptionDOM = document.getElementById('typeOptionForm')
    codeDOM.value = movie.code
    titleDOM.value = movie.title
    descriptionDOM.value = movie.description
    typeOptionDOM.value = movie.type
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
        btnEditDOM.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`
        btnEditDOM.classList = 'btn btn-outline-dark me-1'
        btnEditDOM.setAttribute("data-bs-toggle", "modal");
        btnEditDOM.setAttribute("data-bs-target", "#productModal");
        btnEditDOM.onclick = () => {loadEditMovie(movie)}
        //btnEditDOM.textContent = `Edit ${movie.title}` 
        const btnDeleteDOM = document.createElement('button')
        btnDeleteDOM.innerHTML = `<span class="fa fa-solid fa-trash"></span>`
        btnDeleteDOM.classList = 'btn btn-outline-danger me-1'
        btnDeleteDOM.setAttribute("data-bs-toggle", "modal");
        btnDeleteDOM.setAttribute("data-bs-target", "#confirmDelete");
        btnDeleteDOM.onclick = () => {deleteMovie(movie.id)}
        const btnFavoriteDOM = document.createElement('button')
        btnFavoriteDOM.innerHTML = `<i class="fa-regular fa-star"></i>`
        btnFavoriteDOM.classList = 'btn btn-outline-dark'
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
    const typeOptionDOM = document.getElementById('typeOptionForm')
    codeDOM.value = ''
    titleDOM.value = ''
    descriptionDOM.value = ''
    typeOptionDOM.value =''
    movieToEdit = null;
}

formCRUDMovieDOM.onsubmit = (e)=>{
    e.preventDefault()
    const codeDOM = document.getElementById('movieCodeForm')
    const titleDOM = document.getElementById('movieTitleForm')
    const descriptionDOM = document.getElementById('movieDescriptionForm')
    const typeOptionDOM= document.getElementById("typeOptionForm")
    if(codeDOM.value.trim()!="" && titleDOM.value.trim()!="" && descriptionDOM.value.trim()!="" && typeOptionDOM.value.trim()!=""){    
        if(movieToEdit){ 
        const id= listMovies.findIndex( m => m.id == movieToEdit.id ) 
             listMovies[id].code = codeDOM.value
             listMovies[id].title = titleDOM.value
             listMovies[id].description = descriptionDOM.value
             listMovies[id].typeoption = typeOptionDOM.value
            }else{
                listMovies.push({
                    id: Date.now(),
                    code: codeDOM.value,
                    title: titleDOM.value,
                    description:descriptionDOM.value,  
                    type:typeOptionDOM.value,
                    publish : true  
                })
            }
                localStorage.setItem('listMovies', JSON.stringify(listMovies))
              
             
                
        }      
        generateTableMovies (listMovies)    
}



generateTableMovies (listMovies)