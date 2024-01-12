import { Link } from "react-router-dom";
import "./products.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./rtk/slices/cart-Slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

function Products(props) {
    const dispatch = useDispatch();
    return (
        <div className="card productCard  bg-opacity-50" style={{ width: "15rem", display: "flex" }}>
            <img src={props.product.image} className="card-img-top" alt="sora" />
            <button className="btn btn-warning m-2 position-absolute" style={{right:"0"}} onClick={() => {
                    dispatch(addToCart(props.product))
                }}><FontAwesomeIcon  icon={faCartPlus} />
                </button>
            <div className="card-body" id={props.product.id}>
                <h5 className="card-title">{props.product.title}</h5>
                <h4 className="text-center"><b>{props.product.price} $</b></h4>
                <p className="card-text">{props.product.description}</p>
            </div>
            <div className="buttonn">
                <button className="btn btn-primary w-50" onClick={() => {
                    let card = document.getElementById(props.product.id);
                    if (card.style.height === "fit-content") {
                        card.style.height = "200px";
                        card.style.overflow = "hidden";

                    } else {
                        card.style.height = "fit-content";
                        card.style.overflow = "auto";
                    }
                }} ><FontAwesomeIcon icon={faArrowDownWideShort} /></button>
                <Link className="btn btn-secondary w-50" to={`/detailes/${props.product.id}`}>View</Link>

            </div>
        </div>

    );
}

export default Products;