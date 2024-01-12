import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./products.css";
import { addToCart } from "./rtk/slices/cart-Slice";
import { useDispatch } from "react-redux";

function ProductInfo() {
    const Api_url = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`${Api_url}/${params.productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [params.productId]);

    if (loading) {
        return <p>Loading...</p>; // You can replace this with a loading spinner or another indicator
    }

    return (
        <>
            <div className="card productCard" style={{ marginTop: "4rem" }} >
                <img src={product.image} className="card-img-top" style={{ width: "20rem", margin: "auto", height: "fit-content" }} alt="product" />
                <div className="card-body" style={{ overflow: "visible", height: "fit-content" }} id={product.id}>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <h5>Category: [ {product.category} ]</h5>
                    <h3>Price: {product.price} $</h3>
                    <h4>Count: ({product.rating.count})</h4>
                    <h4>Rating: {product.rating.rate}</h4>
                </div>
                <div style={{ margin:"auto"}}>
                    <Link className="btn btn-secondary me-3"  to={'/'}>Go Back</Link>
                    <button className="btn btn-success" onClick={() => {
                        dispatch(addToCart(product));
                    }}>Add to cart</button>
                </div>

            </div>
        </>
    );
}

export default ProductInfo;
