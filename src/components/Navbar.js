import {Button, Container, Navbar, Modal} from 'react-bootstrap';

function NavComponent() {
    return (
        <Navbar expand='sm'>
            <Navbar.Brand href='/'>
                E-Commerce Store
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button>
                    Cart 0 items
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavComponent;