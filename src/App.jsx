import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CarList from "./components/CarList";
import Profile from "./components/Profile";
import CarDetail from "./pages/CarDetail";
import AddCar from "./components/admin/AddCar";
import ProtectedRoutes from "./routes/ProtectedRoutes";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* Protected Routes inside Layout */}
        <Route path="/" element={<ProtectedRoutes><Layout><CarList/></Layout></ProtectedRoutes>}/>
        <Route path="/profile" element={<ProtectedRoutes><Layout><Profile/></Layout></ProtectedRoutes>}/>
        <Route path="/car/:id" element={<ProtectedRoutes><Layout><CarDetail/></Layout></ProtectedRoutes>}/>
        <Route path="/addcar" element={<ProtectedRoutes><Layout><AddCar/></Layout></ProtectedRoutes>}/>
      </Routes>
    </Router>
  );
}

export default App;
