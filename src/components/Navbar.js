import { NavLink } from 'react-router-dom';
import Menu from "./Navbar.module.css";

function Navbar() {

    const activeStyle = {
        border: '1px solid white'
    };

    return (
        <div>
            <ul className={ Menu.menubar }>
                <li className={ Menu.menu }><NavLink to="/" style={ ({ isActive }) => isActive? activeStyle: undefined} className={ Menu.word }>메인</NavLink></li>
                <li className={ Menu.menu }><NavLink to="/date" style={ ({ isActive }) => isActive? activeStyle: undefined} className={ Menu.word }>날짜 검색</NavLink></li>
                <li className={ Menu.menu }><NavLink to="/title" style={ ({ isActive }) => isActive? activeStyle: undefined} className={ Menu.word }>제목 검색</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;