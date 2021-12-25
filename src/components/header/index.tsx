import { withRouter } from "react-router-dom";
import { Navbar, Row, NavbarBrand } from "reactstrap";

const Header = (props: any) => {
    return (
        <Row>
            <Navbar
                color="success"
                className="p-2"
                expand="md"
                light
                >
                <NavbarBrand href="/">
                    <p color="white"> MAJOO - APLIKASI WIRAUSAHA</p>
                </NavbarBrand>
            </Navbar>
        </Row>
    );
}

export default withRouter(Header);