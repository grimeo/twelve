const fname = document.getElementById('new-fname')
const lname = document.getElementById('new-lname')
const username = document.getElementById('new-username')
const password = document.getElementById('new-password')

const err_fname = document.getElementById('fname-tooltip')
const err_lname = document.getElementById('lname-tooltip')
const err_username = document.getElementById('username-tooltip')
const err_password = document.getElementById('password-tooltip')

const createAccBtn = document.getElementById('create-acc-btn')

var create_successful_elemnent = document.getElementsByClassName('create-account-or-success');

create_successful_elemnent[0].style.display = 'block';
create_successful_elemnent[1].style.display = 'none';

let createNewAccount = (username, pass, fname, lname) => {
    let accountDetails = [];
    
    accountDetails[0] = username;
    accountDetails[1] = pass;
    accountDetails[2] = fname;
    accountDetails[3] = lname;
    localStorage.setItem(username, JSON.stringify(accountDetails));
}

let validate = () => {

    err_fname.innerHTML = '';
    err_lname.innerHTML = '';
    err_username.innerHTML = '';
    err_password.innerHTML = '';

    let numOferr = 0;
    if(fname.value === '' || fname.value == null){
        err_fname.innerHTML = 'Firstname is required'
        numOferr += 1;
    }
    if(lname.value === '' || lname.value == null){
        err_lname.innerHTML = 'Lastname is required'
        numOferr += 1;
    }
    if(username.value === '' || username.value == null){
        err_username.innerHTML = 'Username is required'
        numOferr += 1;
    }
    if(password.value === '' || password.value == null){
        err_password.innerHTML = 'Password is required'
        numOferr += 1;
    }
    if (localStorage.getItem(username.value) != null){
        err_username.innerHTML = username.value + ' is taken. Try another.'
        numOferr += 1;
    }
    if (localStorage.getItem(username.value) == null && numOferr == 0){
        console.log(username.value)
        createNewAccount(username.value, password.value, fname.value, lname.value);
        create_successful_elemnent[0].style.display = 'none';
        create_successful_elemnent[1].style.display = 'block';
    }
}

fname.addEventListener('keypress', (e) => { if(e.key === 'Enter'){validate();}})
lname.addEventListener('keypress', (e) => { if(e.key === 'Enter'){validate();}})
username.addEventListener('keypress', (e) => { if(e.key === 'Enter'){validate();}})
password.addEventListener('keypress', (e) => {if(e.key === 'Enter'){validate();}})
createAccBtn.addEventListener('click', () => {validate()})

// fname
    // empty

// lname
    // emtpy

// username 
    // >= 6 char
    // <20

// password
    // >= 6 char
    // <20
    // 