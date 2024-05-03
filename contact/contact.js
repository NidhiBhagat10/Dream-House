/****** Frequently asked questions******/

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
    headings.onclick = () =>{
       headings.parentElement.classList.toggle('active');
    }
 });

 /****** Form Validation  *******/   

 document.addEventListener("DOMContentLoaded", function() {

    // Function to check if the input fields are filled correctly

    function validateForm() {
      var name = document.getElementsByName("name")[0].value;
      var email = document.getElementsByName("email")[0].value;
      var number = document.getElementsByName("number")[0].value;
      var message = document.getElementsByName("message")[0].value;
  
      // Check if any of the fields are empty

      if (name === "" || email === "" || number === "" || message === "") {
        alert("Please fill in all the fields.");
        return false;
      }
  
      // Check if the email is in a valid format

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
  
      // Check if the number is valid

      var numberPattern = /^\d{10}$/;
      if (!numberPattern.test(number)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
      }
  
      return true; 
    }
  
    // Add event listener to the send button

    document.getElementById("sendbtn").addEventListener("click", function(event) {

      // Prevent the form from submitting if validation fails

      if (!validateForm()) {
        event.preventDefault();
        return;
      }
  
      // Show the thank you message
      alert("Thank you for getting in touch!");

      window.open("contact.html"); // open contact page after submition 
    });
  });
  