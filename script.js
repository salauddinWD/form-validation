let first_name = document.querySelector('.first_name')
let first_nameErr = document.querySelector('.first_nameErr')

let last_name = document.querySelector('.last_name')
let last_nameErr = document.querySelector('.last_nameErr')


let number = document.querySelector('.number')
let numberErr = document.querySelector('.numberErr')


let email = document.querySelector('.email')
let emailErr = document.querySelector('.emailErr')


let password = document.querySelector('.password')
let passwordErr = document.querySelector('.passwordErr')

let button = document.querySelector('.button')

button.addEventListener('click', function(e){
    e.preventDefault()
    if(first_name.value ==''){
        console.log(first_nameErr.innerHTML='First Name Required')


        first_name.style = 'border: 1px solid red;'
        first_nameErr.style = 'width: fit-content; padding: 5px;  background-color: red; color: white; border-radius: 5px;'
    }
    else{
        first_nameErr.innerHTML='' 
        first_nameErr.style = 'background-color: none;'
        first_name.style = 'border: 1px solid green;'
    }

    if (last_name.value ==''){
       last_nameErr.innerHTML='Last Name Required'


        last_name.style = 'border: 1px solid red;'
        last_nameErr.style = 'width: max-content; padding: 5px; background-color: red; color: white; border-radius: 5px;'
    }

    else{
        last_nameErr.innerHTML=''
        last_nameErr.style = 'background-color: none;'
        last_name.style = 'border: 1px solid green;'
    }

    if(number.value ==''){
        numberErr.innerHTML='Number Required'


        number.style = 'border: 2px solid red;'
        numberErr.style = 'width: fit-content; padding: 5px; background-color: red; color: white; border-radius: 5px;'
    }

    else{
      numberErr.innerHTML='' 
      numberErr.style = 'background-color: none;'
      number.style = 'border: 2px solid green;'
    }

    if(email.value ==''){
        emailErr.innerHTML='Email Required'

        
        email.style = 'border: 2px solid red;'
        emailErr.style = 'width: fit-content; padding: 5px; background-color: red; color: white; border-radius: 5px;'
    }

    else{
       emailErr.innerHTML=''
       emailErr.style = 'background-color: none;'
       email.style = 'border: 2px solid green;'
    }

    if(password.value ==''){
        passwordErr.innerHTML='Password Required'


        password.style = 'border: 2px solid red;'
        passwordErr.style = 'width: fit-content; padding: 5px; background-color: red; color: white; border-radius: 5px;'
        
    }

    else{
        passwordErr.innerHTML=''
        passwordErr.style = 'background-color: none;'
        password.style = 'border: 2px solid green;'

    }
  
})