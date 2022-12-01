import './Header.scss'
import Logo from '../asset/images/logo.png'
import { NavLink } from 'react-router-dom';
function Header(){
    return(
        <header className='header'>
            <div className='header-container'>
                <img className='header-logo'src={Logo} alt="website logo"/>
            </div>
            <div className='header-container'>
                <NavLink to='/dashboard' className='header-container__nav-item'>Dashboard</NavLink>
                <NavLink to='/calendar' className='header-container__nav-item'>Economic Calendar</NavLink>
            </div>

        </header>
    )
}
export default Header;