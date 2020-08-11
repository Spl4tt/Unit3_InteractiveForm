// Focus first element
document.getElementById('name').focus();

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

// T-Shirt style
const sDesign = document.querySelector('#design');
const divColour = document.querySelector('#colors-js-puns');
divColour.style.display = 'none';
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
// Hide Options from colour select
// TODO First selected Item should be fixed
function hideOptions(string) {
    // hide all
    if (string === null || string === '' || string === 'Select Theme') {
        for (let i = 0; i < sColour.length; i++) {
            sColour[i].style.display = 'none';
        }
    }
    // hide heart js
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
    // hide js puns
    else if (string === 'heart js') {
        for (let i = 0; i < sColour.length; i++) {
            if (sColour[i].textContent.includes('I ♥ JS')) {
                sColour[i].style.display = 'block';
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

// Activity selection
const fieldsetActivities = document.querySelector('.activities');
const dateList = [];
fieldsetActivities.addEventListener('change', (e) => {

    // Loop over fieldset and disable all competing dates
    for(const element of fieldsetActivities.elements) {
        console.log(element);
    }

    // if(!dateList.includes(e.target.dataset.dayAndTime)) {
    //     console.log('yes');
    //     dateList.push(e.target.dataset.dayAndTime);
    // }
    // else {
    //     console.log('no');
    // }
})
