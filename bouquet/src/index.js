import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './App';
import Suppliers from './Suppliers';
import Program from './Program';
import Guests from './Guests';
import Checklist from './Checklist';
import SuppliersCategories from './SuppliersCategories';
import SuppliersQuestions from'./SuppliersQuestions';
import CateresList from'./CateresList';
import CateresPage from'./CateresPage';
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
        <Route path="/suppliersQuestions" element={<SuppliersQuestions />} />
        <Route path="/CateresList" element={<CateresList />} />
        <Route path="/CateresPage" element={<CateresPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
