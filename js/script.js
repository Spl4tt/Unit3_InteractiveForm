// Focus first element
document.getElementById('name').focus();

// Insert 'other title' inputfield
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

// T-Shirt style
const sDesign = document.querySelector('#design');
const divColour = document.querySelector('#colors-js-puns');
const sColour = document.querySelector('#color');
// Hide the color picker div when nothing is selected in Design
sDesign.addEventListener('change', (e) => {
    if(e.target.value === 'Select Theme') {
        divColour.style.display = 'none';
    }
    else {
        divColour.style.display = 'block';
    }
})
// Method for hiding options from colour select
function hideOptions(string) {
    // hide all
    if (string === null || string === '' || string === 'Select Theme') {
        for (let i = 0; i < sColour.length; i++) {
            sColour[i].style.display = 'none';
        }
    }
    // only hide heart js
    else if (string === 'js puns') {
        for (let i = 0; i < sColour.length; i++) {
            if (sColour[i].textContent.includes('JS Puns')) {
                sColour[i].style.display = 'block';
            }
            else {
                sColour[i].style.display = 'none';
            }
        }
    }
    // only hide js puns
    else if (string === 'heart js') {
        for (let i = 0; i < sColour.length; i++) {
            if (sColour[i].textContent.includes('I &#9829; JS')) {
                sColour[i].style.display = 'none';
            }
            else {
                sColour[i].style.display = 'none';
            }
        }
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
