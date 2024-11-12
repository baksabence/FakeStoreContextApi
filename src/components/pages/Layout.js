import { Outlet, Link } from "react-router-dom";
import Public from "./Public";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
            {/* A publikus tartalom linkje */}
                        <Link to="/">FakeStore</Link>
                    </li>
                    <li>
            {/* Az admin oldal linkjetartalom linkje */}
                        <Link to="/pages/Admin.js">Admin felület</Link>
                    </li>
                </ul>
            </nav>
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
