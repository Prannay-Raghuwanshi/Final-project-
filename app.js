const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

// Update this JavaScript block at the end of your existing app.js or a new JS file

// Function to toggle dark mode for body and text color for all elements
function toggleDarkMode() {
  const body = document.body;
  const darkModeSwitch = document.getElementById('dark-mode-toggle');
  const isDarkMode = darkModeSwitch.checked;

  // Toggle dark mode for the body
  body.classList.toggle('dark-mode', isDarkMode);

  // Update text color for all elements based on dark mode state
  updateTextColorForAllElements(document.querySelectorAll('*:not(h1,.footer-logo)'), isDarkMode);

  // Save user preference in localStorage (optional)
  localStorage.setItem('darkMode', isDarkMode);
}

// Function to update text color for all elements based on dark mode state
function updateTextColorForAllElements(elements, isDarkMode) {
  elements.forEach(element => {
    if (isDarkMode) {
      element.style.color = 'white';
    }
    else {
      element.style.color = '';
      // location.reload();
    }
  });
}

// Check for user's dark mode preference on page load
function checkDarkModePreference() {
  const savedDarkMode = localStorage.getItem('darkMode');
  const darkModeSwitch = document.getElementById('dark-mode-toggle');

  if (savedDarkMode === 'true') {
    darkModeSwitch.checked = true;
    toggleDarkMode(); // Apply dark mode styles on page load
  }
}

// Attach the checkDarkModePreference function to the window.onload event
window.onload = checkDarkModePreference;

function submitForm(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Reset error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Simple validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    return;
  }

  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    return;
  }

  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    return;
  }

  // If all validation passes, you can submit the form data or perform other actions
  console.log('Form submitted:', { name, email, message });
}