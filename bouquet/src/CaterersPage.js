import './CaterersPage.css'



function App() {
  return (
    <div className="App">

          <div class="image-container">
        <img className="supplierscards1" src={require('./media/chef (2).png')} alt="Music image"/>  
        <div className="stroked-element1"><p className='supplier'></p>
        <h2 className="taqueria"> La Taqueria </h2>
        <p>Specialities</p>
        <p>Mexican</p>
        <p className='container1'>
        Our restaurant offers catering services for your <br></br>wedding!
        <br></br>We offer Fajitas, Burritos and Tacos with several<br></br> options and variations:<br></br>
        <ul>
        <li>Vegetarian</li>
        <li>Vegan</li>
        <li>Beef</li>
        <li>Pork</li>
        <li>Chicken</li>
        <li>Vegetarian</li>
        </ul>
        We can serve up to 100 people with price ranges between 30€ to 1500€.
        </p>

        <p>Contact information</p>
        <p>+32 ... .. .. ..<br></br>
        lataqueria@restaurant.be
        </p>

        <p>LaTaqueria.be</p>

        <p>Reviews
        <img className="groupstars" src={require('./media/groupstars.png')} alt="phonebar image"/>
         <p className='review'>Leave a review</p>
        </p>
       
        <div class="stroked-element2"><p className=''></p>
        <p className='reviewername'>Kenny Vandenbroek
        <img className="groupstars" src={require('./media/groupstars.png')} alt="phonebar image"/>
        </p>
        <p>Loved the food and the service!
        The people were very nice and everything was cooked perfectly!</p>
        </div>

        <p>Once you’ve booked a supplier, 
      click here to add it.
          To remove, click again.</p>
         
      </div>
        </div>

    </div>


  );
}

export default App;

