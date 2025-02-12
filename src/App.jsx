import "./App.css";
import Header from "../src/components/Header.jsx"
import Welcome from "../src/components/Welcome.jsx"
import Featured from "../src/components/Featured.jsx"
import Menu from "../src/components/Menu.jsx"
import Offers from "../src/components/Offers.jsx" 

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Featured />
      <Menu />
      <Offers />
    </div>
  );
}

export default App;
