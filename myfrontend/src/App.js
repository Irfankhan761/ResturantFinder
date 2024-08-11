import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import RestaurantSearch from "./pages/RestaurantSearch";
import { Navigate } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RestaurantSearch" element={<RestaurantSearch />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
