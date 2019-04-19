let email = document.querySelector(".emailing");
let emailAddress = "";
let btnNotify = document.querySelector(".notify");
let msg = document.querySelector(".message");
emailAddress = email.value;
function ValidateEmail() {
    //regex to validate email address
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
   // console.log(email.value);
    if (re.test(email.value)) {       
        msg.innerHTML = "";
        email.style.border = "1px solid gray";
        email.style.opacity = 0.9;
        return (true);
    } else {
        msg.innerHTML = "Provide a valid email address!";
      // if (window.outerWidth <= 655) {
          //  btnNotify.style.margin = '5% auto';  
       // }
       
        email.style.focus;
        email.style.border = "1px solid red";
        return (false);
    }
}
/*
btnNotify.addEventListener("mouseover", function () {
    msg.innerHTML = "Provide a valid email address!";
}, false);
btnNotify.addEventListener("mouseout", function () {
    msg.innerHTML = "";
}, false);*/

btnNotify.addEventListener("click", ValidateEmail, false);
