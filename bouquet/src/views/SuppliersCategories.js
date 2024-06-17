import './SuppliersCategories.scss'
import Navbar from '../components/navbar';
import SupCat from '../components/supplierscategories';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SuppliersCategories() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${apiBaseUrl}/categories`)
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <p className='ownSupplier'>I found my own supplier </p>
      <Link to="/Favourites">
        <div className="favourites">
          <div className="favourites-title">
            <img className="star" src={require('../media/Star 1.png')} alt="star" />
            <p className="name">Favourites</p>
          </div>
          <img className="arrow-right" src={require('../icons/arrow-left.png')} alt="arrow-right" />
        </div>
      </Link>
      <div className="supplierslisting">
        <div className="supplierslist">
          {categories.map((category) => {
            return (
              <div key={category._id}>
                <Link to={`/CaterersList/${category.category_name}`}>
                  <SupCat picture={category.category_picture} name={category.category_name} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default SuppliersCategories;

