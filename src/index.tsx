import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppTest from './AppTest'
import AppFormik from './AppFormik'
import AppAxios from './AppAxios'
import AppPromise from './AppPromise'
import AppSVG from './AppPromise'
import AppCSSFlex from './AppCSSFlex'
import reportWebVitals from './reportWebVitals'
import './index.scss'
import { initializeIcons } from '@fluentui/react/lib/Icons'

initializeIcons(/* optional base url */)

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppTest /> */}
    {/* <AppFormik /> */}
    {/* <AppAxios /> */}
    {/* <AppPromise /> */}
    {/* <AppSVG /> */}
    {/* <AppCSSFlex /> */}
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
