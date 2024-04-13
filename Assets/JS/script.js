document.addEventListener("DOMContentLoaded", function() {
    const signUpBtn = document.getElementById("signUpBtn");
    const signUpModal = document.getElementById("signUpModal");
    const closeModal = document.querySelector(".close");
    const addEmailForm = document.getElementById("addEmailForm");
  
    signUpBtn.addEventListener("click", function() {
      signUpModal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function() {
      signUpModal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == signUpModal) {
        signUpModal.style.display = "none";
      }
    });
  
    addEmailForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.getElementById("emailAddress").value;
      const password = document.getElementById("password").value;
  
      // Store data in localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
  
      // Redirect to the next page
      window.location.href = "next_page.html";
    });
  });
  