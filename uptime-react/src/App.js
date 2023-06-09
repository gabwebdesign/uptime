import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { Dashboard } from './components/dashboard/dashboard';
import { ProtectedRoute } from './guards/auth.guard';
import { useEffect, useState } from 'react';

function App() {

  const [auth,setAuth] = useState(()=>{
    // getting stored value
    const saved = localStorage.getItem("uptime");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(()=>{
    if(auth) console.log('hi')
  })

  return (
          <div className="App">
            <BrowserRouter>
              <Provider store={store}>
              <Routes>
                <Route path="/" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }/>
                {/* <PrivateRoute path="dashboard" children={<Dashboard />} /> */}
              </Routes>
              </Provider>
            </BrowserRouter>
          </div>
  );
}

export default App;
