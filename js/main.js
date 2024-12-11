var smaeArray = JSON.parse(localStorage.getItem("dataOfuser"))
var Email = document.getElementById("Email")
var Password  = document.getElementById("Password")
var btn = document.querySelector(".btn")
var name ;

btn.addEventListener("click" , function () {
    for (var i = 0; i < smaeArray.length; i++) {
      if (smaeArray[i].emailInput == Email.value && smaeArray[i].passwordInput == Password.value ) {
          
          window.location = "Home.html" ;
          localStorage.setItem("userName" , smaeArray[i].nameInput)
          break;
        }else if (smaeArray[i].emailInput == Email.value && smaeArray[i].passwordInput != Password.value) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your Password is not Valid ,, Please Try Again",
              });
        }
      }
})

