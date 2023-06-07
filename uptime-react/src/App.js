import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { Dashboard } from './components/dashboard/dashboard';

function App() {

  return (
          <div className="App">
            <BrowserRouter>
              <Provider store={store}>
              <Routes>
                <Route path="/" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Routes>
              </Provider>
            </BrowserRouter>
          </div>
  );
}

export default App;
