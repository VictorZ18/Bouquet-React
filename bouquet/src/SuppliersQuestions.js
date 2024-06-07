import "./SuppliersQuestions.scss";
import Button from "./components/button";
import { Link } from "react-router-dom";

function SuppliersCategories() {
  return (
    <div className="App">
      <div className="Group">
        <div className="Backarrow">
          <img
            className="arrow-left"
            src={require("./icons/arrow-left.png")}
            alt="arrow-right image"
          />
          <p className="Back">Back</p>
          <p className="Skip">skip</p>
        </div>
      </div>

      <div className="">
        <h1 className="Cateres"> Cateres </h1>
        <img
          className="cateresimg"
          src={require("./media/cateresimg.png")}
          alt="phonebar image"
        />
      </div>

      <div>
        <h2 className="prag">Speciality</h2>
        <p className="prag">
          Which food speciality are you most interested in?
        </p>
      </div>

      <div className="speciality">
        <div class="stroke">
          <p className="type">Mexican</p>
        </div>
        <div class="stroke">
          <p className="type">French</p>
        </div>
        <div class="stroke">
          <p className="type">American</p>
        </div>
      </div>

      <div className="speciality">
        <div class="stroke">
          <p className="type">Chinese</p>
        </div>
        <div class="stroke">
          <p className="type">Thai</p>
        </div>
        <div class="stroke">
          <p className="type">Japanesse</p>
        </div>
        <div class="stroke">
          <p className="type">Indian</p>
        </div>
      </div>

      <div className="speciality">
        <div class="stroke">
          <p className="type">Maroccan</p>
        </div>
        <div class="stroke">
          <p className="type">Greek</p>
        </div>
        <div class="stroke">
          <p className="type">Italian</p>
        </div>
        <div class="stroke">
          <p className="type">Spanish</p>
        </div>
      </div>

      <div>
        <h2 className="prag">Allergies - Intolerances</h2>
        <p className="prag">
          Any allergies or intolerances we should be
          <br></br>
          mindful of?
        </p>
      </div>

      <div className="speciality">
        <div class="stroke">
          <p className="type">Peanuts</p>
        </div>
        <div class="stroke">
          <p className="type">Gluten</p>
        </div>
        <div class="stroke">
          <p className="type">Fish</p>
        </div>
        <div class="stroke">
          <p className="type">Milk</p>
        </div>
      </div>

      <div className="speciality">
        <div class="stroke">
          <p className="type">Wheat</p>
        </div>
        <div class="stroke">
          <p className="type">Soybean</p>
        </div>
        <div class="stroke">
          <p className="type">Almonds</p>
        </div>
      </div>

      <div className="speciality">
        <div class="stroke">
          <p className="type">Pecans</p>
        </div>
        <div class="stroke">
          <p className="type">Soybeans</p>
        </div>
        <div class="stroke">
          <p className="type">Sesame</p>
        </div>
      </div>

      <Link to="/Momentpage">
        <Button text="Confirm" />
      </Link>
    </div>
  );
}

export default SuppliersCategories;
