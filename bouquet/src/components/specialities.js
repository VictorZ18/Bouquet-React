import React from "react";
import '../SuppliersQuestions.css'
import Navbar from '../components/navbar';


function Supp() {
    return (
        <div className="supplierslist">
            <div class="image-container">
                <img className="supplierscards" src={require('../suplierimg/venues.png')} alt="Music image" />
                <div className="stroked-element"><p className='supplier'>Venues</p></div>
            </div>

            <div class="image-container">
                <img className="supplierscards" src={require('../suplierimg/cateres.png')} alt="Music image" />
                <div class="stroked-element"><p className='supplier'>Cateres</p></div>
            </div>


        </div>
    );
}
<Navbar />
export default Supp;

