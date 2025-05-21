
    const form = document.getElementById('registerForm');
    const usernameInput = document.getElementById('regUsername');
    const emailInput = document.getElementById('regEmail');
    const passwordInput = document.getElementById('regPassword');
  
    const usernameError = document.getElementById('regUsernameError');
    const emailError = document.getElementById('regEmailError');
    const passwordError = document.getElementById('regPasswordError');
  
    const emailPattern = /\S+@\S+\.\S+/;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
  
 
      if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        valid = false;
      } else {
        usernameError.textContent = '';
      }
  
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
      } else {
        emailError.textContent = '';
      }
  
      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
      } else {
        passwordError.textContent = '';
      }
 
      if (valid) {
        const user = {
          username: usernameInput.value.trim(),
          email: emailInput.value.trim(),
          password: passwordInput.value
        };
        localStorage.setItem(user.email, JSON.stringify(user));
        alert('Registration successful! Please log in.');
        window.location.href = 'login.html';
      }
    });
  });