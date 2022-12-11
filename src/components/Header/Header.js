import './Header.scss'
import Logo from '../../asset/images/logo.png'
import { NavLink } from 'react-router-dom';
function Header(){
    return(
        <header className='header'>
            <div className='header-container'>
                <div>
                    <img className='header-container__logo'src={Logo} alt="website logo"/>
                </div>
            </div>
            <div className='header-container nav'>
                <NavLink to='/dashboard' className='header-container__nav-item'>Dashboard</NavLink>
                <NavLink to='/calendar' className='header-container__nav-item'>Calendar</NavLink>
            </div>
        </header>
    )
}
export default Header;