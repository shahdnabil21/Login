var Uemail = document.querySelector("#Uemail");
var Upass = document.querySelector("#Upass");
var error = document.querySelector("#errorL");
var submit = document.querySelector("#submit");
var Users = [];
Users = JSON.parse(localStorage.getItem('data'));
console.log(Users);
submit.addEventListener('click',function(){
    logIn()
})








function logIn(){
    let validUser = false; 
    for (var i = 0; i < Users.length; i++) {
        if (Uemail.value == Users[i].Uemail && Upass.value == Users[i].Upass) {
            localStorage.setItem('username', Users[i].Uname);  
            validUser = true; 
            window.location.href = 'third.html'
            
            console.log(true); 
            break;  
        }
    }

    if (!validUser) {
        error.classList.replace('d-none', 'd-flex');
        console.log('error'); 
    }
}




