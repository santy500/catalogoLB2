import { Outlet, NavLink } from "react-router-dom"

const Layout = ()=>{
    return <div>
        <nav>
        <ul>
            <li>
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/crud">Editar Productos</NavLink>
            </li>
        </ul>
        </nav> 
        <Outlet />
    </div>;
}

export default Layout;