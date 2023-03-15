let userNameDOM = document.getElementById('user_name');
let userPasswordDOM = document.getElementById('user_password');
let formLoginDOM = document.getElementById('submit_button')
let userList = []

const storageUserlist = localStorage.getItem('users')
let userLogIn = undefined;


/* if(userLogIn.type == 'user'){
	window.location = 'admin.html'
} else{
	window.location = 'index.html'
}  */

formLoginDOM.onsubmit = (e)=>{
	e.preventDefault()
	const storageUserList = localStorage.getItem('users')
	if(storageUserList){
		userList = JSON.parse(storageUserList)
	}
	const userFind = userList.find( users => users.name === userNameDOM.value.trim() && users.password === userPasswordDOM.value.trim())
	if(userFind){ // Preguntamos si userFind tiene algo (es decir no es undefined)
		window.location = 'index.html'
		if(userFind){ 
			const user = {
				user: userFind.user,
			}
			localStorage.setItem('userLogIn',JSON.stringify(user))
			
			if(userFind.type == 'user'){
				window.location = 'index.html'
			}else{
				window.location = 'admin.html'
			}
		}
	}
}