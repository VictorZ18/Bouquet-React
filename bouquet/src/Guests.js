import './App.css';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';

function Guests() {
  return (
    <div className="App">
        <SideMenu />
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is guests </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Guests;