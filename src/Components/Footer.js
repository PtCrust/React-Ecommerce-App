import { Link } from "react-router-dom";
import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <ul>
                <div className="left">
                    <li><Link to={"/contactUs"}>Contact us</Link></li>
                    <li><Link to={"/"}>Home page</Link></li>
                </div>
                <div>
                    <li><a href="https://www.linkedin.com/in/tony-sameh-377472234/">LinkedIn</a></li>
                    <li><a href="tel:01008084628">Tel: 01008084628</a></li>
                </div>
            </ul>
            <h5 align="center">This page made by <code>EN./TonySameh/</code></h5>

        </div>
    );
}
export default Footer;