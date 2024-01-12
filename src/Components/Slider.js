import img1 from "./Images/image-1.png";
import img2 from "./Images/image-2.jpg";
import img3 from "./Images/image-3.jpg";
import Clock from "./Clock";
import "./Slider.css";

function Slider() {
    return (
        <div id="carouselExample" className="carousel carousel-dark slide pt-5">
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img src={img1} className="d-block vh-height" style={{width:"150%"}} alt="..." />
                    <div style={{position:"absolute",top:"5em",margin:"50px", marginLeft:"150px"}}>{<Clock /> }</div>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100 vh-height" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100 vh-height" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;