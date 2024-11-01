const form = document.querySelector(".login-form");
form.addEventListener("submit", abc);


function abc (event) {
event.preventDefault();
const inform = event.currentTarget.elements;

    if (!inform.email.value || !inform.password.value) {
        alert ('All form fields must be filled in');
       } 
    

const informElements = {    
email: inform.email.value.trim(),
password: inform.password.value.trim()

}
       
console.log(informElements);

event.target.reset();
}




