//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Support from "./Components/Support/Support";
import BusinessServices from "./Components/BusinessServices/BusinessServices";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Support /> */}
      <BusinessServices />
      <Footer />
    </div>
  );
}

export default App;
