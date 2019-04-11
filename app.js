let email = document.querySelector(".emailing");
let emailAddress = "";
console.log(email);
if (email.value !== "") {
    console.log(email.value);
    emailAddress = email.value;
} else {
    email.value = "Please enter an email address";
}

if (!emailAddress.includes(".") && !emailAddress.includes("@")) {
    console.log("enter a valid email address");
    
}