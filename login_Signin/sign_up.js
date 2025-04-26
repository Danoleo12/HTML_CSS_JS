  document.getElementById("form").addEventListener("submit", function(event) {
    const password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("RepeatedPass").value;
    const email = document.querySelector("input[type='email']").value;
    let passcheck = PasswordMatch(password, confirmPassword) 

    if (!passcheck) {
      // Prevent form submission if passwords don't match
      event.preventDefault();
    } else {
      // Passwords match, send an email
      event.preventDefault(); // Prevent default form submission for custom email function
      sendEmail(email, "Welcome to Dano Dev!", "Thank you for signing up!");
    }
  });

  // Function to check Password
  function PasswordMatch(password, confirmedPass){
    if (password !== confirmedPass) {
        alert("Passwords do not match. Please try again.");
        return false;
      } else {
        // Passwords match, send an email
        alert("Form submitted successfully and email sent!");
        return true;
    }
  }

  // Function to simulate sending an email (you would replace this with actual implementation)
  function sendEmail(to, subject, body) {
    // Placeholder: Add actual email-sending implementation here
    console.log(`Email sent to ${to}\nSubject: ${subject}\nBody: ${body}`);
  }