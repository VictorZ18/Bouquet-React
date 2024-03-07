import './App.scss';
import './Suppliers.scss';
import Supp from '../components/suppliers';
import Navbar from '../components/navbar';
import SideMenu from '../components/sideNav';
import Button from '../components/button';

function Suppliers() {
  return (
    <div className="categories">
      <SideMenu />
      <p className='title'> Choose below the suppliers you will be needing!</p>
      <Supp />
      <p className='footer'>You can add later if you booked your own suppliers.</p>
      <Button text="Confirm"/>
      <Navbar />

    </div>
  );
}

export default Suppliers;

