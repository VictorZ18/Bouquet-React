import './Suppliers.css'
import Supp from './components/suppliers';
import Navbar from './components/navbar';




function Suppliers() {
  return (
    <div className="App">
      <div>
      <img className="phonebar" src={require('./suplierimg/phonebar.png')} alt="phonebar image"/> 
      </div>
      <div>
      <img className="Menu" src={require('./suplierimg/Menu.png')} alt="Menu image"/>  
      </div>
        <p className='title'> Choose below the suppliers you will
        <br></br>
        be needing! </p>
    <div className="supplierslist">

    <Supp/>
      
    <p className='fotter'>You can add later if you booked your 
    <br></br>
    own suppliers.</p>

      <Navbar />
    </div>

</div>
  );
}

export default Suppliers;

