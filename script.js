// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Print Schedule Button
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
      printBtn.addEventListener('click', function() {
          alert('Printing schedule...');
      });
  }
  
  // Login Form Validation
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
          event.preventDefault();
          
          const username = document.getElementById("username");
          const password = document.getElementById("password");
          let isValid = true;
          
          if (!username.value.trim()) {
              alert("Please enter your Penn State ID");
              username.focus();
              isValid = false;
              return;
          }
          
          if (!password.value.trim()) {
              alert("Please enter your password");
              password.focus();
              isValid = false;
              return;
          }
          
          if (isValid) {
              alert("Login successful!");
          }
      });
  }
  
  // Contact Form Submit
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
      submitBtn.addEventListener('click', function() {
          document.getElementById('form-success').style.display = 'block';
      });
  }
  
  // Course Search Functionality
  const courseRows = document.querySelectorAll('.course-row');
  
  // Search button
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
      searchBtn.addEventListener('click', function() {
          const level = document.getElementById('level').value;
          let visibleCount = 0;
          
          courseRows.forEach(function(row) {
              if (!level) {
                  row.style.display = '';
                  visibleCount = courseRows.length;
              } else {
                  const courseNumber = row.cells[0].textContent.split(' ')[1];
                  
                  if (courseNumber.startsWith(level.charAt(0))) {
                      row.style.display = '';
                      visibleCount++;
                  } else {
                      row.style.display = 'none';
                  }
              }
          });
          
          document.querySelector('.badge.bg-secondary').textContent = visibleCount + ' results';
      });
  }
  
  // Reset button
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
      resetBtn.addEventListener('click', function() {
          document.getElementById('subject').selectedIndex = 0;
          document.getElementById('level').selectedIndex = 0;
          document.getElementById('keyword').value = '';
          
          courseRows.forEach(row => row.style.display = '');
          document.querySelector('.badge.bg-secondary').textContent = courseRows.length + ' results';
      });
  }
  
  // Add course buttons
  const addButtons = document.querySelectorAll('.add-btn');
  addButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          if (!this.disabled) {
              const courseName = this.closest('tr').cells[0].textContent;
              alert(courseName + ' has been added to your schedule!');
          }
      });
  });
});