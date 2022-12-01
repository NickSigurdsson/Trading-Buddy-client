import './Header.scss'
import Logo from '../asset/images/logo.png'
function Header(){
    return(
        <header className='header'>
            <img className='header-logo'src={Logo} alt="website logo"/>

        </header>
    )
}
export default Header;