let firstName = document.querySelector('.firstname')
let lastName = document.querySelector('.lastname')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let btn = document.querySelector('.btn')
let form = document.querySelector('form')
let fError = document.querySelector('p.f-error')
let lError = document.querySelector('p.l-error')
let pError = document.querySelector('p.p-error')
let eError = document.querySelector('p.e-error')

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


btn.addEventListener('click', (e)=>{
    if(firstName.value == ''){
        firstName.classList.add('error')
        fError.style.display = 'block'
    } else{
        firstName.classList.remove('error')
        fError.style.display = 'none'
    }

    if(lastName.value == ''){
        lastName.classList.add('error')
        lError.style.display = 'block'
    } else{
        lastName.classList.remove('error')
        lError.style.display = 'none'
    }

    if(password.value == ''){
        pError.style.display = 'block'
        password.classList.add('error')
    } else{
        password.classList.remove('error')
        pError.style.display = 'none'
    }

    if(!email.value.match(validRegex)){
        eError.style.display = 'block'
        email.classList.add('error')
    } else{
        eError.style.display = 'none'
        email.classList.remove('error')
    }

    form.reset()
    e.preventDefault()
})