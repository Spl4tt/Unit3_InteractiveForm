// Focus first element
const name = document.getElementById('name');
name.focus();

// declare mail for later
const mail = document.getElementById('mail');

// Add real-time validation for mail field
mail.addEventListener('input', (e) => {
    mailValidation();
});

// ”Job Role”
// Hide the 'inputOtherJob'
const inputOtherJob = document.getElementById('other-title');
inputOtherJob.style.display = 'none';

// Select "Job Role" select, and add listener to show 'inputOtherJob' input
const selectJobRole = document.querySelector('#title');
selectJobRole.addEventListener('change', (e) => {
    // Show the input if 'other' is chosen, else hide it
    if(e.target.value === 'other') {
        inputOtherJob.style.display = 'block';
    }
    else {
        inputOtherJob.style.display = 'none';
    }
})

// ”T-Shirt Info”
const sDesign = document.querySelector('#design');
const divColour = document.querySelector('#colors-js-puns');
divColour.style.display = 'none';
const colorOptions = document.querySelectorAll('#color option');
// Hide the color picker div when nothing is selected in Design
sDesign.addEventListener('change', (e) => {
    if(e.target.value === 'Select Theme') {
        divColour.style.display = 'none';
    }
    else {
        divColour.style.display = 'block';
    }
})

// Hide Options from colour select
function hideOptions(string) {
    // hide all
    if (string === null || string === '' || string === 'Select Theme') {
        for (let i = 0; i < colorOptions.length; i++) {
            colorOptions[i].hidden = true;
        }
    }
    // hide heart js
    else if (string === 'js puns') {
        for (let i = 0; i < colorOptions.length; i++) {
            if (colorOptions[i].textContent.includes('JS Puns')) {
                colorOptions[i].hidden = false;
            }
            else {
                colorOptions[i].hidden = true;
            }
        }
        colorOptions[0].selected = true;
    }
    // hide js puns
    else if (string === 'heart js') {
        for (let i = 0; i < colorOptions.length; i++) {
            if (colorOptions[i].textContent.includes('I ♥ JS')) {
                colorOptions[i].hidden = false;
            }
            else {
                colorOptions[i].hidden = true;
            }
        }
        colorOptions[3].selected = true;
    }
}

// Hide all colour options first
hideOptions(null);
// Event listener for Design
sDesign.addEventListener('change', (e) => {
    hideOptions(e.target.value);
});

// Hide all colour options first
hideOptions(null);

// Event listener for Design
sDesign.addEventListener('change', (e) => {
    hideOptions(e.target.value);
})

// ”Register for Activities”
const fieldsetActivities = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('.activities input');
const total = document.createElement('label');
let intTotal = 0;
total.textContent = 'Total: $' + intTotal;
fieldsetActivities.parentNode.insertBefore(total, fieldsetActivities.nextSibling);
fieldsetActivities.addEventListener('change', (e) => {
    const clicked = e.target;
    // Add to total cost
    if(clicked.checked) {
        intTotal += parseInt(clicked.dataset.cost);
        total.textContent = 'Total: $' + intTotal;
    }
    else {
        intTotal -= parseInt(clicked.dataset.cost);
        total.textContent = 'Total: $' + intTotal;
    }

    // Loop over fieldset and disable all competing dates
    for(const checkbox of checkboxes) {
        if(checkbox !== clicked && checkbox.dataset.dayAndTime === clicked.dataset.dayAndTime) {
            checkbox.disabled = clicked.checked;
        }
    }
})

// "Payment Info"
const sPaymentOption = document.querySelector('#payment');
document.querySelector('option[value="select method"]').hidden = true;
const divCredcard = document.querySelector('#credit-card');
const divPaypal = document.querySelector('#paypal');
const divBitcoin = document.querySelector('#bitcoin');
divCredcard.style.display = 'block';
divPaypal.style.display = 'none';
divBitcoin.style.display = 'none';
sPaymentOption.value = 'credit card';

sPaymentOption.addEventListener('change', (e) => {
    removeMessage();
    if(e.target.value === 'credit card') {
        divCredcard.style.display = 'block';
        divPaypal.style.display = 'none';
        divBitcoin.style.display = 'none';
    }
    else if (e.target.value === 'paypal') {
        divCredcard.style.display = 'none';
        divPaypal.style.display = 'block';
        divBitcoin.style.display = 'none';
    }
    else if (e.target.value === 'bitcoin') {
        divCredcard.style.display = 'none';
        divPaypal.style.display = 'none';
        divBitcoin.style.display = 'block';
    }
    else {
        divCredcard.style.display = 'none';
        divPaypal.style.display = 'none';
        divBitcoin.style.display = 'none';
    }
})

// "Form validation" As we learned from the warm up lessons
function nameValidation() {
    // If length of name value is 0, field is empty and we return false and paint the border red
    if(name.value.length > 0) {
        name.style.border = 'none';
         return true;
    }
    else {
        name.style.border = '2px solid red';
        return false;
    }
}

function mailValidation() {
    // Googled a good regex for email check (I mean, that's how you do it, right?)
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function addMailMessage(messageString) {
        let divMailMessageField = document.getElementById('mail-message-field');
        if (!divMailMessageField) {
            divMailMessageField = document.createElement('div');
            divMailMessageField.setAttribute('id', 'mail-message-field');
            // divMailMessageField.style.border = '2px solid red';
            mail.parentNode.insertBefore(divMailMessageField, mail);
            divMailMessageField.innerHTML += `<p style="color:red">${messageString}</p>`;
        }
    }

    function removeMailMessage() {
        const divMessageField = document.getElementById('mail-message-field');
        if(divMessageField) {
            divMessageField.remove();
        }
    }

    // Check the regex, return true and show no border if correct, else return false and paint border red
    removeMailMessage();
    if(regexMail.test(mail.value)) {
        mail.style.border = 'none';
        return true;
    }
    else {
        if(mail.value.length > 0) {
            addMailMessage('Need correct E-Mail format: example@mail.com');
        }
        else {
            addMailMessage('E-Mail needed.');
        }
        mail.style.border = '2px solid red';
        return false;
    }
}

function activitiesValidation() {
    // We could also just check the intTotal value, to see if the price is 0 == none is checked, but we'll do it right
    // Loop over all checkboxes, return true and show no border if anyone was checked, else return false and paint border red
    for(const checkbox of checkboxes) {
        if(checkbox.checked) {
            fieldsetActivities.style.border = 'none';
            return true;
        }
    }
    fieldsetActivities.style.border = '2px solid red';
    return false;
}

function removeMessage() {
    const divMessageField = document.getElementById('message-field');
    if(divMessageField) {
        divMessageField.remove();
    }
}

function credcardValidation() {

    /**
     * Function to set a message if soemthing is wrong with the credcard infos
     * @param messageString Message to add
     */
    function addCredcardMessage(messageString) {
        let divMessageField = document.getElementById('message-field');
        // Check if div exists
        if(!divMessageField) {
            divMessageField = document.createElement('div');
            divMessageField.setAttribute('id', 'message-field');
            // divMessageField.style.border = '2px solid red';
            divCredcard.parentNode.insertBefore(divMessageField, divCredcard);
        }
        divMessageField.innerHTML += `<p style="color:red">${messageString}</p>`;
    }

    function checkCredcardStuff() {
        // Get values
        const number = document.getElementById('cc-num');
        const zip = document.getElementById('zip');
        const cvv = document.getElementById('cvv');
        // Went one step further and Googled regex for most used credcards
        // Test Visa: 4111111111111111
        const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        // Test Mastercard: 5500000000000004
        const regexMastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
        // Test Amex: 340000000000009
        const regexAmex = /^3[47][0-9]{13}$/;
        const regexZipUS = /^\d{5}$/;
        const regexCVV = /^\d{3}$/;
        let result = true;
        if (!(regexVisa.test(number.value) || regexMastercard.test(number.value) || regexAmex.test(number.value))) {
            if(number.value.length === 0) {
                addCredcardMessage('Please enter a creditcard number');
            }
            else {
                addCredcardMessage('Card Number wrong. Please enter a Valid Vise/Mastercard/Amex Number.');
            }
            result = false;
        }
        if (!regexZipUS.test(zip.value)) {
            if(zip.value.length === 0) {
                addCredcardMessage('Please enter a ZIP code');
            }
            else {
                addCredcardMessage('ZIP format wrong: Must be five digits');
            }
            result = false;
        }
        if (!regexCVV.test(cvv.value)) {
            if(cvv.value.length === 0) {
                addCredcardMessage('Please enter a CVV');
            }
            else {
                addCredcardMessage('CVV format wrong: Must be three digits');
            }
            result = false;
        }
        return result;
    }

    // Only validate if credcard option is chosen
    if(sPaymentOption.value === 'credit card') {
        // Remove Previous messages
        removeMessage();
        // Test values. Return true and show no border if all good, else return false and paint border red.
        if(checkCredcardStuff()) {
            divCredcard.style.border = 'none';
            return true;
        }
        else {
            return false;
        }
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    // Check all validators and prevent submission if something is incorrect
    if(!nameValidation()) {
        e.preventDefault();
    }
    if(!mailValidation()) {
        e.preventDefault();
    }
    if(!activitiesValidation()) {
        e.preventDefault();
    }
    if(!credcardValidation()) {
        e.preventDefault();
    }
})















