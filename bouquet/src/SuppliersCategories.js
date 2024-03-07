import './SuppliersCategories.css'
import Navbar from './components/navbar';
import SupCat from './components/supplierscategories';


function SuppliersCategories() {
  return (
    <div className="App">

      <div className='container'>
      <img className="Menu" src={require('./media/Menu.png')} alt="Menu image"/>  
      <p className='next'>I found my own supplier </p>
      </div>

     
      <div class="favourites">
      <img className="star" src={require('./media/Star 1.png')} alt="star image"/> 
      <p className="name">Favourites</p>
      <img className="arrow-right" src={require('./media/arrow-right.png')} alt="arrow-right image"/>
      </div> 

  
    <div className="supplierslisting">

         <SupCat />

      <Navbar />
    </div>

</div>
  );
}

export default SuppliersCategories;

