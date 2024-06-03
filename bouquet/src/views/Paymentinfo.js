import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "../components/button";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      {showItem ? (
        <StripeCheckout />
      ) : (
        <>
          <header className="App-header">
            <div className="addguests">
              <img
                className="flowerimg"
                src={require("../media/weddingpic.png")}
              />
            </div>
            <div className="wrapper">
              <h1 className="Head">
                Congratulations!
                <br></br>
                Your wedding is now live!
              </h1>

              <Button text="Next" />

              <p className="smalltext">
                By clicking on next, you can go to the personalization menu.{" "}
                <br></br>This will give you the possibility to customize the
                platform guests will see, invitations, and more!
              </p>
            </div>
          </header>
        </>
      )}
    </div>
  );
}

export default App;
