import './App.css';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';

function Media() {
  return (
    <div className="App">
        <SideMenu />
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is media </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Media;