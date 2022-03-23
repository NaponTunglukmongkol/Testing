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