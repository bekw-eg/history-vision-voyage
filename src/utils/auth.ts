export interface User {
  name: string;
  email: string;
  password: string;
}

const USERS_KEY = 'historyvision_users';
const CURRENT_USER_KEY = 'historyvision_current_user';

export const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user: User): boolean => {
  const users = getUsers();
  
  // Проверка на существующего пользователя
  if (users.find(u => u.email === user.email)) {
    return false;
  }
  
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
};

export const loginUser = (email: string, password: string): User | null => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return user;
  }
  
  return null;
};

export const loginAsGuest = (): User => {
  const guestUser: User = {
    name: 'Гость',
    email: 'guest@historyvision.com',
    password: ''
  };
  
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(guestUser));
  return guestUser;
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const logoutUser = (): void => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};
