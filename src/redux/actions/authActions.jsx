import axios from '../utils/axiosInstance';

export const loginUser  = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/login', credentials);
    dispatch({ type: 'LOGIN', payload: response.data });
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const registerUser  = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/register', userData);
    dispatch({ type: 'LOGIN', payload: response.data });
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

export const fetchUserProfile = () => async (dispatch) => {
    try {
      const response = await axios.get('/user/profile');
      dispatch({ type: 'SET_USER_PROFILE', payload: response.data });
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  };
  
  export const updateUserProfile = (profileData) => async (dispatch) => {
      try {
        const response = await axios.put('/user/profile', profileData);
        dispatch({ type: 'UPDATE_USER_PROFILE', payload: response.data });
      } catch (error) {
        console.error('Failed to update user profile:', error);
      }
    };