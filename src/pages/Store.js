import { Row, Col } from 'react-bootstrap';
import { productArray } from '../productStore';

function Store() {
    return (
        <div>
            <h1 align='center' className='p-3'>
                Welcome, get Shopping!
            </h1>
            <Row xs={1} md={3} className='g-4'>
                {productArray.map((product, index) => (
                    <Col align='center' key={index}>
                        <h1>{product.name}</h1>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Store;