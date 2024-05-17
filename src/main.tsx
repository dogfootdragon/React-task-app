import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // 생성한 redux store를 모든 컴포넌트에서 사용하고 싶다면 (redux store에 있는 값을 가져오거나 업데이트 하고 싶다면)
  // 모든 컴포넌트를 감싸주어야 한다.
  <Provider store={store}>
    <App />
  </Provider>
  
)
