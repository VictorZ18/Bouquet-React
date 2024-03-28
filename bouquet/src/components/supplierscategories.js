import React from "react";
import '../views/SuppliersCategories.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import Venue from "../media/caterers.png";
import { Link } from 'react-router-dom';

function SupCat() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/categories')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <div className="supplierslist">
            {categories.map((category, index) => {
                return (
                        <div key={category._id} className="image-container">
                            <Link to="/CaterersList" >
                            <img className="supplierscards" src={Venue} alt="venues" />
                            <div className="stroked-element">
                                <p className='supplier'>{category.category_name}</p>
                                <div className='booksign'>
                                    <p className='booked'>Booked:</p>
                                    <img className="xmark" src={require('../media/xmark.png')} alt="xmark" />
                                </div>
                            </div>
                            </Link>
                        </div>
                );
            })
            }
        </div>
    );
}
export default SupCat;
