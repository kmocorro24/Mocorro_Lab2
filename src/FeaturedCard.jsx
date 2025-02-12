import './App.css'

function FeaturedCard(props) {
    return (
      <div className="featured-card">
        <img src={props.image} alt={props.alt} className="featured-image" />
        <h3 className="featured-name">{props.name}</h3>
        <button className="order-button">Order Now</button>
      </div>
    );
  }

  export default FeaturedCard