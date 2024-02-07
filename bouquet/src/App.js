import './App.css';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';

function Home() {
  return (
    <div className="App">
      <SideMenu />
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is home </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Home;
