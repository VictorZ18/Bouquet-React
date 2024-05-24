import React, { useCallback } from "react";
import '../views/Suppliers.scss';
import { useEffect, useState } from "react";
import axios from "axios";

function Supp() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/categories')
      .then(res => {
        setCategories(res.data);
        setSelectedCategories(Array(res.data.length).fill(false));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  let list = document.querySelector('.supplierslist');
  let source = document.querySelector('.supplierscards');

  const changeColor = (index) => {
    setSelectedCategories(prevState => prevState.map((selected, i) => (i === index ? !selected : selected)));
  };

  return (
    <div className="supplierslist">
      {categories.map((category, index) => {
        return (
          <div key={category._id} className="image-container" onClick={() => changeColor(index)}>
            <img className="supplierscards" src={"/media/" + category.category_picture} alt="suppliers" />
            <div className={selectedCategories[index] ? "selected" : "stroked-element"} >
              <p className={selectedCategories[index] ? 'supplierSelected' : 'supplier'}>{category.category_name}</p>
            </div>
          </div>
        );
      })
      }

    </div>
  );
}

export default Supp;

