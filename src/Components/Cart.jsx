import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row, Button, FormControl, Pagination } from 'react-bootstrap';
import { toast, ToastContainer, Zoom } from 'react-toastify';

const Cart = () => {
  const [adddata, setadddata] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items you want per page

  const fetchData = () => {
  axios.get("http://localhost:3000/Cart")
    .then((res) => {
      setadddata(res.data);
      const initialQuantities = {};
      res.data.forEach(item => {
        initialQuantities[item.id] = item.quantity;
      });
      setQuantities(initialQuantities);
    })
    .catch((err) => { console.log(err) });
};


  useEffect(() => {
    fetchData();
  }, []);

  const removeItem = (id) => {
    axios.delete(`http://localhost:3000/Cart/${id}`)
      .then((res) => {

         toast.success('Product Delete successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Zoom,
        });
        setadddata(adddata.filter(item => item.id !== id));
        const updatedQuantities = { ...quantities };
        delete updatedQuantities[id];
        setQuantities(updatedQuantities);
        
      })
      .catch((err) => { console.log(err) });
  };

  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
  
    const updatedQuantities = { ...quantities, [id]: newQuantity };
    setQuantities(updatedQuantities);
  
    const updatedItem = adddata.find(item => item.id === id);
    if (updatedItem) {
      axios.put(`http://localhost:3000/Cart/${id}`, {
        ...updatedItem,
        quantity: newQuantity
      })
      .then((res) => {
        toast.success('Product quantity updated successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Zoom,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    }
  };
  

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = adddata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(adddata.length / itemsPerPage);

  return (
    <div>
      
     
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", position: "relative", top: "0px", left: "0px", margin: "0px 50px" }}>
        {paginatedData.map((e) => (
          <div className="card c-cardS border-0 row" key={e.id}>
            <Container className="mt-3">
              <Card>
                <Row className="g-0">
                  <Col md={2} className="d-flex align-items-center">
                    <Card.Img src={e.image[0]} alt="Product Image" className="p-2" />
                  </Col>
                  <Col md={5} className="d-flex align-items-center">
                    <Card.Body>
                      <Card.Title className="mb-1">{e.title}</Card.Title>
                      <Card.Text className="mb-0">Rs. {e.price}</Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={3} className="d-flex align-items-center">
                    <div>
                      <p className="mb-1">Your Order</p>
                      <p className="mb-1">
                        Items: 
                        <FormControl 
                          type="number" 
                          min="1" 
                          value={quantities[e.id] || 1} 
                          onChange={(ev) => handleQuantityChange(e.id, parseInt(ev.target.value))} 
                          className="ms-2"
                          style={{ width: "50px", display: "inline-block" }}
                        />
                      </p>
                      <p className="mb-2">You Pay: <strong>Rs. {e.price * quantities[e.id]}</strong></p>
                      <p className="mb-2">(Including delivery and other charges. <a href="#">View Cart</a> for details)</p>
                      <div className="d-flex">
                        <Button variant="danger" className="me-2">PROCEED TO CHECKOUT</Button>
                        <Button variant="secondary">VIEW CART</Button>
                      </div>
                    </div>
                  </Col>
                  <Col className='d-flex align-items-center justify-content-end me-4'>
                    <Button  style={{backgroundColor:"#E40246",border:"1px solid #E40246"}} onClick={() => removeItem(e.id)}>Remove</Button>
                  </Col>
                </Row>
              </Card>
            </Container>
          </div>
        ))}
      </div>

      <Pagination className="justify-content-center mt-4">
        {[...Array(totalPages).keys()].map(number => (
          <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => handlePageChange(number + 1)}>
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <ToastContainer />

    </div>
    
  );
};

export default Cart;
