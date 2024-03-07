import React from "react";
import '../SuppliersCategories.css'

function SupCat() {
    return (
       
<div className="supplierslist">
<div class="image-container">
    <img className="supplierscards" src={require('../media/music.png')} alt="Music image"/>
    <div class="stroked-element"><p className='supplier'>Music</p>
        <div className='bookesign'>
            <p className='booked'>Booked:</p> 
            <img className="xmark" src={require('../media/xmark.png')} alt="arrow-right image"/>
        </div>
    </div>
</div>

<div class="image-container">
            <img className="supplierscards" src={require('../media/florists.png')} alt="Music image"/>
    <div class="stroked-element"><p className='supplier'>Florists</p>
        <div className='bookesign'>
            <p className='booked'>Booked:</p> 
            <img className="xmark" src={require('../media/xmark.png')} alt="arrow-right image"/>
        </div>
    </div>
</div>
<div class="image-container">
        <img className="supplierscards" src={require('../media/music.png')} alt="Music image"/>
    <div class="stroked-element"><p className='supplier'>Music</p>
    <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../media/xmark.png')} alt="arrow-right image"/>
    </div>
    </div>
</div>

<div class="image-container">
        <img className="supplierscards" src={require('../media/decorators.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Decorators</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../media/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
</div>

      <div class="image-container">
        <img className="supplierscards" src={require('../media/furnitures.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Funitures</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../media/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
      </div>


      <div class="image-container">
        <img className="supplierscards" src={require('../media/furnitures.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Funitures</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../media/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
      </div>

      <div class="image-container">
        <img className="supplierscards" src={require('../media/furnitures.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Funitures</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../media/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
      </div>

      <div class="image-container">
        <img className="supplierscards" src={require('../media/photographers.png')} alt="Music image"/>
        <div class="stroked-element"><p className='supplier'>Photographers</p>
        <div className='bookesign'>
        <p className='booked'>Booked:</p> 
        <img className="xmark" src={require('../media/xmark.png')} alt="arrow-right image"/>
        </div>
        </div>
      </div>

        </div>

    );
}
    export default SupCat;