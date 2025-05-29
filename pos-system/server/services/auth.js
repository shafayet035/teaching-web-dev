import User from '../models/user.js';
import userTable from '../db/user.js';

class AuthService {
  constructor() {}

  register(name, email, password) {
    const id = userTable.getAllUsers().length + 1;

    const user = new User(id, name, email, password);

    userTable.addUser(user);

    return user;
  }

  login(email, password) {
    const user = userTable.getUserByEmail(email);

    if (!user || user.password !== password) {
      throw new Error('Invalid Email or Password');
    }

    return user;
  }
}

export default new AuthService();
