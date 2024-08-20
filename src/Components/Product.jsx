import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Context/Search';

const Product = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState(null);
    const [cate, setCate] = useState(null);
    const { searchQuery, searchvaluefunction } = useContext(Authcontext);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:3000/product?_limit=40&_page=${page}`, {
                params: {
                    category: cate, // Passing category to the API request
                    _order: order
                }
            });

            setData(res.data);
            setFilteredData(res.data); // Update filteredData with new fetched data
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Please start json-server to fetch data');
            setLoading(false);
        }
    };

    useEffect(() => {
        
        fetchData();
    }, [page, cate]); // Add cate as a dependency so the data updates when the category changes

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const results = data.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(results);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [searchQuery, data]);

    return (
        <div className="container-fluid">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className='row'>
                            <div className='col-2 d-none d-lg-block bg-white'>
                                <div className='row'>
                                    <div className='col-12 p-0'>
                                        <h2 style={{ padding: "16px 16px 12px 16px", borderBottom: "1px solid #f0f0f0", fontSize: "18px", fontWeight: "500" }}>Sports Fashion</h2>
                                        <div style={{ padding: "16px 16px 16px 16px", borderBottom: "1px solid #f0f0f0" }}>
                                            <button 
                                                style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none", background: "none", border: "none", textAlign: "left" }}
                                                onClick={() => setCate('Mens Sports Fashion')}
                                            >
                                               Men's Sports Fashion
                                            </button>
                                            <button 
                                                style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none", background: "none", border: "none", textAlign: "left" }}
                                                onClick={() => setCate('Mens Sports Footwear')}
                                            >
                                                Men's Sports Footwear
                                            </button>
                                            <button 
                                                style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none", background: "none", border: "none", textAlign: "left" }}
                                                onClick={() => setCate('')}
                                            >
                                               
                                            </button>
                                            <button 
                                                style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none", background: "none", border: "none", textAlign: "left" }}
                                                onClick={() => setCate('Sports Shoes for Men')}
                                            >
                                                Sports Shoes for Men
                                            </button>
                                            {/* Add more categories as needed */}
                                        </div>

                                        {/* Other sections remain unchanged */}

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-10 p-0'>
                                <div className="div d-flex col-12 d-block d-lg-none">
                                    <input value={searchQuery} placeholder='Search Product' className='ps-3'
                                        onChange={(e) => searchvaluefunction(e.target.value)} type="text" style={{ outline: 'none', width: "80%", height: "38px" }} />
                                    <button className='btn-dark p-2 search' style={{ height: "60%" }}> <i className="fa-solid fa-magnifying-glass pe-1"></i> Search</button>
                                </div>

                                {loading ? (
                                    <button className="btn" style={{ color: "white", background: "#E40246", position: "absolute", top: "100%", left: "50%", transform: "translate(-50%,0%)" }} type="button">
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Loading..
                                    </button>
                                ) : error ? (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                ) : (
                                    <div className='image'>
                                        <div className='products-fetch'>
                                            {filteredData.map((e) => (
                                                <div className="card c-cardS border-0" key={e.id}>
                                                    <Link to={`/Productdescription/${e.id}`}>
                                                        <img src={e.image[0]} style={{ width: "200px", height: "250px", margin: "auto" }} alt={e.title} className="card-img-top product-image" />
                                                        <div className="card-body p-0 product-price" style={{ position: "", bottom: "100%", margin: "0px 0px 0px 20px" }}>
                                                            <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>{e.title}</h5>
                                                            <div className='d-flex align-items-center mt-2 ps-0 justify-content-center justify-content-sm-start'>
                                                                <del className="original-price " style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                                                                <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>$ {e.price}</p>
                                                                <p className="discount ms-2" style={{ color: '#CCCCCC', marginBottom: "0px", fontSize: "11px", border: "1px solid #cccccc" }}>53% Off</p>
                                                            </div>
                                                            <p className="rating">
                                                                <span>&#9733;</span>
                                                                <span>&#9733;</span>
                                                                <span>&#9733;</span>
                                                                <span>&#9734;</span>
                                                                <span>&#9734;</span>
                                                                (3)
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='container-fluid w-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: "#E40246", bottom: 0 }}>
                                            <button className="Div_main form-control w-50" disabled={page === 1} onClick={() => setPage(page - 1)} style={{ margin: "20px", backgroundColor: "#E40246", color: 'white', border: "2px solid #E40246" }}>Previous</button>
                                            <span style={{ margin: "20px", color: "white", fontSize: "20px", fontWeight: "bold" }}>{page}</span>
                                            <button className='form-control w-50' disabled={page === 10} onClick={() => setPage(page + 1)} style={{ margin: "20px", backgroundColor: "#E40246", color: 'white', border: "2px solid #E40246" }}>Next</button>
                                            <button className='form-control d-none d-lg-block' onClick={() => setPage(1)} style={{ margin: "20px", backgroundColor: "#E40246", color: 'white', border: "2px solid #E40246" }}>Go to 1st page</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;