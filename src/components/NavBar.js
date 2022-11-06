
import logo from '../images/Fake Shop logo.png'
import '../style/NavBar.css';

function NavBar() {
    return (
        <div className="nav">
            <div className="nav__logo">
                <img src={logo} className="logo" alt="logo" width="300" height="200" />
            </div>
            <div className="nav__links">
                <ul>
                    <li className="nav__link">Store</li>
                    <li className="nav__link">Men</li>
                    <li className="nav__link">Women</li>
                    <li className="nav__link">About Us</li>
                    <li className="nav__link">My Account</li>
                    <li className="nav__link">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;