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
import Momentselection from "./views/Momentselection";
import Momentcreation from "./views/Momentcreation";
import Momentpage from "./views/Momentpage";
import Guestlistcreation from "./views/Guestlistcreation";
import Paymentcheckout from "./views/Paymentcheckout";
import Paymentinfo from "./views/Paymentinfo";
import Success from "./components/Success";
import Publishwedding from "./views/Publishwedding";
import Cityhallguestlist from "./views/Cityhallguestlist";
import Addnewguest from "./views/Addnewguest";
import Guestpage from "./views/Guestpage";
import User from './views/User';
import SuppliersRegister from './views/SuppliersRegister';
import VenueMap from './views/VenueMap';
import Welcome from "./views/Welcome";
import Register from "./views/UserRegister";
import GuestRegister from "./views/guestRegister";
import Favourites from "./views/Favourites";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store } from "./persistConfig";
import { persistor } from "./persistConfig";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/program" element={<Program />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/checklist" element={<Checklistpage />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/personalization" element={<Personalization />} />
            <Route path="/account" element={<Account />} />
            <Route path="/media" element={<Media />} />
            <Route path="/team" element={<Team />} />
            <Route path="/suppliersCategories" element={<SuppliersCategories />} />
            <Route path="/suppliersQuestions" element={<SuppliersQuestions />} />
            <Route path="/CaterersList/:categoriesName" element={<CaterersList />} />
            <Route path="/CaterersPage/:categoriesName/:supplierName" element={<CaterersPage />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="/Createdpage/:taskId" element={<Createdpage />} />
            <Route path="/Reminderpage" element={<Reminderpage />} />
            <Route path="/Addpage" element={<Addpage />} />
            <Route path="/Momentselection" element={<Momentselection />} />
            <Route path="/Momentcreation/:eventName" element={<Momentcreation />} />
            <Route path="/Momentpage/:eventId" element={<Momentpage />} />
            <Route path="/Guestlistcreation" element={<Guestlistcreation />} />
            <Route path="/Paymentcheckout" element={<Paymentcheckout />} />
            <Route path="/Paymentinfo" element={<Paymentinfo />} />
            <Route path="/checkout" element={<Paymentcheckout />} />
            <Route path="/Success" element={<Success />} />
            <Route path="/Publishwedding" element={<Publishwedding />} />
            <Route path="/Cityhallguestlist/:guestListid" element={<Cityhallguestlist />} />
            <Route path="/Addnewguest/:guestListid" element={<Addnewguest />} />
            <Route path="/Guestpage/:guestId" element={<Guestpage />} />
            <Route path="/user" element={<User />} />
            <Route path="/suppliersRegister" element={<SuppliersRegister />} />
            <Route path="/venueMap" element={<VenueMap />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/guestRegister" element={<GuestRegister />} />
            <Route path="/" element={<Register />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
