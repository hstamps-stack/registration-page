import './App.css';
import RegistrationPage from "./page/Registration";
import AppRouter from './routes/AppRouter';
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalProvider} from './context/GlobalContext'
function App() {
  return (
    <Router>
      <GlobalProvider>
          <AppRouter/>
      </GlobalProvider> 
    </Router>
  );
}

export default App;
