<<<<<<< HEAD
const formularioLogin = document.getElementById('registerForm');

let usuarios = JSON.parse(localStorage.getItem('users'));

console.log(usuarios);

//evento
formularioLogin.addEventListener('submit', validarLogin);

function validarLogin(e) {
	e.preventDefault();
	let inputName = document.getElementById('user_name').value;
	let inputPassword = document.getElementById('user_password').value;

	if (inputName.trim()=='' || inputPassword.trim()==''){
		return console.log("el campo es obligatorio");
	}
	
	let user = usuarios.find((user) => {
		return user.name === inputName;
	});

	let password = usuarios.find((user) => {
		return user.password === inputPassword;
	});

	if (!user || !password){
		return alert("Usuario no encontrado");
		};
		if (user.admin == true) {
			location.href = 'admin.html';
		} else {
			location.href = 'index.html';
		}
	}
=======
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
>>>>>>> 1eae493dcbbb2475fb53c9f7aec742cdfb390313
