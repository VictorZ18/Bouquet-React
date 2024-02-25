import React from "react";
import '../SuppliersCategories.css'

function SupCat() {
    return (
       
<div className="supplierslist">
<div class="image-container">
    <img className="supplierscards" src={require('../suplierimg/music.png')} alt="Music image"/>
    <div class="stroked-element"><p className='supplier'>Music</p>
        <div className='bookesign'>
            <p className='booked'>Booked:</p> 
            <img className="xmark" src={require('../suplierimg/xmark.png')} alt="arrow-right image"/>
        </div>
    </div>
</div>

<div class="image-container">
            <img className="supplierscards" src={require('../suplierimg/florists.png')} alt="Music image"/>
    <div class="stroked-element"><p className='supplier'>Florists</p>
        <div className='bookesign'>
            <p className='booked'>Booked:</p> 
            <img className="xmark" src={require('../suplierimg/xmark.png')} alt="arrow-right image"/>
        </div>
    </div>
</div>
<div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/music.png')} alt="Music image"/>
    <div class="stroked-element"><p className='supplier'>Music</p>
    <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../suplierimg/xmark.png')} alt="arrow-right image"/>
    </div>
    </div>
</div>

<div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/decorators.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Decorators</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../suplierimg/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
</div>

      <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/funitures.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Funitures</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../suplierimg/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
      </div>


      <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/funitures.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Funitures</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../suplierimg/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
      </div>

      <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/funitures.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Funitures</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../suplierimg/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
      </div>

      <div class="image-container">
        <img className="supplierscards" src={require('../suplierimg/photographers.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Photographers</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../suplierimg/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
      </div>

        </div>

    );
}
    export default SupCat;