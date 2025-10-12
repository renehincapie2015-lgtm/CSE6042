import api from './api';

export const login = async (username, password) => {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  const response = await api.post('/token', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });

  const token = response.data.access_token;

  // Guardar token en localStorage
  localStorage.setItem('token', token);

  // Configurar api para usarlo
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return token;
};

export const register = async (username, password) => {
  const payload = { usuario: username, clave: password };
  const response = await api.post('/register', payload, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.data;
};

export const recoverPassword = async (username) => {
  const payload = { usuario: username };
  const response = await api.post('/forgot-password', payload, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.data;
};

export const getToken = () => localStorage.getItem('token');

export const logout = () => {
  localStorage.removeItem('token');
  delete api.defaults.headers.common['Authorization'];
};

export const isAuthenticated = () => !!localStorage.getItem('token');