import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './App';
import Suppliers from './Suppliers';
import Program from './Program';
import Guests from './Guests';
import Checklist from './Checklist';
import SuppliersCategories from './SuppliersCategories';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/program" element={<Program />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/suppliersCategories" element={<SuppliersCategories />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
