import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { FaTrashAlt, FaCartPlus } from "react-icons/fa";
import { useContext } from 'react';

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card >
        <Card.Body className='border border-primary rounded'>
            <Card.Title className="fw-bold">{product.title}</Card.Title>
            <img className="rounded img-fluid my-2" height="130px"alt="" src={`../images/${product.img}.jpg`} />
            <Card.Text className='fs-5 fw-bold'>${product.price}</Card.Text>
            {productQuantity > 0 ?
                <>
                <Form as={Row}>
                        <Form.Label column="true" sm="6">Qty: {productQuantity}</Form.Label>
                          <Col sm="6">
                            <a onClick={()=>cart.removeOneFromCart(product.id)} className="btn btn-light fw-bold fs-5 btn-circle">-</a>
                            <a onClick={() => cart.addOneToCart(product.id)} className="btn btn-light fw-bold fs-5  btn-circle">+</a>
                        </Col>
                      </Form>
                      <a onClick={()=>cart.deleteFromCart(product.id)} className="text-danger fw-bold fs-4 trash"><FaTrashAlt/></a>
                </>
                :
                <a onClick={() => cart.addOneToCart(product.id)} className="text-primary fw-bold cart fs-3"><FaCartPlus/></a>
            }
        </Card.Body>
    </Card>
  )
}

export default ProductCard;