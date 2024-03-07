
import Navbar from '../components/navbar';
import SideMenu from '../components/sideNav';

function Checklist() {
  return (
    <div className="App">
        <SideMenu />
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is checklist </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Checklist;