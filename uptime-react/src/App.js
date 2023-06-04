import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/register';
import { Provider } from 'react-redux';
import { store } from './redux/store'

function App() {

  return (
          <div className="App">
            <BrowserRouter>
              <Provider store={store}>
                <Register></Register>
              </Provider>
            </BrowserRouter>
          </div>
  );
}

export default App;
