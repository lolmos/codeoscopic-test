import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../components/ListItemCreator/listSlice';

export default configureStore({
  reducer: {
    lists: listReducer
  },
});
