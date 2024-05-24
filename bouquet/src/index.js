import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/App';
import Suppliers from './views/Suppliers';
import Program from './views/Program';
import Guests from './views/Guests';
import Checklist from './views/Checklist';
import Budget from './views/Budget';
import Personalization from './views/Personalization';
import Account from './views/Account';
import Media from './views/Media';
import Team from './views/Team';
import SuppliersCategories from './views/SuppliersCategories';
import SuppliersQuestions from'./SuppliersQuestions';
import CaterersList from'./views/CaterersList';
import CaterersPage from'./views/CaterersPage';
import User from './views/User';
import SuppliersRegister from './views/SuppliersRegister';

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
        <Route path="/suppliersCategories" element={<SuppliersCategories />} />
        <Route path="/suppliersQuestions" element={<SuppliersQuestions />} />
        <Route path="/CaterersList/:categoriesName" element={<CaterersList />} />
        <Route path="/CaterersPage/:categoriesName/:supplierName" element={<CaterersPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/suppliersRegister" element={<SuppliersRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
