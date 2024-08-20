import React, { useState } from 'react'
import { Button, Form, OverlayTrigger, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

function Payment() {
    const [cvcVisible, setCvcVisible] = useState(false);

    const handleCvcClick = () => {
      setCvcVisible(!cvcVisible);
    };
  
    return (
      <div className="container">
        <div id="Checkout" className="inline">
          <h1>Pay Invoice</h1>
          <div className="card-row">
            <span className="visa"></span>
            <span className="mastercard"></span>
            <span className="amex"></span>
            <span className="discover"></span>
          </div>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="PaymentAmount">Payment amount</Form.Label>
              <div className="amount-placeholder">
                <span>$</span>
                <span>500.00</span>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="NameOnCard">Name on card</Form.Label>
              <Form.Control id="NameOnCard" type="text" maxLength="255" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="CreditCardNumber">Card number</Form.Label>
              <Form.Control id="CreditCardNumber" className="card-image" type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="ExpiryDate">Expiry date</Form.Label>
              <Form.Control id="ExpiryDate" type="text" placeholder="MM / YY" maxLength="7" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="SecurityCode">Security code</Form.Label>
              <div className="input-container">
                <Form.Control id="SecurityCode" type="text" />
                <i id="cvc" className="fa fa-question-circle" onClick={handleCvcClick}></i>
              </div>
              <div className={`cvc-preview-container two-card ${cvcVisible ? '' : 'hide'}`}>
                <div className="amex-cvc-preview"></div>
                <div className="visa-mc-dis-cvc-preview"></div>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="ZIPCode">ZIP/Postal code</Form.Label>
              <div className="input-container">
                <Form.Control id="ZIPCode" type="text" maxLength="10" />
                <OverlayTrigger
                  trigger="focus"
                  placement="left"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        Enter the ZIP/Postal code for your credit card billing address.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <i className="fa fa-question-circle" role="button"></i>
                </OverlayTrigger>
              </div>
            </Form.Group>
            <Button id="PayButton" className="btn btn-block btn-success submit-button" type="submit">
              <span className="submit-button-lock"></span>
              <span className="align-middle">Pay $500.00</span>
            </Button>
          </Form>
        </div>
      </div>
    );
  };
  

export default Payment