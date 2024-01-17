const form = document.getElementById('form');
const emailInput = document.getElementById('email')
const submitButton = document.getElementById('submit');
const textInputs = form.querySelectorAll('input[type="text"]');


function isEmailValid(email) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    //return stops the execution of the function and match() returns an array
    // with the items that are a match from the regex
    // regex.test() returns a boolen true or false
    return regex.test(email); 
}

// need a function that handles what happens when the email is valid or not
function validateEmail() {
    const currentEmail = emailInput.value;
    const emailParent = emailInput.parentNode;

    // removing existing error messages
    const existingErrorMessages = emailParent.getElementsByClassName('error')
    for (let i = 0; i < existingErrorMessages.length; i++) {
        existingErrorMessages[i].remove()
    }
    
    if (!isEmailValid(currentEmail) || currentEmail === '') {
        // parentNode finds the div that contains the element - in this case email input
        emailParent.classList.add('has-error');
        emailParent.classList.remove('no-error');
        // the following code adds the div and text to be added when invalid format
        const HTMLString = `<div class="error">Sorry, invalid format here</div>`
        emailParent.insertAdjacentHTML('beforeend', HTMLString)
    } else {
        emailParent.classList.remove('has-error');
        emailParent.classList.add('no-error');
    }
}

function validateText() {
    // loops through the node list and check whether they have empty strings or not
    // adds the appropriate class depending
    for (let i = 0; i < textInputs.length; i++) {
        const input = textInputs[i]
        const inputParent = input.parentNode

        // removing exisint error messages
        const existingErrorMessages = inputParent.getElementsByClassName('error')
        for (let j = 0; j < existingErrorMessages.length; j++) {
            existingErrorMessages[j].remove()
        }

        if (textInputs[i].value === '') {
            inputParent.classList.add('has-error')
            inputParent.classList.remove('no-error')
            const HTMLString = `<div class="error">Sorry, text cannot be blank</div>`
            inputParent.insertAdjacentHTML('beforeend', HTMLString)
        } else {
            inputParent.classList.remove('has-error')
            inputParent.classList.add('no-error')
        }
    }
}

function reset(form) {
    const errorFields = form.getElementsByClassName('error')
    for (let i = 0; i < errorFields.length; i++) {
        errorFields[i].remove()
    }
}

form.addEventListener('submit', function(event) {
    reset(form)

    validateEmail()
    validateText()
    event.preventDefault()
})