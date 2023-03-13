let registerFormDOM = document.getElementById('registerForm')
let userNameDOM = document.getElementById ('userName')
let userEmailDOM = document.getElementById ('userEmail')
let userPasswordDOM = document.getElementById ('userPassword')
let confirmPassworDOM = document.getElementById('confirmPasswor')
let btnRegister = document.getElementById('btnRegister')
let userList = []

const storageUserlist = localStorage.getItem('users')
if (storageUserlist) {
    userList=JSON.parse(storageUserlist)
}    
registerFormDOM.onsubmit = (e) =>{
    e.preventDefault()
    let warnings = ""
    let ingresar = true
    let regexuserEmailDOM = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexLettersOnly = /^[a-zA-Z\s]+$/
    if(userNameDOM.value.lenght<6){
        ingresar = false
    } 
    else if (!regexLettersOnly.test(userNameDOM.value)) {
        ingresar = false
      }
    if (!userEmailDOM.value) {
        ingresar = false    
    }
    if (!regexuserEmailDOM.test(userEmailDOM.value)) {
    ingresar = false
    }
    if (!userPasswordDOM.value) {
        ingresar = false
    }
    console.log(confirmPassworDOM.value!==userPasswordDOM.value)
    console.log(ingresar)
    if (confirmPassworDOM.value!==userPasswordDOM.value) {
        ingresar = false      
    }
    console.log(ingresar)
    if (ingresar) {
        let newuser = {
            id : Date.now(),
            name : userNameDOM.value,
            email : userEmailDOM.value,
            password : confirmPassworDOM.value,
            admin : false
        }
        userList.push(newuser)
        localStorage.setItem('users',JSON.stringify(userList))
        registerFormDOM.reset();
        window.location = "./login.html"
    }
    
    
    
}

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } 
        form.classList.add('was-validated')
      }, false)
    })
  })()





