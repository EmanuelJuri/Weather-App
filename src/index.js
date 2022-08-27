import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import store from './store/index';
import Home from './components/Home/Home';
import About from './About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />

        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/about'} element={<About/>}/>
        </Routes>

      </React.StrictMode>

    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
