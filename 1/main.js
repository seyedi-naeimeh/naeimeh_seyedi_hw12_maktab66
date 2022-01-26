let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let register = document.getElementById("register");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal")

register.addEventListener("click", function (event) {
  event.preventDefault();
  

  if (FirstName.value.length <= 3) {
    showError(FirstName, `User name must be At least 3 characters.`);
    
   
  } 
  else {
    showSuccess(FirstName);
    valid = true;
    
  }
  
  if (LastName.value.length <= 3) {
    showError(LastName, `last name must be At least 3 characters.`);
    

  } 
  else {
    showSuccess(LastName);
    valid = true;
    
  }
  if(FirstName.value.length >= 3 && LastName.value.length >= 3){
    openModal()
    setTimeout(function() { window.location = "result.html"; }, 8000);
  }
 

});

const showSuccess = (inputValue) => {
  inputValue.classList.remove("error");
  inputValue.classList.add("success");
  inputValue.nextElementSibling.classList.remove("error");
  inputValue.nextElementSibling.classList.add("success");
  inputValue.nextElementSibling.textContent = "";
};

const showError = (inputValue, message) => {
  inputValue.classList.remove("success");
  inputValue.classList.add("error");
  inputValue.nextElementSibling.classList.remove("success");
  inputValue.nextElementSibling.classList.add("error");
  inputValue.nextElementSibling.textContent = message;
};


function openModal(){
  modal.classList.add('active')
  overlay.classList.add('active')
}

