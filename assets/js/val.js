const btnSignUpAbbitForm = document.getElementById('signupsec'),
      btnConUs = document.getElementById('btn-contact-us'),
      btnContinueModal = document.getElementById('continue-modal'),
      inputEmail = document.getElementById('email'),
      inputEmailContUs = document.getElementById('email1'),
      inputErrorImg = document.getElementById('errorImg'),
      inputName = document.getElementById('name'),
      inputNameContactUs = document.getElementById('nameContUS'),
      selectSignUp = document.getElementById('sources'),
      spanSelect = document.querySelector('.custom-select-trigger'),
      btnLogInModal = document.getElementById('btnLogInModal'),
      btnReserPassword = document.getElementById('btnReserPassword'),
      inputWatsApp = document.querySelector('.whatsapp-number-input'),
      inputPromote = document.querySelector('.promote-input'),
      inputSkype = document.querySelector('.skype-input'),
      inputTelegram = document.querySelector('.telegram-input'),
      additionalForm = document.getElementById('additional-form'),
      signUpForm = document.getElementById('sign-up-form'),
      reserPasswordForm = document.getElementById('reser-password-form'),
      logInForm = document.getElementById('log-in-form'),
      btnForgotPas = document.querySelector('.btn-forgot_password'),
        //   inputErrorImgPas = document.getElementById('errorImgPas'),

      checkbox = document.getElementById('exampleCheck1');
    //   errorImgContUs = document.getElementById('errorImgContUs');

const password = document.getElementById('password'),
      passwordLogIn = document.getElementById('passwordLog');

// console.log(selectSignUp.value);
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    // const errorImgTest = input.parentElement.getElementById('errorImgPas')
    // console.log(input.parentElement.childNodes);
    const testImage = input.parentElement.childNodes;
    
    
    for (let image of testImage){
        if(image.nodeName == 'IMG'){
            image.classList.remove('d-none')
        }
    }

}

const showPassword = document.getElementById('show_password');
// password show

function show_hide_password(target){
    let inputShow = target.parentElement.querySelector('input');
    if(inputShow.getAttribute('type') == 'password'){
        target.classList.add('view');
        inputShow.setAttribute('type', 'text');
    }else {
        	target.classList.remove('view');
        	inputShow.setAttribute('type', 'password');
        }
}

showPassword.addEventListener('click', () => {
    show_hide_password(showPassword)
})

function checkCheckbox(input){
    if (input.checked === false) {
        input.className = 'form-check-input errorCheck';
    }else{
        input.className = 'form-check-input';
    }
}


function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
    const successBlock = input.parentElement.childNodes;
    for (let image of successBlock){
        if(image.nodeName == 'IMG'){
            image.classList.add('d-none')
        }
    }
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
        // inputErrorImg.classList.toogle('d-none');
        return true
    }else {
        // inputErrorImg.classList.remove('d-none')
        showError(input,'Email is not invalid');
        return false
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            if(getFieldName(input) == 'NameContUS'){
                showError(input,` The name field is required`)
            }else{
                showError(input,` The ${getFieldName(input)} field is required`)
            }
        }else {
            showSucces(input);
            
        }
    });
}

function checkName(input){
    const formControl = input.parentElement;
    if(input.value.length < 1){
        showError(input,` The ${getFieldName(input)} field is required`)
    }else{
        showSucces(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkSelect (select){
    if(select.value == ''){
        spanSelect.classList.add('error');
    }else{
        spanSelect.classList.remove('error');
    }
}

function checkInput (input){
    let errorBlock =  input.parentElement.parentElement.getElementsByClassName('error-wrapper');
    if(input.value == ''){
        console.log(errorBlock[0]);
        if(errorBlock[0]){
            errorBlock[0].classList.remove('d-none');
        }
        input.parentElement.classList.add('errorInput');
        return true
    }else{
        if(errorBlock[0]){
            errorBlock[0].classList.add('d-none');
        }
        input.parentElement.classList.remove('errorInput');
        return false
    }
}

inputWatsApp.oninput = function(){
    let reg = /[A-Za-zA-Яа-яЁё]/g;
this.value = this.value.replace(reg, '')
}

inputWatsApp.addEventListener('blur', () => {
    let errorBlock =  inputWatsApp.parentElement.parentElement.getElementsByClassName('error-wrapper');
    if(inputWatsApp.value.length < 1){
        if(errorBlock[0]){
            errorBlock[0].classList.remove('d-none');
        }
        inputWatsApp.parentElement.classList.add('errorInput');
        // console.log(inputWatsApp.parentElement.parentElement.getElementsByClassName('error-wrapper'));
        errorBlock[0].classList.add('error-wrapper')
    }else{
        if(errorBlock[0]){
            errorBlock[0].classList.add('d-none');
        }
        inputWatsApp.parentElement.classList.remove('errorInput');
    }
})

selectSignUp.addEventListener('blur', () => {
    if(spanSelect.value.length < 1){
        spanSelect.classList.add('errorInput');
    }
})

btnSignUpAbbitForm.addEventListener('click', (e) => {
    
    e.preventDefault();
    checkRequired([email, password]);
    
    checkEmail(email);
    checkCheckbox(checkbox);
    if(additionalForm.querySelector('.error') == null){
        console.log('Good luck');
    }
})



btnConUs.addEventListener('click', (e) => {
    e.preventDefault();
    const check = document.querySelector('.contact-us__input-name-email')
    checkRequired([email1, inputNameContactUs]);
    checkEmail(email1);
    if(check.querySelector('.error') == null){
        console.log('Good luck');
    }

   
})

btnContinueModal.addEventListener('click', (e) => {
    e.preventDefault();
    // checkRequired([selectSignUp, inputPromote])
    checkSelect(selectSignUp);
    checkInput(inputPromote);
    if(selectSignUp.value == 'whatsapp'){
        checkInput(inputPromote);
        checkInput(inputWatsApp);
        if(checkInput(inputWatsApp) == false && checkInput(inputPromote) == false){
            signUpForm.classList.add('d-none');
            additionalForm.classList.remove('d-none');
        }
        
    }else if(selectSignUp.value == 'skype'){
        checkInput(inputSkype);
        checkInput(inputPromote);
        if(checkInput(inputSkype) == false && checkInput(inputPromote) == false){
            signUpForm.classList.add('d-none');
            additionalForm.classList.remove('d-none');
        }
    }else if(selectSignUp.value == 'telegram'){
        checkInput(inputTelegram);
        checkInput(inputPromote);
        if(checkInput(inputTelegram) == false && checkInput(inputPromote) == false){
            signUpForm.classList.add('d-none');
            additionalForm.classList.remove('d-none');
        }
    }
})


btnLogInModal.addEventListener('click', (e) => {
    e.preventDefault();
    checkRequired([email3, passwordLogIn]);
    checkEmail(email3);
    if(logInForm.querySelector('.error') == null){
        console.log('Good luck');
    }
})

btnForgotPas.addEventListener('click', (e) => {
    e.preventDefault();
    logInForm.classList.add('d-none')
    reserPasswordForm.classList.remove('d-none')
})

btnReserPassword.addEventListener('click', (e) => {
    e.preventDefault();
    checkRequired([email4, passwordLogIn]);
    checkEmail(email4);
    
    if(reserPasswordForm.querySelector('.error') == null){
        console.log('Good luck');
    }
})
