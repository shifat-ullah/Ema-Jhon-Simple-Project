import './Header.css'
import logo from '../../images/logo.95f238a5.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='list'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/login">LogIn</a>
            </div>
        </div>
    );
};

export default Header;