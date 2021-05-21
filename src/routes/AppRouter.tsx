import {Switch, Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import RegistrationPage from '../page/Registration'
const AppRouter = () =>{
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={RegistrationPage} />
            </Switch>
        </div>
    )
}

export default AppRouter