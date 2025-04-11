import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"

function NavBarcmp() {
    const [count, setCount] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCount(json))

    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <NavLink to={'/products'} className="nav-link text-capitalize px-3"
                                    style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                                    All Products
                                </NavLink>
                            </li>
                            {count.map((value) => (
                                <li className="nav-item" key={value}>
                                    <NavLink className="nav-link text-capitalize px-3" to={`/${value}`}
                                        style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                                        {value}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBarcmp;