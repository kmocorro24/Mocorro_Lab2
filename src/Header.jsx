import './App.css'

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

  export default Header