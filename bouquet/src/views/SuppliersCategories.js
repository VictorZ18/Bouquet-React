import './SuppliersCategories.scss'
import Navbar from '../components/navbar';
import SupCat from '../components/supplierscategories';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SuppliersCategories() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [categories, setCategories] = useState([]);
  const [bookedId, setBookedId] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [supplierCategory, setSupplierCategory] = useState([]);
  const user = useSelector(state => state.user);
  useEffect(() => {
    axios.get(`${apiBaseUrl}/categories`)
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    const fetchBooked = async () => {
      try {
        const bookedRes = await axios.get(`${apiBaseUrl}/booked`, {
          params: { user_id: user.user._id }
        });
        const bookedData = bookedRes.data;
        setBookedId(bookedData);

        const suppliersRes = await axios.get(`${apiBaseUrl}/suppliers`);
        const suppliersData = suppliersRes.data;

        const categoriesRes = await axios.get(`${apiBaseUrl}/categories`);
        const categoriesData = categoriesRes.data;

        const suppliersBooked = bookedData.map(booked => {
          const bookedSuppliers = suppliersData
            .filter(supplier => supplier._id === booked.supplier_id)
            .map(supplier => {
              const supplierCategory = categoriesData.find(cat => cat._id === supplier.categories_id);
              setSupplierCategory(supplierCategory);
              return {
                ...supplier,
                category: supplierCategory
              };
            });
          setSuppliers(bookedSuppliers);
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooked();

  }, []);
  let check = "x";

  return (
    <div className="App">
      <p className='ownSupplier'>I found my own supplier </p>
      <Link to="/Favourites">
        <div className="favourites">
          <div className="favourites-title">
            <img className="star" src={require('../media/Star 1.png')} alt="star" />
            <p className="name">Favourites & booked</p>
          </div>
          <img className="arrow-right" src={require('../icons/arrow-left.png')} alt="arrow-right" />
        </div>
      </Link>
      <div className="supplierslisting">
        <div className="supplierslist">
          {categories.map((category) => {
            if (suppliers) {
              {
                suppliers.map((supplier) => {
                  const bookedCategory = supplier.category.category_name;
                  if (bookedCategory === category.category_name) {
                    console.log(category.category_name);
                    check = "✓";
                  } else {
                    check = "x";
                  }
                }
                )
              }
            }
            return (
              <div key={category._id}>
                <Link to={`/CaterersList/${category.category_name}`}>
                  <SupCat picture={category.category_picture} name={category.category_name} check={check} />
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

