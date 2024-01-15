const inputs = document.querySelectorAll('.input-field');
const subtmitButton = document.getElementById('submit')


function isEmailValid(email) {
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    //return stops the execution of the function and match() returns an array
    // with the items that are a match from the regex
    return email.match(regex); 
}

// need to get the the valus of the inputs
// the list that will be passed is a NodeList from inputs
function getInputs(list) {
    
}