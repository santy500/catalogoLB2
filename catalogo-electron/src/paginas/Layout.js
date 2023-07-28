import { Outlet, NavLink } from "react-router-dom"

const Layout = ()=>{
    return <div>
        <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/articulos">Articulos</NavLink>
            </li>
        </ul>
        </nav> 
        <Outlet />
    </div>;
}

export default Layout;