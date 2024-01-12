import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Image } from "react-bootstrap";
import { clearCart, deleteFromCart } from "./Components/rtk/slices/cart-Slice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


function Cart() {

    const cartProducts = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cartProducts.reduce((acc, product) => {
        acc += product.price * product.count;
        return acc;
    }, 0);

    return (
        <Container style={{ marginTop: "4rem" }}>
            <h1 className="display-3  w-25 m-auto text-white">Carts</h1>
            <h1 className="display-6 text-white" style={{ display: "inline-block" , width:"85%" }}>Total Price: <b>{totalPrice.toFixed(2)} $</b></h1>
            <Button  className="btn-warning" onClick={() => {
                dispatch(clearCart())
            }}>Clear All Products</Button>
            <table className="table table-striped" style={{marginBottom:"1rem"}}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartProducts.map((product) => (

                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.title}</td>
                                <td><Image src={product.image} width={"100"} alt={product.title} /></td>
                                <td>{product.price} $</td>
                                <td>x{product.count}</td>
                                <td><Button variant="danger" onClick={() => {
                                    dispatch(deleteFromCart(product));
                                }}>Delete</Button></td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
            <div style={{width:"25%" , margin:"2rem auto" ,display:"flex" , marginBottom:"19%",justifyContent:"space-around"}}>
            <Link to={"/"} className="btn btn-secondary">Back</Link>
            <Button className="btn-success" onClick={()=>{
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Your Purchase has been Confirmed",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }}>Confirm</Button>
            </div>
            
        </Container>
    )
}

export default Cart;