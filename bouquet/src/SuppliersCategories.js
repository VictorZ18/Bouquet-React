import './SuppliersCategories.css'
import Navbar from './components/navbar';
import SupCat from './components/supplierscategories';


function SuppliersCategories() {
  return (
    <div className="App">
      <div>
      <img className="phonebar" src={require('./suplierimg/phonebar.png')} alt="phonebar image"/> 
      </div>

      <div className='container'>
      <img className="Menu" src={require('./suplierimg/Menu.png')} alt="Menu image"/>  
      <p className='next'>I found my own supplier </p>
      </div>

     
      <div class="favourites">
      <img className="star" src={require('./suplierimg/Star 1.png')} alt="star image"/> 
      <p className="name">Favourites</p>
      <img className="arrow-right" src={require('./suplierimg/arrow-right.png')} alt="arrow-right image"/>
      </div> 

  
    <div className="supplierslist">

         <SupCat />

      <Navbar />
    </div>

</div>
  );
}

export default SuppliersCategories;

