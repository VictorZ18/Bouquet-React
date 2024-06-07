import StripeCheckout from "react-stripe-checkout";

function Payment() {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className="StripeCheckout">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51N2vRKJn0McOpTCu3dStLY5oiLUTW8TNDpUvouk9HhY98sJahYoTtaYbIkntENbBrXbSiX2cZkLRu1iJBj5ITOAj0047qEnyzl"
      />
    </div>
  );
}

export default Payment;
