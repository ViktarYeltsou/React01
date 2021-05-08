import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`${s.nav} ${s.item}`}>
            <div>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/musik' activeClassName={s.active}>Musik</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;