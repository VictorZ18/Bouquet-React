import '../App.css';
import { Outlet, Link } from 'react-router-dom';
import homeOn from '../icons/home_on.png';
import homeOff from '../icons/home_off.png';
import suppliersOn from '../icons/suppliers_on.png';
import supplierOff from '../icons/suppliers_off.png';
import guestsOn from '../icons/guests_on.png';
import guestOff from '../icons/guests_off.png';
import checklistOn from '../icons/checklist_on.png';
import checklistOff from '../icons/checklist_off.png';
import programOn from '../icons/program_on.png';
import programOff from '../icons/program_off.png';

function Navbar() {
    return (   
        <div className="navbar">
            <div className="icon">
                <Link to="/">
                <img className="iconImg" src= {homeOn} alt="overview" />
                <p className="navTag active"> Overview </p>
                </Link>
            </div>
            <div className="icon">
                <Link to="/suppliers">
                <img className="iconImg" src= {supplierOff} alt="suppliers" />
                <p className="navTag"> Suppliers </p>
                </Link>
            </div>
            <div className="icon">
                <Link to="/guests">
                <img className="iconImg" src= {guestOff} alt="guests" />
                <p className="navTag"> Guests </p>
                </Link>
            </div>
            <div className="icon">
                <Link to="/checklist">
                <img className="iconImg" src= {checklistOff} alt="checklist" />
                <p className="navTag"> Checklist </p>
                </Link>
            </div>
            <div className="icon">
                <Link to="/program">
                <img className="iconImg" src= {programOff} alt="program" />
                <p className="navTag"> Program </p>
                </Link>
            </div>  
        <Outlet />

        </div>
    );
}

export default Navbar;