import './App.css'
import FeaturedCard from './FeaturedCard';

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

export default Featured