// reducers/index.js
const initialState = {
  loading: false,
  error: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_SUBMIT_START':
      return { ...state, loading: true, error: null };
    case 'FORM_SUBMIT_SUCCESS':
      return { ...state, loading: false };
    case 'FORM_SUBMIT_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default formReducer;