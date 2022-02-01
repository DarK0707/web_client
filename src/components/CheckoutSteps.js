import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Giris yap</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Giris yap</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Nakliye</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Nakliye</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Çüzdan</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Çüzdan</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Sipariş Vermek</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sipariş Vermek</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
