import './App.css'
import OfferCard from "./OfferCard.jsx";
import offers from "./offers"


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

  export default Offers
