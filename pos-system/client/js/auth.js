import { API_URL } from './constants.js';

class Auth {
  constructor() {
    this.registerForm = document.getElementById('register-form');
    this.loginForm = document.getElementById('login-form');

    if (this.registerForm) {
      this.registerForm.addEventListener('submit', this.register.bind(this));
    }

    if (this.loginForm) {
      this.loginForm.addEventListener('submit', this.login.bind(this));
    }
  }

  async register(e) {
    e.preventDefault();

    const formData = new FormData(this.registerForm);

    const name = formData.get('full-name');
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data) {
      window.location.href = 'login.html';
    }
  }

  async login(e) {
    e.preventDefault();

    const formData = new FormData(this.loginForm);

    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data) {
      localStorage.setItem('loggedInUser', data.id);
      window.location.href = 'dashboard.html';
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  }
}

export default new Auth();
