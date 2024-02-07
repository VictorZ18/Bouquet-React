import './App.css';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';

function Personalization() {
  return (
    <div className="App">
        <SideMenu />
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is personalization </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Personalization;