import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice'; 
import aiReducer from './slices/aiSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ai: aiReducer,
  },
});