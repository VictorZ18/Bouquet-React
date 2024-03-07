import './Suppliers.css'
import Supp from '../components/suppliers';
import Navbar from '../components/navbar';
import SideMenu from '../components/sideNav';

function Suppliers() {
  return (
    <div className="App">
      <div>
      <img className="Menu" src={require('../media/Menu.png')} alt="Menu image"/>  
      </div>
        <p className='title'> Choose below the suppliers you will
        <br></br>
        be needing! </p>
    <div className="supplierslist">

    <Supp/>
      
    <p className='footer'>You can add later if you booked your 
    <br></br>
    own suppliers.</p>

      <Navbar />
    </div>

</div>
  );
}

export default Suppliers;

