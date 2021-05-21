import './App.css';
import RegistrationPage from "./page/Registration"
import AppRouter from './routes/AppRouter'
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
}

export default App;
