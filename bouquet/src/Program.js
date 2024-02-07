import './App.css';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';

function Program() {
  return (
    <div className="App">
        <SideMenu />
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is program </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Program;