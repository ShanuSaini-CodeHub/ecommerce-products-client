import axios from "axios"
import ContentConfig from './ContentConfig.json';

export const postLoginDetails = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(ContentConfig.api.postLoginDetails, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const getLoginDetails = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(ContentConfig.api.getLoginDetails, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const getProductsList = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(ContentConfig.api.getProductsList, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const getProductSuggestions = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(ContentConfig.api.getProductSuggestions, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const getSearchResults = (data)  => {
  return new Promise((resolve, reject) => {
    axios.post(ContentConfig.api.getSearchResults, data)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}