import { Row, Col, Container } from 'react-bootstrap';
import { productsArray } from '../productStore';
import ProductCard from '../components/ProductCard';

function Store() {
    return (
        <>
            <h1 align="center" className='m-2 p-3 fw-bold'>Welcome</h1>
            <Container>
                <Row xs={1} md={5} className="justify-content-center">
                {productsArray.map((product, idx)=>(
                    <Col align="center" key={idx} className="p-2 m-2 rounded shadow shadow-md">
                        <ProductCard product={ product } />
                    </Col>
                ))}
            </Row>
            </Container>
        </>       
    )
  }
  
  export default  Store