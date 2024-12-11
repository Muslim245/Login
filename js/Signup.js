var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var btn = document.querySelector(".btn")
var Inputs = document.querySelectorAll("input")
var arr = [] ;
var x = true
var y = true
if (arr.length == 0 && localStorage.getItem("dataOfuser") == null) {
    arr = []
}
else {
arr = JSON.parse(localStorage.getItem("dataOfuser"))
}
btn.addEventListener("click" , function () {
    y = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].emailInput == emailInput.value) {
            y = false ;   
            break;
        }}
    if (nameInput.value != "" && emailInput.value != "" && passwordInput.value != "" ) {
       {
         if (x == false) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "your Data is not Vaild ,, Please Try Again",
              });
        }
         if (y == false){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "you cant enter same email again ,, Please Try Again",
              });
        } if (x == true && y == true ) {
            var email = {
                nameInput:nameInput.value ,
                emailInput:emailInput.value ,
                passwordInput: passwordInput.value 
               }
                arr.push(email);
                console.log(arr)
                localStorage.setItem("dataOfuser" , JSON.stringify(arr))
               passwordInput.nextElementSibling.classList.add("d-none")
               claerData()
        }   
}
    }
    else {
        passwordInput.nextElementSibling.classList.remove("d-none")
    }
})


for (var i = 0; i < Inputs.length; i++) {
  Inputs[i].addEventListener("input" , function () {
    var regex = {
        name : /^[a-zA-z]{3,15}$/,
        email : /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
        password : /^[a-zA-z]{3,15}[0-9]{3,9}$/
    }

     if (regex.name.test(Inputs[0].value) && regex.email.test(Inputs[1].value) && regex.password.test(Inputs[2].value)) {
       x = true ;
    }
    else {
         x = false ;
     }
  })
}
function claerData() {
    nameInput.value = "" ;
    emailInput.value = "" ;
    passwordInput.value = "";
}

