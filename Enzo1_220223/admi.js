const storageMovie = localStorage.getItem('listMovie')
// const storageUserLogIn = localStorage.getItem('userLogIn')
// let userLogIn = undefined;
let movieToEdit = null; //chequear
// if(storageUserLogIn){
//     userLogIn = JSON.parse(storageUserLogIn)
// }else{
//     window.location = 'login.html'
// }

// if(userLogIn.type=='user'){
//     window.location = '/'
// }

let btnNewMovieDOM = document.getElementById('btnNewMovie')



let listMovie = []
if (storageMovie){
    listMovie = JSON.parse(storageMovie)
}
let tbodyDom = document.getElementById('movieTableDetail')

function loadEditMovieModal (movie){
  movieToEdit = movie;
  const nameDom = document.getElementById('nameMovieForm')
  nameDom.value = movie.nombre
  const categoryDom = document.getElementById ('categoryMovieForm')
  categoryDom.value = movie.category
  const detailDOM = document.getElementById('detailMovieForm')
  detailDOM.textContent = movie.description
}




for (let i = 0; i < listMovie.length; i++) {
    const movie = listMovie[i]; 
    const trDOM = document.createElement('tr')
    const thDOM = document.createElement('th')
    thDOM.textContent = movie.id
    const tdMovieDOM = document.createElement('td')
    tdMovieDOM.textContent = movie.movie
    const tdCategoryDOM = document.createElement('td')
    tdCategoryDOM.textContent = movie.category
    const tdDescriptionDOM = document.createElement('td')
    tdDescriptionDOM.textContent = movie.description
    const tdActionsDOM = document.createElement('td')
    tdActionsDOM.textContent = movie.actions
    trDOM.appendChild(thDOM)
    trDOM.appendChild(tdMovieDOM)
    trDOM.appendChild(tdCategoryDOM)
    trDOM.appendChild(tdDescriptionDOM)
    trDOM.appendChild(tdActionsDOM)
}
tbodyDom.appendChild(trDOM)

{/* <tr>
<th scope="row">1</th>
<td>Black Widow</td>
<td>Action</td>
<td>
  Lorem ipsum dolor sit amet, consectetur...
</td>
<td>
  <button type="button" class="btn btn-outline-dark"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL1JREFUSEvtld0NwjAMhM+TMAKwCaPAOxZI7kCMAhuUSYwiUSmQ1A5JI16atyg/352t5AidB3W+HyZA5HwAcAFolxNChFFVT8zDbU6oA+ARwMZ2qXfmYV8L0HCQWbJCRNhcD2c9B8sCJkWtjY8dfzjoDpiUl9Q2dmntr27eooBvhd48hhc58C5sLtEKSN7VryVZe+B+Tc0l8gg1gIKgSbAPZkmSb+Ylh6ikK4Ctp/69/gT0mIvO/4Z+oXpz2wuuP9MZHWBlkAAAAABJRU5ErkJggg=="/></button>
  <button type="button" class="btn btn-outline-dark"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWFJREFUSEvNlUFOwzAQRWdikS30BHCD9gjtJoFlFadruAHcAG7ADVq2rasuId2EI7Q3oDdgXSkaNCWpkjRx7ZBIeBU59rw/32MPQscDO44PrQA+lstHh4guhHgbjcffedEFwPtiMXQQpwBwo8sMER+8IJjFq9XVPkliABik6zeuEKM8pABYK/VFANcNgm/TPX0AKEAKgEgp4oW+lFrrSsq3rhBD3rdPkk8A6BPi020QvPKcNaDOlhTwaxfRix+Gz9aAsvK8Lek3n8Uho+wcjDM4Z0sKKAQ3zqAqOCusm68t06pDtg2+ns8H3mSyySBai5oEJ8eJfSl7RoBIKVbCtX30VmdLpBTf4st8mWszyCxzheiZeF5lsRGAFZkcaGNA6ek4KcXsfxuA2uAMsQbY9op/ATiUma3y0s3deVIe+8lJwxGIs3M9oU4AAuwSovu7MORn+zBaaZnaBvUXO0z2dp7BD7a4NCiXFhHLAAAAAElFTkSuQmCC"/></button>
  <button type="button" class="btn btn-outline-dark"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAihJREFUSEu1VUtym0AU7AdV3lo+QeQTWDlBpI2wVwmlwdtIJ4hzAisnsHOCKFszKrKz0cbKDewThBtEWsZV8FIPDQhhICiJZ0MVaLrfp7tFeOFDL4yPvQhCrR8AsKPU67aFtSZYzOdjZv4iwEQ0GY5GszYkrQlC31+C6E1KACyHSg3+G8Gt7/ctonsAawN6mDAPzjxv+SeSVh2EWn8D8BbMn1JAoksAXx2lxv9McBsEXSuOfwjQgW0fyfMpjn/KM7Ht4zPXjZpI8g5Crd+B6ISZuxbQlUsMdAD0DEBecai1LPi9ef9AwColBCIiisD86CglXW9lGmrNDZWsE9vuZdWarkSyh3V3HKXS4vMOijKU+SbMM5t5NTw/F6Das7i56cVEHYvoGsBJWcY7S/4brd8HQedXHF8RIAtfE9FF0SPPVFQkYWB2qtSkrnwBf4pjka/saU1J0i93XCnTHRKij6ejkbT/7JjokLFUgu/soHz7TutrAj6I9h3Pm1YRLLSOGHjVZLpaoxWiwc0kVybJ5MoNXdYTGNmKuQauuxK1sGVtwi5JJjLr1DtAAObvjuf1q7qsJChkjximF/r+1MTDFoNoemBZnzNXZ4WUSSoJ7ubzC2K+ApB5YOPm3SySN/Jd3C7OrxxlJUEebttyHilJxpkEzbgkLlJjmVMZfnUEki2bGGhQUWl0kaPUcasRGX3LMvOq68xW6Aayr1YETdmz77dWfzj7ghZ//xtqWAwoHxIoTAAAAABJRU5ErkJggg=="/></button>
</td>
</tr> */}

