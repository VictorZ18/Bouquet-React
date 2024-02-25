import './App.css';
import Navbar from './components/navbar';
import Axios from 'axios';


const firstName = async (firstName) => {
  try {
    const res = await Axios.get(
      `http://localhost:4000/users/${firstName}`
    );
    if (res.data = "Kevin") {
      console.log('User found');
    }
    if (!res.data) {
      console.log('No user found');
    }
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Bouquet </p>
        <p> This is home </p>
      </header>
      <Navbar />
    </div>
  );
}

export default Home;


