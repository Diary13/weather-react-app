import '../styles/Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'} className={(nav) => (nav.isActive ? "active" : "")}>
                        Weather
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/alert'} className={(nav) => (nav.isActive ? "active" : "")}>
                        Alert
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/map'} className={(nav) => (nav.isActive ? "active" : "")}>
                    Map
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to={'/Satellite'} className={(nav) => (nav.isActive ? "active" : "")}>
                    Satellite
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/News'} className={(nav) => (nav.isActive ? "active" : "")}>
                    News
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;