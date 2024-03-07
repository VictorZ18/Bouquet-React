import React from 'react';
import ImageSlider from './components/image-slider';
import "./CaterersList.css";


function App() {
  return (
    <div className="App">
      
      <div className='Group'>
        <div className='Backarrow'>
        <img className="arrow-left" src={require('./media/arrow-left.png')} alt="arrow-right image"/>
        <p className='Back'>Back</p>
        </div>
    </div> 
        
      <h2 className='Cateres'>Cateres </h2>
      <p className='Cateres'>Filters</p>
      <p className='plus-info'>Matches for you:</p>
      <ImageSlider />
    </div>
  );
}

export default App;