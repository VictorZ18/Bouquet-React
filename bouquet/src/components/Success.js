import Button from "./button";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <h1 className="Head">
            It’s now time to publish your
            <br></br>
            wedding!
          </h1>
          <p className="smalltext">
            Only when published, can you invite your guests and have access to
            personalization (invitations, guest platform,...).
          </p>
          <Link to="/Paymentinfo">
            <Button text="Publish" />
          </Link>
          <p className="text">This is a premium functionality.</p>
        </div>
      </header>
    </div>
  );
}

export default Success;
