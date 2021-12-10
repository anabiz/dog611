import axios from 'axios';
import { REACT_APP_API_BASE_URL } from '../utils/baseUrl'

export const newsLetter = (payload) => {
  return axios
    .post(`${REACT_APP_API_BASE_URL}/subscribe-newsletter`, payload)
    .then(
      (response) => {
        return response;
      },
      (error) => {
        return error.response;
      }
    );
};

export const contactUs = (payload) => {
    return axios
      .post(`${REACT_APP_API_BASE_URL}/contactus`, payload)
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return error.response;
        }
      );
  };