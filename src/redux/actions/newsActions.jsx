import axios from '../utils/axiosInstance';

export const fetchNews = () => async (dispatch) => {
  try {
    const response = await axios.get('/news');
    dispatch({ type: 'SET_NEWS', payload: response.data });
  } catch (error) {
    console.error('Failed to fetch news:', error);
  }
};

export const addNews = (newsData) => async (dispatch) => {
    try {
      const response = await axios.post('/news', newsData);
      dispatch({ type: 'ADD_NEWS', payload: response.data });
    } catch (error) {
      console.error('Failed to add news:', error);
    }
  };