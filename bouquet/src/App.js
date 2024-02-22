import './App.css';
import Countdown from './components/countdown';
import Navbar from './components/navbar';
import SideMenu from './components/sideNav';
import WeddingHeader from './components/weddingHeader';
import CouplePic from './media/hannah-olinger-eNZayb-kkvE-unsplash.jpg';
import useUser from './composables/userApi';

function Home() {
  //const { userData, error, getAllUser } = useUser();
  //(getAllUser);
  return (
      <div className="App">
        <img src={CouplePic} alt="couple" className="couplePic"/>
        <SideMenu />
        <header className="App-header">
          <WeddingHeader />
        </header>
        <Countdown /> 
        <Navbar />
      </div>
  );
}

export default Home;
