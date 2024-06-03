import "./Addprogram.scss";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideNav";
import Programdetails from "../components/programinfo";
import { Link } from "react-router-dom";

function addprogram() {
  return (
    <div className="App">
      <SideMenu />
      <header className="App-header">
        <div className="wrapper">
          <p className="tittle"> Your program</p>

          <Link to="/Momentcreation">
            <Programdetails />
          </Link>
          <Programdetails />

          <Link to="/Momentcreation">
            <img className="add" src={require("../media/Add.png")} alt="" />
          </Link>
        </div>
      </header>
      <Navbar />
    </div>
  );
}

export default addprogram;
