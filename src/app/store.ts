import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import counterReducer from '../features/counter/counterSlice';
import usersReduser from '../features/users/usersSlice';
import postReduser from '../features/posts/postsSlice';
import selectedPostReduser from '../features/selectedPost/selectedPostSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReduser,
    posts: postReduser,
    selectedPost: selectedPostReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
