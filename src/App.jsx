import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./SignUp";
import Login from "./Login";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import ServicesPage from "./pages/ServicesPage";
import Hero from "./components/Hero";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<Booking />} />
        <Route path="/history" element={<Blog />} />
        <Route path="/edit-appointment" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
