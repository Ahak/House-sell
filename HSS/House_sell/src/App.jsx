import{ BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import User_home from './component/User_home';
import Admin_dashboard from './component/Admin_dashboard';

function App() {


  return (
    <>
      <Router> 
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/sigup" element={<SignUp/>} />
          <Route path="/user_name" element={<User_home/>} />
          <Route path="/admin_dashboard" element={<Admin_dashboard/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App
