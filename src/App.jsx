import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurCompany from "./pages/OurCompany";
import Brands from "./pages/Brands";
import Sustainability from "./pages/Sustainability";
import Carrers from "./pages/Carrers";
import HowToBuy from "./pages/HowToBuy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/careers" element={<Carrers />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
      </Routes>
    </Router>
  );
}

export default App;
