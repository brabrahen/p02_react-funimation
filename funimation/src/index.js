import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Anime from './pages/anime/anime';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

axios.defaults.baseURL = 'https://plants-api-1.herokuapp.com/';
axios.defaults.headers.post[ 'Content-Type' ] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/anime" element={<Anime />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

