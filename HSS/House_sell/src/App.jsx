import{ BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import User_home from './Component/User_home';
import Admin_dashboard from './Component/Admin_dashboard';
import Home from './Pages/Home'
import House from './Pages/House'
import Profile from './Pages/Profile'


function App() {


  return (
    <>
      <Router> 
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/user_name" element={<User_home/>} />
          <Route path="/admin_dashboard" element={<Admin_dashboard/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/house" element={<House/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App
