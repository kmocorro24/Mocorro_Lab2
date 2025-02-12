
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

  export default MenuCard