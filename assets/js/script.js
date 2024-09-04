



/**
 * add event on element
 */

const addEventOnElement = function (element, type, listener) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, listener);
    }
  } else {
    element.addEventListener(type, listener);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);


const closeNav = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElement(navLinks, "click", closeNav);



/**
 * add active class on header & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("act ive");
    backTopBtn.classList.remove("active");
  }
});
// Get elements
const signupBtn = document.getElementById('signupBtn');
const popupForm = document.getElementById('modal'); // Use modal instead of popupForm
const closeBtn = document.getElementById('close-btn');
const pageContent = document.querySelector('.page-content');

// Show the modal and apply the blur effect when the signup button is clicked
signupBtn.addEventListener('click', () => {
    modal.classList.add('active');
    pageContent.style.filter = 'blur(10px)';
});

// Close the modal and remove the blur effect when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    pageContent.style.filter = 'none';
});

// Close the modal and remove the blur effect when clicking outside the form
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
        pageContent.style.filter = 'none';
    }
});

// Show the popup form when the signup button is clicked
signupBtn.addEventListener('click', () => {
    popupForm.style.display = 'flex';
});

// Close the popup form when the close button is clicked
closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

// Close the popup form when clicking outside the form
window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});



/**
 * hero tab button
 */

const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function () {
  lastClickedTabBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedTabBtn = this;
}



document.addEventListener('DOMContentLoaded', () => {
  const listingsNavItem = document.querySelector('.navbar-list-listing');
  const propertySection = document.querySelector('.section.property');

  if (listingsNavItem && propertySection) {
    listingsNavItem.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior if it's an anchor
      propertySection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");
  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", e => {
      e.preventDefault();

      // Placeholder for AJAX/Fetch login logic
      // Example: fetch('/login', { method: 'POST', body: new FormData(loginForm) })
      //   .then(response => {
      //     if (response.ok) {
      //       // Handle successful login here
      //     } else {
      //       setFormMessage(loginForm, "error", "Invalid username/password combination");
      //     }
      //   })
      //   .catch(error => {
      //     // Handle network errors here
      //   });

      // Temporarily setting an error message until AJAX/Fetch logic is implemented
      setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
              setInputError(inputElement, "Username must be at least 10 characters in length");
          }
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });
  });
});
