import "../views/App.scss";

function Button(props) {
  return (
    <div className="button ">
      <p className="buttonText">{props.text}</p>
    </div>
  );
}

export default Button;
