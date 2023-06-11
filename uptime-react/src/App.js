import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Routes,Route } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import { auth } from './redux/userSlice';

import { Dashboard } from './components/dashboard/dashboard';
import { ProtectedRoute } from './guards/auth.guard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavBar } from './components/navbar/navbar';
import { UserInfo } from './components/userinfo/user.info';

function App() {

  const [userSaved,setuserSaved] = useState(()=>{
    // getting stored value
    const saved = localStorage.getItem("uptime");
    return saved;
  });
  const dispatch = useDispatch();

  useEffect(()=>{
    if(userSaved){
      dispatch(auth(JSON.parse(userSaved)));
    }
  },[])

  return (
          <div className="App">
              { userSaved && <NavBar />}
              <Routes>
                <Route path="/" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={
                  <ProtectedRoute auth={auth} children={<Dashboard />} />
                }/>
                <Route path="userinfo" element={
                  <ProtectedRoute auth={auth} children={<UserInfo />} />
                }/>
              </Routes>
          </div>
  );
}

export default App;
