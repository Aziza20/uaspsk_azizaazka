import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import newsReducer from './reducers/newsReducer';
import volcanoReducer from './reducers/volcanoReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    volcano: volcanoReducer,
  },
});

export default store;