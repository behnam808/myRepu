document.getElementById('emailInput').addEventListener('input', function(){
    if (this.value===''){
        this.classList.remove('invalid2' ,'invalid')
        errorText.style.display = 'none'
    }
    else if(!this.value.includes('@gmail.com') && 
    !this.value.includes('@yahoo.com') ) {
        this.classList.remove('invalid2')
        this.classList.add('invalid')
        errorText.style.display = 'block'
 
    } else{
        this.classList.remove('invalid')
        this.classList.add('invalid2')
        errorText.style.display = 'none'
    }
})











document.getElementById('emailInputLoc').addEventListener('input', function () {
    let errorText2 = document.getElementById('errorText2'); 
    let password = this.value;

    
    this.classList.remove('invalid', 'invalid2');
    errorText2.style.display = 'none';

    if (password === '') {
     
        return;
    } 
    
    if (password.length < 8) {
        errorText2.textContent = 'Password must be at least 8 characters long';
    } 
    else if (!/[A-Z]/.test(password)) {
        errorText2.textContent = 'Password must have at least one capital letter';
    } 
    else if (!/[a-z]/.test(password)) {
        errorText2.textContent = 'Password must have at least one lowercase letter';
    } 
    else if (!/\d/.test(password)) {
        errorText2.textContent = 'Password must have at least one number';
    } 
    else if (!/[@#٪$]/.test(password)) {
        errorText2.textContent = 'The password must contain at least one special character such as # @ $ %';
    } 
    else {
        
        this.classList.add('invalid2');  
        return; 
    }

  
    this.classList.add('invalid');  
    errorText2.style.display = 'block';
});
document.getElementById('repeatPasswordLooc').addEventListener('input', function () {
    let password = document.getElementById('emailInputLoc').value;
    let repeatPassword = this.value;

    this.classList.remove('invalid', 'invalid2');

    if (repeatPassword === '') {
        return;
    }

    if (repeatPassword !== password) {
        this.classList.add('invalid');
    } else {
        this.classList.add('invalid2');
    }
});


document.querySelector('button').addEventListener('click', function () {
    let email = document.getElementById('emailInput');
    let password = document.getElementById('emailInputLoc');
    let repeatPassword = document.getElementById('repeatPasswordLooc');

 
    let emailValid = email.classList.contains('invalid2');
    let passwordValid = password.classList.contains('invalid2');
    let repeatPasswordValid = repeatPassword.classList.contains('invalid2');

    let emailInvalid = email.classList.contains('invalid');
    let passwordInvalid = password.classList.contains('invalid');
    let repeatPasswordInvalid = repeatPassword.classList.contains('invalid');


    if (emailValid && passwordValid && repeatPasswordValid) {
        let masagee=
        document.getElementById('masagee')
        masagee.style.display = 'block'
        setTimeout(() => {
         masagee.style.display='none' ; 
        }, 4000)
    } 

    else if (emailInvalid&&  passwordInvalid && repeatPasswordInvalid) {
        alert('حداقل یکی رو که درست بزن نامرد');

    } 
    
    else {
        
        let masagees=
        document.getElementById('masagees')
        masagees.style.display = 'block'
        setTimeout(() => {
         masagees.style.display='none' ; 
        }, 5000)
    }
});




document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordInput = document.getElementById("repeatPasswordLooc");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});



document.getElementById("togglePassword1").addEventListener("click", function () {
    let passwordInput = document.getElementById("emailInputLoc");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});