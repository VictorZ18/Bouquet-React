import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './App';
import Suppliers from './Suppliers';
import Program from './Program';
import Guests from './Guests';
import Checklist from './Checklist';
import Budget from './Budget';
import Personalization from './Personalization';
import Account from './Account';
import Media from './Media';
import Team from './Team';
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
        <Route path="/budget" element={<Budget />} />
        <Route path="/personalization" element={<Personalization />} />
        <Route path="/account" element={<Account />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
