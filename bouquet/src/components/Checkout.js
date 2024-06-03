import { loadStripe } from "@stripe/stripe-js";
//import Button from "../components/button";
import "./checkout.scss";

let stripePromise;

const getStripe = () => {
  console.log(`${process.env.REACT_APP_STRIPE_KEY}`);
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
  }
  return stripePromise;
};

const Checkout = () => {
  const item = {
    price: "price_1PIW9cJn0McOpTCurUFqjBi5",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    console.log("Button is clicked");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("stripe checkout error", error);
  };

  return (
    <div>
      <div className="Checkout">
        <header className="App-header"></header>

        <h1 className="Tittle">
          You’re wedding is about to <br></br>go live!
        </h1>
        <p className="moneyfield">9.99€</p>
        <img
          className="payment"
          src={require("../media/paymentmethod.png")}
          alt=""
        />
      </div>
      <button className="checkout-button" onClick={redirectToCheckout}>
        Confirm
      </button>
    </div>
  );
};

export default Checkout;
