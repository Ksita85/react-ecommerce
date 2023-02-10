import { Button, Navbar, Modal, ModalHeader, ModalTitle, ModalBody, Badge } from 'react-bootstrap';
import { useState, useContext} from 'react';
import { CartContext } from '../CartContext';
import CartItem from './CartItem';
import { FaShoppingCart } from "react-icons/fa";

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {

      return response.json();

    }).then((response) => {
      
      if (response.url) {
        window.location.assign(response.url); // Forwarding user to Stripe
      }
    });
  }

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <Navbar expand="sm" className="p-3 border-bottom ">
      <Navbar.Brand href="/" className='fs-3 fw-bold text-primary'>Coffee Shop</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow} className="btn btn-link btn-light fw-bold"><FaShoppingCart className='fs-1'/></Button><Badge pill bg="danger"> {productCount} </Badge>
            </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle className="fw-bold">Shopping Cart</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {productCount > 0 ?
            <>
              {cart.items.map((currentProduct, idx) => (
                <CartItem key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartItem>
              ))}
              <h3 className="text-center fw-bold">Total: $ {cart.getTotalCost().toFixed(2)}</h3>
              <Button onClick={checkout} className="my-4 d-block m-auto" variant="primary">Purchase</Button>
            </>
            :
            <h6>Your Cart is Empty</h6>
          }
        </ModalBody>
      </Modal>
    </>
    
  )
}

export default NavbarComponent
