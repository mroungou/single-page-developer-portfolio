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
    if (!isEmailValid(currentEmail) || currentEmail === '') {
        // parentNode finds the div that contains the element - in this case email input
        emailInput.parentNode.classList.add('has-error');
        emailInput.parentNode.classList.remove('no-error');
        // the following code adds the div and text to be added when invalid format
        const HTMLString = `<div class="error">Sorry, invalid format here</div>`
        emailInput.parentNode.insertAdjacentHTML('beforeend', HTMLString)
    } else {
        emailInput.parentNode.classList.remove('has-error');
        emailInput.parentNode.classList.add('no-error');
    }
}

function validateText() {
    // loops through the node list and check whether they have empty strings or not
    // adds the appropriate class depending
    for (let i = 0; i < textInputs.length; i++) {
        if (textInputs[i].value === '') {
            textInputs[i].parentNode.classList.add('has-error')
            textInputs[i].parentNode.classList.remove('no-error')
        } else {
            textInputs[i].parentNode.classList.remove('has-error')
            textInputs[i].parentNode.classList.add('no-error')
        }
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault()
    validateEmail()
    validateText()
})