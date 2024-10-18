import {Link} from "react-router-dom";

const Layout = () => {
    return (
        <nav>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/post">Post User</Link>
            </li>
            <li>
                <Link to = "/get">Get All User</Link>
            </li>
        </nav>
    )
};

export default Layout;