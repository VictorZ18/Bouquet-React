import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import media from "../media/chef.png";
import { useSelector } from 'react-redux'; 
import '../views/Favourites.scss';

function Favourites() {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const user = useSelector(state => state.user); 
    const [favourites, setFavourites] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [booked, setBooked] = useState([]);
    const [activeTab, setActiveTab] = useState('favourites'); // New state to track the active tab

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const favouritesRes = await axios.get(`${apiBaseUrl}/favourites`, {
                    params: { user_id: user.user._id }
                });
                setFavourites(favouritesRes.data);

                const suppliersRes = await axios.get(`${apiBaseUrl}/suppliers`);
                const suppliersData = suppliersRes.data;

                const categoriesRes = await axios.get(`${apiBaseUrl}/categories`);
                setCategories(categoriesRes.data);

                // Filter and organize suppliers by categories
                const suppliersByCategory = categoriesRes.data.map(category => {
                    const categorySuppliers = suppliersData.filter(supplier =>
                        favouritesRes.data.some(favourite => favourite.supplier_id === supplier._id) &&
                        supplier.categories_id === category._id
                    );
                    return {
                        category,
                        suppliers: categorySuppliers
                    };
                });

                setSuppliers(suppliersByCategory);
            } catch (err) {
                console.log(err);
            }
        };

        fetchFavourites();
    }, [apiBaseUrl, user.user._id]);

    const getPriceSigns = (price) => {
        return '€'.repeat(price);
    };

    const removeFavourite = async (supplierId) => {
        try {
            await axios.delete(`${apiBaseUrl}/favourites`, {
                data: {
                    user_id: user.user._id,
                    supplier_id: supplierId
                }
            });
            setFavourites(prevFavourites => prevFavourites.filter(fav => fav.supplier_id !== supplierId));

            // Update suppliers state to reflect removal of the supplier
            setSuppliers(prevSuppliers =>
                prevSuppliers.map(category => ({
                    ...category,
                    suppliers: category.suppliers.filter(supplier => supplier._id !== supplierId)
                }))
            );
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchBooked = async () => {
            try {
                const bookedRes = await axios.get(`${apiBaseUrl}/booked`, {
                    params: { user_id: user.user._id }
                });
                setFavourites(bookedRes.data);

                const suppliersRes = await axios.get(`${apiBaseUrl}/suppliers`);
                const suppliersData = suppliersRes.data;

                const categoriesRes = await axios.get(`${apiBaseUrl}/categories`);
                setCategories(categoriesRes.data);

                // Filter and organize suppliers by categories
                const suppliersByCategory = categoriesRes.data.map(category => {
                    const categorySuppliers = suppliersData.filter(supplier =>
                        bookedRes.data.some(booked => booked.supplier_id === supplier._id) &&
                        supplier.categories_id === category._id
                    );
                    return {
                        category,
                        suppliers: categorySuppliers
                    };
                });

                setBooked(suppliersByCategory);
            } catch (err) {
                console.log(err);
            }
        };

        fetchBooked();
    }, [apiBaseUrl, user.user._id]);

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Link to="/SuppliersCategories">
                <img className='back-arrow' src={require('../icons/arrow-left.png')} alt="back-arrow" />
            </Link>
            <div className='tabs'>
                <h1 
                    className={`pageTitle tab ${activeTab === 'favourites' ? 'tabActive' : ''}`} 
                    onClick={() => switchTab('favourites')}
                >
                    Favourites
                </h1>
                <h1 
                    className={`pageTitle tab ${activeTab === 'booked' ? 'tabActive' : ''}`} 
                    onClick={() => switchTab('booked')}
                >
                    Booked
                </h1>
            </div>
            {activeTab === 'favourites' ? (
                <div className='favouriteTab'>
                    {suppliers.map(categoryGroup => (
                        <div key={categoryGroup.category._id}>
                            <h2 className='subtitle'>{categoryGroup.category.category_name}</h2>
                            {categoryGroup.suppliers.length > 0 ? (
                                <div className="slider-container">
                                    {categoryGroup.suppliers.map(supplier => (
                                        <div key={supplier._id} className="card">
                                            <Link to={`/CaterersPage/${categoryGroup.category.category_name}/${supplier.supplier_name}`}>
                                                <img className="cardImage" src={media} alt={supplier.supplier_name} />
                                            </Link>
                                            <div className="card_description">
                                                <div className="card_info">
                                                    <Link to={`/CaterersPage/${supplier.supplier_name}`}>
                                                        <p className="cardName">{supplier.supplier_name}</p>
                                                    </Link>
                                                    <img
                                                        className='favourite'
                                                        src={require('../media/Star_colored.png')}
                                                        alt='favourite'
                                                        onClick={() => removeFavourite(supplier._id)}
                                                    />
                                                </div>
                                                <div className="card_info">
                                                    <p className="cardExtra">Category: {categoryGroup.category.category_name}</p>
                                                    <p className="cardPrice">{getPriceSigns(supplier.supplier_price)}</p>
                                                </div>
                                                <Link to={`/CaterersPage/${supplier.supplier_name}`}>
                                                    <p className="cardReview">{supplier.supplier_review_number} reviews</p>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className='text'>No favourites for this category.</p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className='bookedTab'>
                    {booked.map(categoryGroup => (
                        <div key={categoryGroup.category._id}>
                            <h2 className='subtitle'>{categoryGroup.category.category_name}</h2>
                            {categoryGroup.suppliers.length > 0 ? (
                                <div className="slider-container">
                                    {categoryGroup.suppliers.map(supplier => (
                                        <div key={supplier._id} className="card">
                                            <Link to={`/CaterersPage/${categoryGroup.category.category_name}/${supplier.supplier_name}`}>
                                                <img className="cardImage" src={media} alt={supplier.supplier_name} />
                                            </Link>
                                            <div className="card_description">
                                                <div className="card_info">
                                                    <Link to={`/CaterersPage/${supplier.supplier_name}`}>
                                                        <p className="cardName">{supplier.supplier_name}</p>
                                                    </Link>
                                                    <img
                                                        className='favourite'
                                                        src={require('../media/Star_colored.png')}
                                                        alt='favourite'
                                                        onClick={() => removeFavourite(supplier._id)}
                                                    />
                                                </div>
                                                <div className="card_info">
                                                    <p className="cardExtra">Category: {categoryGroup.category.category_name}</p>
                                                    <p className="cardPrice">{getPriceSigns(supplier.supplier_price)}</p>
                                                </div>
                                                <Link to={`/CaterersPage/${supplier.supplier_name}`}>
                                                    <p className="cardReview">{supplier.supplier_review_number} reviews</p>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className='text'>No booked suppliers for this category.</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favourites;
