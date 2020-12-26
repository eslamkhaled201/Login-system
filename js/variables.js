let emailInput = $("#userEmailIn");
let passwordInput =  $("#userPassIn");
let userNameInput =  $("#userNameIn");
let signInBtn = $("#signInBtn");
let signUpBtn =  $("#signUpBtn");
let URLOrigin = `${location.origin}${location.pathname}`; 

export{
    emailInput, 
    passwordInput, 
    userNameInput, 
    signInBtn, 
    signUpBtn,
    URLOrigin
}