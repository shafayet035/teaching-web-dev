import { API_URL } from './constants.js';
import Auth from './auth.js';

class Dashboard {
  constructor() {
    this.loggedInUser = localStorage.getItem('loggedInUser');

    if (!this.loggedInUser) {
      window.location.href = 'login.html';
    }

    this.name = document.getElementById('name');
    this.email = document.getElementById('email');
    this.logoutBtn = document.getElementById('logout-btn');

    this.logoutBtn.addEventListener('click', () => {
      Auth.logout();
    });

    this.getMe();
  }

  async getMe() {
    const response = await fetch(`${API_URL}/me`, {
      headers: {
        'x-user-id': localStorage.getItem('loggedInUser'),
      },
    });

    const data = await response.json();

    this.name.textContent = data.name;
    this.email.textContent = data.email;
  }
}

export default new Dashboard();
