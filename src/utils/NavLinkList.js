import { PATHS } from 'routes';

export const landingPageLinkList = [
  {
    islink: false,
    title: 'Login',
    link: '/login',
    className: 'login-link'
  },
  {
    islink: false,
    title: 'Register',
    link: '/verify-email',
    className: 'register-link'
  }
];

export const dashBoardLinkList = [
  {
    islink: true,
    title: 'Learning Platform',
    link: 'https://nigeria.coding4employment.org/home/defaultsignin?whr=uri%3aPhoneAuth&referrer=basedomain',
    style: {
      backgroundColor: '#EDF9F0',
      color: '#3CAE5C',
      borderReduis: '8px',
      fontSize: '16px',
      fontFamily: 'Ubuntu'
    }
  },
  {
    title: 'Change Password',
    link: PATHS.changePassword
  }
];

export const changePasswordLinkList = [
  {
    title: 'Learning Platform',
    islink: true,
    link: 'https://nigeria.coding4employment.org/home/defaultsignin?whr=uri%3aPhoneAuth&referrer=basedomain',
    style: {
      backgroundColor: '#EDF9F0',
      color: '#3CAE5C',
      borderReduis: '8px',
      fontSize: '16px',
      fontFamily: 'Ubuntu'
    }
  },
  {
    islink: false,
    title: 'Change Password',
    link: '/change-password',
    style: {
      borderBottom: '3px solid #3CAE5C',
      color: '#3CAE5C',
      borderReduis: '8px',
      fontSize: '16px',
      fontFamily: 'Ubuntu'
    }
  }
];
