
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const emailError = document.getElementById('loginEmailError');
    const passwordError = document.getElementById('loginPasswordError');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
 
      const emailValue = emailInput.value.trim();
      if (emailValue === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
        emailError.textContent = 'Enter a valid email address.';
        valid = false;
      } else {
        emailError.textContent = '';
      }

      const passwordValue = passwordInput.value;
      if (passwordValue === '') {
        passwordError.textContent = 'Password is required.';
        valid = false;
      } else if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
      } else {
        passwordError.textContent = '';
      }
  
      if (!valid) return;
  
      const storedUser = localStorage.getItem(emailValue);
      if (!storedUser) {
        emailError.textContent = 'No account found with this email.';
        return;
      }
  
      const user = JSON.parse(storedUser);
      if (user.password !== passwordValue) {
        passwordError.textContent = 'Incorrect password.';
        return;
      }
      localStorage.setItem('currentUser', storedUser);
      window.location.href = 'cart.html';
    });
  });