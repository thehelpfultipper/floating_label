const label = document.querySelector('label');
const input = document.querySelector('#email');
const main = document.querySelector('#main');
const btn = document.querySelector('#sub__btn');
const foot = document.querySelectorAll('.sub__foot');

// validate email and return appropriate message
const validateEmail = input => { 
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  let mssg = '';  
  if(input.match(regex) !== null) {
    // email is valid
    mssg = 'Thank you for staying in touch :-)';
  } else if(input === '') {
    // input is empty
    mssg = 'This field is required';
  } else {
    // input invalid
    mssg = 'Please enter a valid E-Mail address';
  }  
  return mssg;
}

// prevent default form submission
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
});

// capture changes in input value
input.addEventListener('input', () => {  
  if(input.value === '') {
    label.classList.remove('isActive');
  } else {
    label.classList.add('isActive');
  }
});

main.addEventListener('click', function(e) {
  if(e.target === input || e.target === btn && input.value !== '') { 
    label.classList.add('isActive');
  } else if(e.target !== input && input.value === '') {
    label.classList.remove('isActive');
  }
});

btn.addEventListener('click', () => {
  let message = validateEmail(input.value);

  if(message.includes('Thank you')) {
    // success message
    document.querySelector('#sub__promo').innerHTML = `<h3 class="success">${message}</h3>`;
    foot[0].style.display = 'none';
  } else {
    // error message
    foot[0].innerText = message;
    input.classList.add('invalid-border');
    foot[0].style.color = 'red';
  }
});