import './Header.css'
import logo from '../../images/logo.95f238a5.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='list'>
                <Link to="/">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manageInventory">Manage Inventory</Link>
                <Link to="/login">LogIn</Link>
            </div>
        </div>
    );
};

export default Header;