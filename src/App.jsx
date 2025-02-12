import './App.css'
import offers from "./offers"

function App() {
  

  return (
    <div>
   <Header />
   <Welcome />
   <Featured />
   <Menu />
   <Offers />
   </div>
  )
}

function Header() {

  return (
    <div>

    <header className="header">
      
      <div className="logo">
        <img src="pictures/logo.png" alt="Burger King" />
      </div>


      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Bulk Order</a>
        <a href="#">Offers</a>
        <a href="#">Restaurants</a>
        <a href="#">Contact Us</a>
      </nav>

      
      <a href="#" className="order-button">
        Order Now
      </a>
    </header>
    </div>

  )
}

function Welcome() {
  return (
    <div>
       <div className="whopper">
        <img src="pictures/whopper.jpg" alt="Whopper" />
      </div>

      <div className="welcometext">
        <h2>Welcome to Burger King. Home of the Whopper®!</h2>
        <p>Hungry yet? Give in.</p>
      </div>
    </div>

  )
}

function Featured() {
  return (
    <div className="featured">
      <div className="featured-header">
        <h2 className="featured-title">Featured</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="featured-container">
        <FeaturedCard name="Cheesy Dip" image="pictures/cheesydip.jpg" alt="Cheesy Dip" />
        <FeaturedCard name="Angry Dip" image="pictures/angrydip.jpg" alt="Angry Dip" />
        <FeaturedCard name="Smoky BBQ Dip" image="pictures/smokydip.jpg" alt="Smoky BBQ Dip" />
        <FeaturedCard name="Breakfast Sausage Bowl" image="pictures/breakfastbowl.jpg" alt="Breakfast Sausage Bowl" />
      </div>
    </div>
  );
}

function FeaturedCard(props) {
  return (
    <div className="featured-card">
      <img src={props.image} alt={props.alt} className="featured-image" />
      <h3 className="featured-name">{props.name}</h3>
      <button className="order-button">Order Now</button>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <div className="menu-header">
        <h2 className="menu-title">Menu</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="menu-container">
        <MenuCard name="FEATURED" image="pictures/bkcafe.jpg" alt="BK Cafe" />
        <MenuCard name="GROUP MEALS" image="pictures/groupmeals.jpg" alt="Group Meals" />
        <MenuCard name="King Savers Bundles" image="pictures/kingsavers.jpg" alt="King Savers Bundles" />
      </div>
    </div>
  );
}

function MenuCard(props) {
  return (
    <div className="menu-card">
      <div className="menu-card-top">
        <img src={props.image} alt={props.alt} className="menu-image" />
      </div>
      <div className="menu-card-bottom">
        <h3 className="menu-name">{props.name}</h3>
      </div>
    </div>
  );
}

function Offers() {
  return (
    <div className="offers">
      <div className="offers-header">
        <h2 className="offers-title">Offers</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="offers-container">
        {offers.map((offer, index) => (
          <OfferCard key ={index} {...offer} />
        ))}
      </div>
    </div>
  );
}

function OfferCard(props) {
  return (
    <div className="offer-card">
      <img src={props.image} alt={props.alt} className="offer-image" />
    </div>
  );
}












export default App
