import React from "react";
import '../views/Suppliers.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Supp() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/categories')
      .then(res => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  let source = document.querySelector('.supplierscards');
  console.log(source);

  return (
    <div className="supplierslist">
      {categories.map((category) => {
        return (
          <div key={category._id} className="image-container">
            <img className="supplierscards" src={category.category_picture} alt="venues" />
            <div className="stroked-element">
              <p className='supplier'>{category.category_name}</p>
            </div>
          </div>
        );
        })
      };  

    </div>
  );
}
export default Supp;

