function validateForm() {
    let username = document.getElementById('myInput').value;
    let password = document.getElementById('mypassword').value;
  
    if (username === "" || password === "") {
      alert("Please fill out all fields!");
      return false; // prevents form submission
    }
    return true; // if validation passed, allow form submission
  }

  document.querySelectorAll('.tooltip').forEach(tip => {
    tip.addEventListener('mouseover', function() {
      this.style.borderBottom = '10px solid red';
    });
    tip.addEventListener('mouseleave', function() {
      this.style.borderBottom = 'none';
    });
  });