var Uemail = document.querySelector("#mUemail");
var Uname = document.querySelector("#mUname");
var Upass = document.querySelector("#mUpass");
var error = document.querySelector("#error");
var exist = document.querySelector("#alreadythere");
var submit = document.querySelector("#submit");
var Success = document.querySelector('#Success');
var error2 = document.querySelector('#error2')
var emailval =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var passval = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
var nameval = /^[a-zA-Z_.-]{3,16}$/
var Users = [];

if(localStorage.getItem('data')){
    Users = JSON.parse(localStorage.getItem('data'))
}else{
    Users = [];
}

submit.addEventListener('click',function(){
    var emailExists = Users.some(user => user.Uemail === Uemail.value);
    if (emailExists) {
        exist.classList.replace('d-none','d-flex');
        return; 
    }else{
        addNewUser()
    }
})


function addNewUser(){
    if(emailval.test(Uemail.value) && passval.test(Upass.value) && nameval.test(Uname.value)){
        var newUser = {
            Uname: Uname.value,
            Uemail: Uemail.value,
            Upass: Upass.value,
        }
        Users.push(newUser)
        localStorage.setItem('data',JSON.stringify(Users))
        Success.classList.replace('d-none','d-flex')
        exist.classList.replace('d-flex','d-none')
        error.classList.replace('d-flex','d-none')
        error2.classList.replace('d-flex','d-none')
        clearItem()

        

    }else if(Uemail.value === '' || Uname.value === '' || Upass.value === '' ){
        error2.classList.replace('d-flex','d-none')
        error.classList.replace('d-none','d-flex')
        console.log('errorss');
        
    }else{
        error2.classList.replace('d-none','d-flex')
        error.classList.replace('d-flex','d-none')


    }
}   

 function clearItem(){
    Uname.value = ''
    Uemail.value= ''
    Upass.value = ''
 }




