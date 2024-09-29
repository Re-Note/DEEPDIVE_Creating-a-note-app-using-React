import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom' // HashRouter import
import App from './App'
import './index.css'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HashRouter> {/* HashRouter로 앱을 감쌉니다 */}
      <App />
    </HashRouter>
  </Provider>,
)
