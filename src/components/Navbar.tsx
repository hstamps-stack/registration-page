import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* logo */}
            <Link to="/" className="navbar-brand">
                Some Cool Start Up
            </Link>
        </nav>
    )
}

export default Navbar