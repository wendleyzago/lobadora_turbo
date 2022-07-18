import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n/index"
import './index.css';


import App from './App';
import Home from './pages/Home'
import PageSearch from './pages/PageSearch';
import Car from './pages/Car';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<PageSearch />}/>
          <Route path="/car/:id" element={<Car />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

