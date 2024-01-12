import Products from "./Products"
import { useEffect, useState } from "react";


function ProductList() {

    const Api_url = "https://fakestoreapi.com/products";
    // const Api_url = "http://localhost:9000";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);



    const allProducts = () => {
        fetch(`${Api_url}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    };

    const categoryProducts = () => {
        fetch(`${Api_url}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    };

    useEffect(() => {
        allProducts();
        categoryProducts();
    }, []);

    const getCategoryProducts = (props) => {
        fetch(`${Api_url}/category/${props.cat}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center text-white p-3">STORE</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>

                    <button className="btn btn-primary m-2" onClick={() => {
                        allProducts();
                    }}>All</button>
                    {
                        categories.map((cat) => {
                            return (
                                <button key={cat} className="btn btn-secondary m-2" style={{ textTransform: "capitalize" ,fontWeight:"bolder" }} onClick={() => { getCategoryProducts({ cat }) }}>{cat}</button>
                            );
                        })
                    }
                </div>
                {products.map(product => {
                    return (
                        <div key={product.id} style={{width:"auto"}}>
                            <Products product={product} />
                        </div>
                    );
                })}
            </div>

        </div>
    );
}


export default ProductList;