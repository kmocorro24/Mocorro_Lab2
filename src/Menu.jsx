import './App.css'
import MenuCard from "./MenuCard"

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
        <MenuCard name="KING SAVERS BUNDLES" image="pictures/kingsavers.jpg" alt="King Savers Bundles" />
      </div>
    </div>
  );
}

export default Menu