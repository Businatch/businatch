// utils/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const fetchData = async (url, method, data = null) => {
  try {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }
    const response = await fetch(API_BASE_URL + url, options);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchData;