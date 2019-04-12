let email = document.querySelector(".emailing");
let emailAddress = email.value;
let btnNotify = document.querySelector(".notify");
let msg = document.querySelector(".message");

function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
        
        msg.innerHTML = "";
        return (true)
    }
    msg.innerHTML = "You have entered an invalid email address!";
    email.style.border = "1px solid red";
    return (false)
}
btnNotify.addEventListener("click", ValidateEmail, false);