const dropDown = document.getElementById("navDrop");
dropDown.addEventListener("click", revealDropDown);

function revealDropDown(){
    document.getElementById("navDrop").classList.toggle("active");
    document.getElementById("navbarDropDown").classList.toggle("hide");
}

const login = document.getElementById("login");
login.addEventListener("click", loggingIn);

function loggingIn(){
    alert("Please enter your username and password")
}

const search = document.getElementById("search");
search.addEventListener("click", searching);

function searching(){
    var text = document.getElementById("searchText").value
    alert("Searching for " + text);
}

const happySearch = document.getElementById("happySearch");
happySearch.addEventListener("click", happySearching);

function happySearching(){
    var text = document.getElementById("searchText").value
    alert("So happy I can search for " + text);
}

const time = new Date();
if(time.getHours() >= 18){
    const style = document.getElementById("stylesheet");
    style.href = 'styledarkmode.css';
    const google = document.getElementById("google");
    google.classList.toggle('hide');
    const googleDark = document.getElementById("google-dark");
    googleDark.classList.toggle('hide');
    const keyboard = document.getElementById("keyboard-icon");
    keyboard.classList.toggle('hide');
    const keyboardDark = document.getElementById("keyboard-icon-dark");
    keyboardDark.classList.toggle('hide');
}

