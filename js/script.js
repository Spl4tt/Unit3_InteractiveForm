// Focus first element
const name = document.getElementById('name');
name.focus();

// declare mail for later
const mail = document.getElementById('mail');

// ”Job Role”
// Insert 'other title' inputfield // TODO Must be in HTML, so that it'll work without JS
const inputOtherJob = document.createElement('input');
inputOtherJob.setAttribute('id', 'other-title');
inputOtherJob.setAttribute('placeholder', 'Your Job Role');
inputOtherJob.type = 'text';
inputOtherJob.value = '';
// Insert 'inputOtherJob': Get parentnode for 'inputOtherJob' and insert it
const parentNodeInputOtherJob = document.querySelector('#title');
parentNodeInputOtherJob.parentNode.insertBefore(inputOtherJob, parentNodeInputOtherJob.nextSibling);
// Event listener for T-Shirt Design
// Hide the 'inputOtherJob' (Only show when needed defined later)
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
        // TODO There's surely a better way
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
            if(clicked.checked) {
                checkbox.disabled = true;
            }
            else {
                checkbox.disabled = false;
            }
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

// "Form validation" As we learned from the warmup
function nameValidation() {
    if(name.value.length > 0) {
        name.style.border = '1px solid white';
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
    if(regexMail.test(mail.value)) {
        mail.style.border = '1px solid white';
        return true;
    }
    else {
        mail.style.border = '2px solid red';
        return false;
    }
}

function activitiesValidation() {
    // We could also just check the intTotal value, to see if the price is 0 == none is checked, but we'll do it right
    for(const checkbox of checkboxes) {
        if(checkbox.checked) {
            fieldsetActivities.style.border = '1px solid white';
            return true;
        }
    }
    fieldsetActivities.style.border = '2px solid red';
    return false;
}

function credcardValidation() {
    if(sPaymentOption.value === 'credit card') {
        const number = document.getElementById('cc-num');
        const zip = document.getElementById('zip');
        const cvv = document.getElementById('cvv');
        // Went one step further and Googled regex for most used credcards
        const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        const regexMastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
        const regexAmex = /^3[47][0-9]{13}$/;
        const regexZipUS = /^\d{5}$/;
        const regexCVV = /^\d{3}$/;

        if ((regexVisa.test(number.value) || regexMastercard.test(number.value) || regexAmex.test(number.value)) &&
            regexZipUS.test(zip.value) &&
            regexCVV.test(cvv.value)) {
            divCredcard.style.border = '1px solid white';
            return true;
        } else {
            divCredcard.style.border = '2px solid red';
            return false;
        }
    }
}

















