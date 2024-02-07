import './App.css';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';
import WeddingHeader from './components/weddingHeader';
import CouplePic from './media/hannah-olinger-eNZayb-kkvE-unsplash.jpg';

function Home() {
  return (
      <div className="App">
        <img src={CouplePic} alt="couple" className="couplePic"/>
        <SideMenu />
        <header className="App-header">
          <WeddingHeader />
        </header>
        <Navbar />
      </div>
  );
}

export default Home;
