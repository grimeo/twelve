const nav_title = document.getElementsByClassName('nav-title');

const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('submitlogin');
const err_username_element = document.getElementById('username-tooltip')
const err_password_element = document.getElementById('password-tooltip')

const moon_cover = document.getElementById('moon-cover')
const rocket = document.getElementById('rocket')
const rocket_head = document.getElementById('rocket-head')

const form_modal = document.getElementById('form-modal')
const form = document.getElementById('form')
const modalform_exit_btn = document.getElementById('modal-close-btn')
const nav_login_btn = document.getElementById('nav-login-btn')

nav_title[0].addEventListener('click', () => window.location.href = '#body')
// =================== animation ==========================
window.addEventListener('scroll', () => {
    if(window.pageYOffset < 151){
        moon_cover.style.transform = "translate3d("+(150-window.pageYOffset)+"px,"+(150-window.pageYOffset) +"px,0)";
    }
    //condition for not decreasing the width of rocket booster but notsmooth
    //window.pageYOffset < 800 && rocket.getBoundingClientRect()['width'] < window.pageYOffset
    if(window.pageYOffset < 600){
        rocket.style.width =""+(window.pageYOffset*1.4)+"px";
        rocket_head.style.opacity = "1";
    }
    if(window.pageYOffset == 0) {
        rocket_head.style.opacity = "0";
    }
    // buggy sticky position gonna fix later
    // if(window.pageYOffset > document.documentElement.clientHeight){
    //     document.getElementById('main-navigation').style.top = '0px';
    //     document.getElementById('main-navigation').style.position = 'fixed';

    //     document.getElementById('form').style.transform = 'translate3d(0,120px,0)';
    // } else {
    //     document.getElementById('main-navigation').style.position = 'relative';
    //     document.getElementById('form').style.transform = 'translate3d(0,0,0)';
    // }
    // console.log(window.pageYOffset)
})



// =================== log in validation ==========================
const validate = () => {
    let userfromlocal = localStorage.getItem(username.value); 

    err_password_element.innerHTML = '';
    err_username_element.innerHTML = '';
    
    if(username.value == '' || username.value == null){
        err_username_element.innerHTML = 'Username is required'
    }
    else if(password.value == '' || password.value == null){
        err_password_element.innerHTML = 'Password is required'
    }   
    else if(localStorage.getItem(username.value) === null){
        err_username_element.innerHTML = "'" + username.value + "'" + ' does not exist'
    }
    else if(username.value == JSON.parse(userfromlocal)[0] 
        && password.value !== JSON.parse(userfromlocal)[1]){
        err_password_element.innerHTML = 'Password is incorrect'
    }
    else if(username.value == JSON.parse(userfromlocal)[0]
    && password.value == JSON.parse(userfromlocal)[1]){
        window.location.href ='home.html'
    }
    else {
        console.log('ERRORRRRRR')
    }
}
loginBtn.addEventListener('click', (e) => {
    validate();
})
password.addEventListener('keypress', (e) => {if(e.key === 'Enter'){validate();}})
username.addEventListener('keypress', (e) => {if(e.key === 'Enter'){validate();}})

// =================== login modal ===================
nav_login_btn.addEventListener('click', () => {form_modal.style.display = "block";})
modalform_exit_btn.addEventListener('click', () => { 
    err_password_element.innerHTML = '';
    err_username_element.innerHTML = '';
    form_modal.style.display = 'none';
})
window.onclick = (e) => {
    if(e.target == form_modal){
        err_password_element.innerHTML = '';
        err_username_element.innerHTML = '';
        form_modal.style.display = 'none';
    }
}

