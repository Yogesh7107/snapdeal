import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footerpage from './Footerpage';


const Productdescription = () => {
  const [singlePageData, setSinglePageData] = useState({ image: [] });
  const [activeIndex, setActiveIndex] = useState(0);
  const params = useParams();

  const descFunction = () => {
    axios.get(`http://localhost:3000/product/${params.id}`)
      .then((res) => {
        const data = res.data;
        console.log('Fetched data:', data); // Log fetched data
        if (Array.isArray(data.image)) {
          setSinglePageData(data);
        } else {
          setSinglePageData({ ...data, image: [] });
        }
      })
      .catch((err) => {
        console.error('Error fetching product data:', err);
      });
  };

  // const addtocart = () => {
    
  //   const initilize = {
      
  //     id: singlePageData.id,
  //     title: singlePageData.title,
  //     image: singlePageData.image,
  //     price: singlePageData.price
  //   };

  //   axios.post("http://localhost:3000/Cart", initilize)
  //     .then((res) => { toast.success('Product Add successfully! ', {
  //       position: "top-right", // Use a string for position
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       transition: Zoom, // Optional: Add transition effect
  //     });
  //       console.log(res.data); })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
  const addtocart = () => {
    const initilize = {
      id: singlePageData.id,
      title: singlePageData.title,
      image: singlePageData.image,
      price: singlePageData.price,
      quantity: 1 // Initialize with quantity 1
    };
  
    axios.get("http://localhost:3000/Cart")
      .then((res) => {
        const cartData = res.data;
        const existingProduct = cartData.find(item => item.id === singlePageData.id);
  
        if (existingProduct) {
          // Product already exists in cart, update quantity
          axios.put(`http://localhost:3000/Cart/${existingProduct.id}`, {
            ...existingProduct,
            quantity: existingProduct.quantity + 1
          })
          .then((res) => {
            toast.success('Product Added successfully!', {
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
        } else {
          // Product does not exist in cart, add new entry
          axios.post("http://localhost:3000/Cart", initilize)
            .then((res) => {
              toast.success('Product added to cart successfully!', {
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
      })
      .catch((err) => {
        console.error('Error fetching cart data:', err);
      });
  };
  

  useEffect(() => {
    descFunction();
  }, [params.id]);

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  if (!singlePageData) return null;

  const images = singlePageData.image || [];

  console.log('Single Page Data:', singlePageData); // Log state data

  return (
    <div>
      <div className="container-fluid" style={{ width: "100%"}}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="slideshow-container">
                <div id="lens"></div>
                <div id="result"></div>
                <div className="row mt-0 mt-lg-5" style={{marginRight:"11px"}}>
                  <div className='col-12 p-0 p-lg-2'>
                    {images.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        className={`slideshow-thumbnails ${index === activeIndex ? 'active' : ''} `}
                        onClick={() => changeSlide(index)}
                        alt="" style={{border:'1px solid #E40246'}}
                        
                      />
                    ))}
                  </div>
                </div>
                <div id="slideshow-items-container">
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      className={`slideshow-items ${index === activeIndex ? 'active' : ''} img-fluid`}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <h4 style={{ fontSize: "20px" }}>{singlePageData.title}</h4>
              <p>Rating: <span>★★★★★</span> (5.0)</p>
              <span> MRP</span>
              <del className="old-price"> Rs.{singlePageData.price}</del>
              <h5 className="price" style={{ color: '#FF2441' }}>Rs. {singlePageData.price} </h5>
              <p><strong>70% OFF</strong></p>

              <div className="mb-3" style={{ display: "flex", alignItems:"center"}}>
                <strong>Product Image: </strong> 
                <img   className='ms-3' src={singlePageData.image[0]} width={"15%"} alt="Lens Color" />
              </div>

              <div className="mb-3">
                <strong>Size: </strong>Medium
              </div>
              <div className="mb-3">
                <strong>Pack Of: </strong>1
              </div>
              <Link  onClick={addtocart} className="btn btn-dark border-5 mr-2 me-2">Add to Cart</Link>
              <button className="btn border-5" style={{ color: "white", backgroundColor: "#E40246" }}>Buy Now</button>
              <p className="mt-4">
                Delivery: Generally delivered in 6 - 10 days
              </p>
              <p className="text-muted">
                7 Days Easy Returns. We assure easy return/exchange of purchased items within 7 days of delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footerpage/>
    </div>
  );
};

export default Productdescription;
