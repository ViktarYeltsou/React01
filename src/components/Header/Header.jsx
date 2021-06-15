import s from './Header.module.css'
import logo from './Img/greyCoders.png'
const Header = () => {
    return (
        <header className={s.header}>
            <img alt='' src={logo}/>
        </header>
    );
}
export default Header;