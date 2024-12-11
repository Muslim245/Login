var btn = document.querySelector(".btn")
var info = document.querySelector(".info")
var nameUser = localStorage.getItem("userName")
info.innerHTML = `Welcome ${nameUser}`
console.log(nameUser)
btn.addEventListener("click" , function () {
    window.location = "./index.html"
})
