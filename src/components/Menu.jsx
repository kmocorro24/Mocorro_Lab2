import MenuCard from "../components/MenuCard.jsx"

function Menu() {
  return (
    <div className="menu">
      <div className="menu-header">
        <h2 className="menu-title">Menu</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="menu-container">
        <MenuCard name="FEATURED" image="../src/assets/pictures/bkcafe.jpg" alt="BK Cafe" />
        <MenuCard name="GROUP MEALS" image="../src/assets/pictures/groupmeals.jpg" alt="Group Meals" />
        <MenuCard name="KING SAVERS BUNDLES" image="../src/assets/pictures/kingsavers.jpg" alt="King Savers Bundles" />
      </div>
    </div>
  );
}

export default Menu