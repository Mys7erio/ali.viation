import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';

import './assets/styles/global.css'

import Home from './Home'
import Navbar from './Navbar'
import Skills from './Skills'
import Blogs from './Blogs'
import Contact from './Contact'
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
