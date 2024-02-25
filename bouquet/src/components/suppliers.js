import React from "react";
import '../Suppliers.css'
import Navbar from '../components/navbar';


function Supp() {
    return (
        <div className="supplierslist">
 <div class="image-container">
 <img className="supplierscards" src={require('../suplierimg/venues.png')} alt="Music image"/>  
 <div className="stroked-element"><p className='supplier'>Venues</p></div>
</div>

<div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/cateres.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Cateres</p></div>
      </div>
      <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/florists.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Florists</p></div>
      </div>
      <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/music.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Music</p></div>
        </div>


        <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/decorators.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Decorators</p></div>
         </div>

        <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/photographers.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Photographers</p></div>
      </div>

      <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/funitures.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Funitures</p></div>
      </div>

      <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/trasports.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Transports</p></div>
         </div>

</div>
        );
    }
    <Navbar/>
export default Supp;

