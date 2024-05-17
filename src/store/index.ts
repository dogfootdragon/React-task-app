import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';
import { useSelector } from 'react-redux';

const store = configureStore({
  // reducer : reducer
  reducer // 키와 값의 이름이 같기 때문에 한 번에 줄여서 사용
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;