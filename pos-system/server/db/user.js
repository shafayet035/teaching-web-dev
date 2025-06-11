class UserTable {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    return this.users.push(user);
  }

  getUserByEmail(email) {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  getUserById(id) {
    const user = this.users.find((user) => String(user.id) === id);
    return user;
  }

  getAllUsers() {
    return this.users;
  }
}

export default new UserTable();
