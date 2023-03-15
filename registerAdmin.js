let registerFormDOM = document.getElementById('registerForm')
let adminNameDOM = document.getElementById ('adminName')
let adminEmailDOM = document.getElementById ('adminEmail')
let adminPasswordDOM = document.getElementById ('adminPassword')
let numberIdentificationDOM = document.getElementById('numberIdentification')
let liveToastBtnDom = document.getElementById('liveToastBtn')

let userList = []

const storageUserlist = localStorage.getItem('users')
if (storageUserlist) {
    userList=JSON.parse(storageUserlist)
}    
registerFormDOM.onsubmit = (e) =>{
    e.preventDefault()
    let ingresar = true
    let regexadminEmailDOM = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexLettersOnly = /^[a-zA-Z\s]+$/
    if(adminNameDOM.value.lenght<6){
        ingresar = false
    } 

    else if (!regexLettersOnly.test(adminNameDOM.value)) {
        ingresar = false
      }
    if (!adminEmailDOM.value) {
        ingresar = false    
    }
    if (!adminPasswordDOM.value) {
        ingresar = false
    }
    if (ingresar) {
        let newuser = {
            id : Date.now(),
            name : adminNameDOM.value,
            email : adminEmailDOM.value,
            password : adminPasswordDOM.value,
            admin : true,
        }
        userList.push(newuser)
        localStorage.setItem('users',JSON.stringify(userList))
        registerFormDOM.reset();
        window.location = "./login.html"
    }
  }

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
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





