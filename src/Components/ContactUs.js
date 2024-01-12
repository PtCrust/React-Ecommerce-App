import img1 from "./Images/contactus.jpg";
import "./about.css";
function ContactUs() {
    return (
        <div style={{ height: "70vh" , marginTop:"4rem"}}>
            <div className="container">
                <h5 className="display-4 text-end text-white">Contact Us Page</h5>
                <div className="about">
                    <img src={img1} style={{ height: "350px", borderRadius: "50px" }} alt="..." />
                    <div className="contactUS">
                        <ul className="ul text-white">
                            <li>Phone number: <a href="tel:01008084628">01008084628</a></li>
                            <li>Whatsapp: <a href="tel:01205131600">01205131600</a></li>
                            <li>Linkedin: <a href="https://www.linkedin.com/in/tony-sameh-377472234/" rel="noreferrer" target="_blank">https://www.linkedin.com/in/tony-sameh-377472234/</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;