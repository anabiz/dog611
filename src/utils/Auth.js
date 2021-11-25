import jwt_decode from 'jwt-decode';

const setToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const getDecodedJwt = () => {
  try {
    const token = getToken();
    return jwt_decode(token);
  } catch (e) {
    return {};
  }
};

const logOut = () => {
  localStorage.removeItem('token');
  window.location.replace('/');
};

const isAuthenticated = () => {
  try {
    const decodedToken = getDecodedJwt();

    const { exp } = decodedToken;
    const currentTime = Date.now() / 1000;

    return exp > currentTime;
  } catch (e) {
    return true;
  }
};

const Auth = {
  isAuthenticated,
  getDecodedJwt,
  setToken,
  getToken,
  logOut
};

export default Auth;
