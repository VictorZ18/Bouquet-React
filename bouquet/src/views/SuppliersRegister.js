import './App.scss';
import '../components/login.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';


function SuppliersRegister() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCatererInfo, setShowCatererInfo] = useState(false);
  const [showVenueInfo, setShowVenueInfo] = useState(false);

  useEffect(() => {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    axios.get(`${apiBaseUrl}/categories`)
      .then(res => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    const selectedCategory = categories.find(category => category._id === selectedCategoryId);
    setSelectedCategory(selectedCategory);

    // Show/hide caterer info based on selected category
    if (selectedCategory && selectedCategory.category_name === 'Caterers') {
      setShowCatererInfo(true);
      setShowVenueInfo(false);
    } else if (selectedCategory && selectedCategory.category_name === 'Venues') {
      setShowVenueInfo(true);
      setShowCatererInfo(false);
    } else {
      setShowCatererInfo(false);
      setShowVenueInfo(false);
    }

    // Log the selected category immediately when it is selected
    console.log("Selected category:", selectedCategory);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with selectedCategory value
    console.log("Submitted category:", selectedCategory);
  };

  const [file, setFile] = useState();
  const handleChange = (e) => {
    const uploadedFile = e.target.files[0];
    const fileType = uploadedFile.type;

    if (fileType === 'image/jpeg' || fileType === 'image/png') {
      console.log("Valid image file type.");
      setFile(URL.createObjectURL(uploadedFile));
    } else {
      console.log("Converting to JPEG format...");
      const reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const dataUrl = canvas.toDataURL('image/jpeg');
          setFile(dataUrl);
        }
      }
    }
  }
  console.log(file);

  const [data, setData] = useState([]);

  const submitted = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    if (selectedCategory && selectedCategory.category_name === 'Caterers') {
      const speciality = document.getElementById('speciality').value;
      console.log(speciality);
      axios.post(`${apiBaseUrl}/suppliers/create`,
      { supplier_name: name, supplier_picture: file, supplier_price: price, categories_id: category })
      .then(res => {
        console.log('Supplier:', res.data); // Log the created supplier data
        // Add the created supplier to the state
        setData(prevData => [...prevData, res.data]);
          axios.post(`${apiBaseUrl}/caterers/create`,
          { caterer_speciality: speciality, category_id: category, supplier_id: res.data._id })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        })
    }
    if (selectedCategory && selectedCategory.category_name === 'Venues') {
      const streetName = document.getElementById('streetName').value;
      const streetNumber = document.getElementById('streetNumber').value;
      const postcode = document.getElementById('postcode').value;
      const city = document.getElementById('city').value;
      const country = document.getElementById('country').value;
      console.log(streetName, streetNumber, postcode, city, country);
      var api_key = 'e2929cac460f4765a7e8088612e9dcdb';
      // reverse geocoding example (coordinates to address)
      //var latitude = '52.3877830';
      //var longitude = '9.7334394';
      //var query = latitude + ',' + longitude;
      var query = streetName + '.' + ' ' + streetNumber + "," + ' ' + postcode + ' ' + city + ',' + ' ' + country; //Zandpoortvest. 1, 2800 Mechelen, Belgium
      console.log(query);
      var api_url = 'https://api.opencagedata.com/geocode/v1/json'

      var request_url = api_url
        + '?'
        + 'key=' + api_key
        + '&q=' + encodeURIComponent(query)
        + '&pretty=1'
        + '&no_annotations=1';

      var request = new XMLHttpRequest();
      request.open('GET', request_url, true);
      request.onload = function () {
        if (request.status === 200) {
          // Success!
          var data = JSON.parse(request.responseText);
          if (data.results && data.results.length > 0) {
            var coordinates = data.results[0].geometry;
            console.log("Latitude:", coordinates.lat);
            console.log("Longitude:", coordinates.lng);
            axios.post(`${apiBaseUrl}/suppliers/create`,
            { supplier_name: name, supplier_picture: file, supplier_price: price, categories_id: category })
            .then(res => {
              console.log('Supplier:', res.data); // Log the created supplier data
              // Add the created supplier to the state
              setData(prevData => [...prevData, res.data]);
                axios.post(`${apiBaseUrl}/venues/create`,
                { venue_longitude: coordinates.lng, venue_latitude: coordinates.lat, venue_address: query, category_id: category, supplier_id: res.data._id })
                .then(res => {
                  console.log(res.data);
                })
                .catch(err => {
                  console.log(err);
                });
            }) 
          } else {
            console.log("No results found");
          }
        } else if (request.status <= 500) {
          console.log("unable to geocode! Response code: " + request.status);
          var data = JSON.parse(request.responseText);
          console.log('error msg: ' + data.status.message);
        } else {
          console.log("server error");
        }
      };
      request.onerror = function () {
        console.log("unable to connect to server");
      };
      request.send();   
    }
    console.log(name, price, category);



  }

  return (
    <div className="App">
      <div className='registerForm'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor='uploadButton'>Add Image:</label>
            <input className='uploadButton' type="file" onChange={handleChange} />
            <img className='uploaded' src={file} alt='uploaded' />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="range" id="price" name="price" min="1" max="3" step="1" list="markers" />

            <datalist id="markers">
              <option value="1" label="€"></option>
              <option value="2" label="€€"></option>
              <option value="3" label="€€€"></option>
            </datalist>
          </div>
          <div className='form-group'>
            <label htmlFor='category'>Category</label>
            <select
              id="category"
              className="category"
              name="category"
              value={selectedCategory ? selectedCategory._id : ''}
              onChange={handleCategoryChange}
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
          {showCatererInfo && (
            <div className="form-group catererInfo">
              <label htmlFor="speciality">Speciality</label>
              <input type="text" id="speciality" name="speciality" />
            </div>
          )}
          {showVenueInfo && (
            <div className="form-group venueInfo">
              <label htmlFor="streetName">Street name</label>
              <input type="text" id="streetName" name="streetName" />
              <label htmlFor="streetNumber">Street number</label>
              <input type="text" id="streetNumber" name="streetNumber" />
              <label htmlFor="postcode">Postcode</label>
              <input type="text" id="postcode" name="postcode" />
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" />
            </div>
          )}
          <div className="form-group">
            <button type="submit" className='button' onClick={submitted}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SuppliersRegister;


