import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';

import './assets/styles/global.css'

import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Skills from './pages/Skills'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/' element={<Home />} />
        <Route path='/skills/' element={<Skills />} />
        <Route path='/blogs/' element={<Blogs />} />
        <Route path='/contact/' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
