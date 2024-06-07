import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/App";
import Suppliers from "./views/Suppliers";
import Program from "./views/Program";
import Guests from "./views/Guests";
import Checklistpage from "./views/Checklistpage";
import Budget from "./views/Budget";
import Personalization from "./views/Personalization";
import Account from "./views/Account";
import Media from "./views/Media";
import Team from "./views/Team";
import SuppliersCategories from "./views/SuppliersCategories";
import SuppliersQuestions from "./SuppliersQuestions";
import CaterersList from "./views/CaterersList";
import CaterersPage from "./views/CaterersPage";
import Todo from "./views/Todo";
import Createdpage from "./views/Createdpage";
import Reminderpage from "./views/Reminderpage";
import Addpage from "./views/Addpage";
import Addprogram from "./views/Addprogram";
import Momentselection from "./views/Momentselection";
import Momentcreation from "./views/Momentcreation";
import Momentpage from "./views/Momentpage";
import Guestlistcreation from "./views/Guestlistcreation";
import Guestlist from "./views/Guestlist";
import Paymentcheckout from "./views/Paymentcheckout";
import Paymentinfo from "./views/Paymentinfo";
import Success from "./components/Success";
import Publishwedding from "./views/Publishwedding";
import Cityhallguestlist from "./views/Cityhallguestlist";
import Addnewguest from "./views/Addnewguest";
import Guestpage from "./views/Guestpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/program" element={<Program />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/checklistpage" element={<Checklistpage />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/personalization" element={<Personalization />} />
        <Route path="/account" element={<Account />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />
        <Route path="/suppliersCategories" element={<SuppliersCategories />} />
        <Route path="/suppliersQuestions" element={<SuppliersQuestions />} />
        <Route path="/CaterersList" element={<CaterersList />} />
        <Route path="/CaterersPage" element={<CaterersPage />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Createdpage" element={<Createdpage />} />
        <Route path="/Reminderpage" element={<Reminderpage />} />
        <Route path="/Addpage" element={<Addpage />} />
        <Route path="/Addprogram" element={<Addprogram />} />
        <Route path="/Momentselection" element={<Momentselection />} />
        <Route path="/Momentcreation" element={<Momentcreation />} />
        <Route path="/Momentpage" element={<Momentpage />} />
        <Route path="/Guestlistcreation" element={<Guestlistcreation />} />
        <Route path="/Guestlist" element={<Guestlist />} />
        <Route path="/Paymentcheckout" element={<Paymentcheckout />} />
        <Route path="/Paymentinfo" element={<Paymentinfo />} />
        <Route path="/checkout" element={<Paymentcheckout />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Publishwedding" element={<Publishwedding />} />
        <Route path="/Cityhallguestlist" element={<Cityhallguestlist />} />
        <Route path="/Addnewguest" element={<Addnewguest />} />
        <Route path="/Guestpage" element={<Guestpage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
