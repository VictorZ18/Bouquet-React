import React from "react";
import '../views/SuppliersCategories.scss';

function SupCat(props) {
    return (
        <div className="image-container">
            <img className="supplierscards" src={"/media/" + props.picture} alt="suppliers" />
            <div className="stroked-element">
                <p className='supplier'>{props.name}</p>
                <div className='booksign'>
                    <p className='booked'>Booked: <span className="check"> {props.check} </span></p>
                </div>
            </div>
        </div>
    );
}
export default SupCat;
