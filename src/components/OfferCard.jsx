
function OfferCard(props) {
    return (
      <div className="offer-card">
        <img src={props.image} alt={props.alt} className="offer-image" />
      </div>
    );
  }

  export default OfferCard