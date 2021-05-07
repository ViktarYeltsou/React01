import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${s.nav} ${s.item}`}>
            <div>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Musik</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;