/***** View Property section*****/

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images => {
   images.onclick = () => {
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

/**** Function for redirecting pages *****/

function openSearchPage() {
   window.open("propertylisting/search.html")
}

function openContactPage() {
   window.open('../contact/contact.html')
}

function openPropertyListing() {
   window.open('../propertylisting/listings.html')
}

function openPropertyDetails() {
   window.open('../propertylisting/view_property.html')
}

function openAddProperty() {
   window.open("propertylisting/search.html")
}

function openSignupForm() {
   window.open("../login-form/form.html");
}


let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () => {
   menu.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () => {
      if (inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});