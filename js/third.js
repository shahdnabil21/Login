var uname = document.querySelector('#name');
var logout = document.querySelector('#Logout');
var username = localStorage.getItem('username');

uname.innerHTML = 'Welcome '   + username

logout.addEventListener('click',function(){
    window.location.href = 'index.html'
})

