import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/components/pages/home/home';
import Login from '../src/components/pages/login/login';
import Anime from '../src/components/pages/anime/anime';
import Cadastro from '../src/components/pages/cadastro/cadastro';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com';
axios.defaults.headers.post[ 'Content-Type' ] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detanime" element={<Anime />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

