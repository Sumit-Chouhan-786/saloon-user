import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Appointments from "./Appointments";
import History from "./History";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </>
    );
}

export default App;
