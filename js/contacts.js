var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email_adress');
var telNumberInput = document.getElementById('tel_number');
var subjectInput = document.getElementById('subject');
var messageTextarea = document.getElementById('message');


var isFormValid = true;



// Validatet text field
function validateTextField(){
    var inputValue = this.value;
    var validateResult = validateText(inputValue);
    if (validateResult == false){
        var parentElement = this.parentNode;
        var msgContainer = parentElement.getElementsByClassName('error_msg')[0];
        msgContainer.innerHTML = 'введите текст';
        isFormValid = false;
    }; 
};

function validateText(value){
    return ((value !== '') && (value.length > 2) && (value.length < 100));
};




// Validatet email field
function validateEmailField(){
    var inputValue = this.value;
    var validateResult = validateEmail(inputValue);
    if (validateResult == false){
        var parentElement = this.parentNode;
        var msgContainer = parentElement.getElementsByClassName('error_msg')[0];
        msgContainer.innerHTML = 'email введен <br/> неверно';
        isFormValid = false;
    }; 
};

function validateEmail(value){
    var r = /^\w+@\w+\.\w{2,4}$/i;
    return ((value !== '') && (r.test(value)) && (value.length < 100));
};




// Validatet tel number field
function validateTelNumberField(){
    var inputValue = this.value;
    var validateResult = validateTelNumber(inputValue);
    if (validateResult == false){
        var parentElement = this.parentNode;
        var msgContainer = parentElement.getElementsByClassName('error_msg')[0];
        msgContainer.innerHTML = 'номер введен <br/> неверно';
        isFormValid = false;
    }; 
};

function validateTelNumber(value){
    return ((value !== '') && (!isNaN(value)) && (value.length > 17) (value.length < 20));
};




// Clear error mesage
function clearErrorMesage(){
    var parentElement = this.parentNode;
    var msgContainer = parentElement.getElementsByClassName('error_msg')[0];
    msgContainer.textContent = '';
    isFormValid = true;
};




nameInput.onblur = validateTextField;
nameInput.onfocus = clearErrorMesage;

emailInput.onblur = validateEmailField;
emailInput.onfocus = clearErrorMesage;

telNumberInput.onblur = validateTelNumberField;
telNumberInput.onfocus = clearErrorMesage;

subjectInput.onblur = validateTextField;
subjectInput.onfocus = clearErrorMesage;

messageTextarea.onblur = validateTextField;
messageTextarea.onfocus = clearErrorMesage;


var submitButton = document.getElementById('submitbtn');
submitButton.addEventListener('click', function (){
    var event = new Event('blur');
    nameInput.dispatchEvent(event);
    emailInput.dispatchEvent(event);
    telNumberInput.dispatchEvent(event);
    subjectInput.dispatchEvent(event);
    messageTextarea.dispatchEvent(event);
    
    return isFormValid;
});

