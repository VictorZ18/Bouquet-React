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
          <h1 className="titlePage titleMargin"> Your program</h1>

          <Link to="/Momentpage">
            <Programdetails />
          </Link>

          <Link to="/Momentselection">
            <img className="add" src={require("../media/Add.png")} alt="" />
          </Link>
        </div>
      </header>
      <Navbar />
    </div>
  );
}

export default addprogram;
