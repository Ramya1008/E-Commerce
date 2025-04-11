import { Link } from "react-router-dom";
function Headercmp() {
    return (
        <header className="bg-warning py-3 shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                        alt="Flipkart Logo"
                        height="40"
                        className="me-3"
                    />
                </div>
                <Link to={'/signup'} style={{ textDecoration: 'none', color: 'white' }} >
                    <button className="btn btn-danger"> SIGN UP</button>
                </Link>



            </div>
        </header>
    );
}
export default Headercmp;
