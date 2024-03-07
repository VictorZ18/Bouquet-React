import './App.scss';
import Navbar from '../components/navbar';
import SideMenu from '../components/sideNav';

function Budget() {
  return (
    <div className="App">
      <SideMenu />
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is budget </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Budget;