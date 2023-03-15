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