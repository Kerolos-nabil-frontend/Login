var email= document.getElementById('floatingInput')
var password= document.getElementById('floatingPassword')
var loginBtn= document.getElementById('Loginbtn')
var usersList=[];

if(localStorage.getItem('inputs')) {
    linkList= JSON.parse(localStorage.getItem('inputs')) ;
    }

console.log(email,password,loginBtn)

loginBtn.addEventListener('click',function(){
    login()
    clearForm()
})

function login(){
    // window.open('https://display.html')
    console.log(email.value)
    console.log(password.value)

}

var users= {
   userEmail: email.value,
   userPass: password.value
}

console.log(users)

usersList.push(users)
localStorage.setItem('inputs',JSON.stringify(usersList))



function clearForm(){
    email.value= null
    password.value= null
   
}
var emailAlert= document.getElementById('emailAlert')
function inputValidation(){
    var regex= /^[a-zA-Z0-9.]+@[a-z0-9.]+\.[a-zA-Z]{3,10}$/;
    var value= email.value;
    if (regex.test(value) == true){
        console.log(value)
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        emailAlert.classList.replace('d-block','d-none')
        console.log('match')
    }else{
        console.log('no match')
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        emailAlert.classList.replace('d-none','d-block')
    }
}
var passAlert= document.getElementById('passAlert')
function passValidation(){
    var regex= /^[a-zA-Z0-9]{3,10}$/;
    var value= password.value;
    if (regex.test(value) == true){
        console.log(value)
        password.classList.add('is-valid')
        password.classList.remove('is-invalid')
        passAlert.classList.replace('d-block','d-none')
        console.log('match')
    }else{
        console.log('no match')
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
        passAlert.classList.replace('d-none','d-block')
    }

}

floatingInput.addEventListener('input',function(){
    inputValidation()
})
floatingPassword.addEventListener('input',function(){
    passValidation()
})