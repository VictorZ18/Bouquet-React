import './App.css';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';

function Suppliers() {
  return (
    <div className="App">
        <SideMenu />
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is suppliers </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Suppliers;