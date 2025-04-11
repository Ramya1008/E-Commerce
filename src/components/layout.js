import Headercmp from "./header"
import Footercmp from "./footer"
import { Outlet, useLocation } from "react-router-dom";

import NavBarcmp from "./navbar";

function Layoutcmp() {
    const location = useLocation();
    const hideNav =["/","/signup"]
    const hideNavbar = hideNav.includes(location.pathname);
    return (
        <>
            <Headercmp />
            {!hideNavbar && <NavBarcmp />}
            <section>
                <article>
                    <Outlet />
                </article>
            </section>
            <Footercmp />
        </>
    )
}
export default Layoutcmp
