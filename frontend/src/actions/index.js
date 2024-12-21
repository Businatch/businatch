// actions/index.js
export const submitContactForm = (formData) => {
  return async (dispatch) => {
    //Make API call
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      //Dispatch success action
    } else {
      //Dispatch error action
    }
  };
};