import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Page/Layout';
import Home from './Page/Home';
import NoPage from './Page/NoPage';
import Products from "./Page/Products";
import Contact from "./Page/Contact";
import About from "./Page/About";
import New from "./Page/New";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/about' element={<About/>}/>
            <Route path="products/:id" element={<Products />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
