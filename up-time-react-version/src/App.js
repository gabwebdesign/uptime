import './App.css';
import Login from './components/login';
//import { UserProvider } from './provider/userProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store'

function App() {

  return (
          <div className="App">
            <Provider store={store}>
              <Login></Login>
            </Provider>
          </div>
  );
}

export default App;
