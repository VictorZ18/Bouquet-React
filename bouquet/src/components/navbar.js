import '../App.css';
import homeOn from '../icons/home_on.png';
import supplierOff from '../icons/suppliers_off.png';
import guestOff from '../icons/guests_off.png';
import checklistOff from '../icons/checklist_off.png';
import programOff from '../icons/program_off.png';

function Navbar() {
    return (
        <div className="navbar">
            <div className="icon">
                <img className="iconImg" src= {homeOn} alt="overview" />
                <p className="navTag active"> Overview </p>
            </div>
            <div className="icon">
                <img className="iconImg" src= {supplierOff} alt="suppliers" />
                <p className="navTag"> Suppliers </p>
            </div>
            <div className="icon">
                <img className="iconImg" src= {guestOff} alt="guests" />
                <p className="navTag"> Guests </p>
            </div>
            <div className="icon">
                <img className="iconImg" src= {checklistOff} alt="checklist" />
                <p className="navTag"> Checklist </p>
            </div>
            <div className="icon">
                <img className="iconImg" src= {programOff} alt="program" />
                <p className="navTag"> Program </p>
            </div>  
        </div>
    );
}

export default Navbar;