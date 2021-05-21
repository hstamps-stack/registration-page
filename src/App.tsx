import './App.css';
import RegistrationPage from "./page/Registration"
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar/>
      <RegistrationPage />
    </Router>
  );
}

export default App;
