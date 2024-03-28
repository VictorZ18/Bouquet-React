import './SuppliersCategories.scss'
import Navbar from '../components/navbar';
import SupCat from '../components/supplierscategories';


function SuppliersCategories() {
  return (
    <div className="App">
        <p className='ownSupplier'>I found my own supplier </p>
      <div className="favourites">
        <div className="favourites-title">
          <img className="star" src={require('../media/Star 1.png')} alt="star" />
          <p className="name">Favourites</p>
        </div>
        <img className="arrow-right" src={require('../icons/arrow-left.png')} alt="arrow-right" />
      </div>
      <div className="supplierslisting">
        <SupCat />
        <Navbar />
      </div>
    </div>
  );
}

export default SuppliersCategories;

