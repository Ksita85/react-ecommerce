import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { getProductData } from "../productStore";

function CartItem(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <Container>
                <Row>
                    <Col sm="2">
                        <img className="rounded-circle p-1 m-1" height="80px"alt="" src={`../images/${productData.img}.jpg`} />
                    </Col>
                    <Col className="rounded-circle p-2 ms-4 mx-auto" sm="7">
                        <h5 className="fw-bold">{productData.title}</h5>
                        <p>Qty: {quantity} </p>
                        <p className="fw-bold">Total Item: $ {(quantity * productData.price).toFixed(2)}</p>
                        
                    </Col>
                    <Col sm="2">
                    <a onClick={() => cart.deleteFromCart(id)} className="text-danger fw-bold fs-5 trash"><FaTrashAlt/></a>
                    </Col>
                </Row>
                
            </Container>
            <hr></hr>
        </>
  )
}

export default CartItem