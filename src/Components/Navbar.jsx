import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Authcontext } from '../Context/Search'

const Navbar = () => {
   const [page, setpage] = useState(0)
    const {searchQuery,searchvaluefunction}=useContext(Authcontext)
    return (<>
        <div className="container-fluid p-0">
            <div className="container-fluid p-1 d-none d-xl-block" style={{backgroundColor:"#C7053D",display:"flex",alignItems:"center",lineHeight:"10px",paddingTop:'10px',fontSize:"12px",color:"white",height:"25px", justifyContent:"space-between"}}>
                <div className="p-0 nav-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">
                                    <p>Brand Waali Quality, Bazaar Waali Deal!</p>
                                </div>
                                <div className="col-8">
                                    <ul className='d-flex justify-content-between list-unstyled'>
                                        <li>Impact@Snapdeal</li>
                                        <li>Help Center</li>
                                        <li>Sell On Snapdeal</li>
                                        <li>Download App</li>
                                        <li>Donate For Elderly</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='container-fluid pt-2 pb-2' style={{ backgroundColor: "#E40246",display:'flex',justifyContent:"center",alignItems:"center"}}>
            <div className="container m-0">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <div className='col-4 col-lg-2'>
                       
                        <NavLink to='/'>
                        <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" className='img-fluid'></img>
                        </NavLink>
                        </div>
                        <div className='d-lg-none'><i class="bi bi-distribute-vertical" data-bs-target="#offcanvas" data-bs-toggle="offcanvas" style={{color:"white", fontSize:"25px"}}></i></div>
                        
                        <div className="div d-flex col-7 d-none d-lg-block">
                            <input  value={searchQuery}
                                        onChange={(e) => searchvaluefunction(e.target.value)} type="text" style={{ outline: 'none', width:"80%", height:"38px"}} />
                            <button className='btn-dark p-2 search' style={{height:"60%"}}> <i className="fa-solid fa-magnifying-glass pe-1"></i> Search</button>
                        </div>
                        <div className='col-3 d-none d-lg-block'>

                   <span className='d-flex justify-content-end align-items-center'>
                   <NavLink style={{ color: "white" }} to='/Cart' >Cart <i className="fa-solid fa-cart-shopping text-white p-1 "></i><span class="badge bg-secondary">{page}</span></NavLink>
                            <NavLink to='/Signin' className="text-light sign_in" style={{textAlign:"center", marginLeft:"10px", padding:"20px"}}>Signin <i className="fa-regular fa-user p-1"></i>
                            
                            
                            <div className='form-reg'>
                                 <p className='mt-3' style={{fontSize:'15px'}}><i className="fa-regular fa-user m-1" style={{fontSize:'15px'}}></i>Your Acount</p>
                                 <p style={{fontSize:'15px'}}  ><i className="fa-regular fa-cart-plus m-1" style={{fontSize:'15px'}}></i>Your Order's</p>
                                 <hr />
                                 <div className="login">
                                    <p>If you are a new user</p>
                                    <p>Register</p>
                                 <button style={{color:'white',backgroundColor:'#E40246',width:'100%',padding:"10px 0px",position:"relative",top:"-10px"}}>Login</button>

                                 </div>
                            </div>
                            </NavLink>
                   </span>

                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-start" style={{backgroundColor:"#E40246", color:"white" }} tabindex="-1" id="offcanvas"   aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title bg-dark" id="offcanvasLabel">
    <NavLink to='/'>
                        <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" className='img-fluid'></img>
                        </NavLink>
    </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  
  <div className='col-12 d-block d-lg-block bg-white'>
                                <div className='row'>
                                    <div className='col-12 p-0'>
                                        <h2 style={{ padding: "16px 16px 12px 16px", borderBottom: "1px solid #f0f0f0", fontSize: "18px", fontWeight: "500" }}>Filter</h2>
                                        <div style={{ padding: "16px 16px 16px 16px", borderBottom: "1px solid #f0f0f0" }}>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Sports Shoes for Men</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Casual Shoes For Men</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Slippers & Flip Flops</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Sandals & Floaters</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Formal Shoes</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Loafers</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Sneakers</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Ethnic Footwear</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Shoe Accessories</Link>



                                            <Link style={{ fontSize: "14px", color: "#212121", fontWeight: "600", padding: "5px 0px", display: "block", textDecoration: "none" }}>Clothing</Link>
                                            <div style={{ padding: "16px 16px 16px 16px", borderBottom: "1px solid #f0f0f0" }}>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>T-Shirts & Polos</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Shirts</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Jeans</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Trousers & Chinos</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Innerwear & Sleepwear</Link>

                                            <h2 style={{ padding: "16px 16px 12px 16px", borderBottom: "1px solid #f0f0f0", fontSize: "18px", fontWeight: "500" }}>Bags & Luggage</h2>
                                        <div style={{ padding: "16px 16px 16px 16px", borderBottom: "1px solid #f0f0f0" }}>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Backpacks</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Laptop Bags</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Hiking Bags</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Luggage & Suitcases</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}></Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Loafers</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Sneakers</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Ethnic Footwear</Link>
                                            <Link style={{ fontSize: "14px", color: "#878787", padding: "5px 0px", display: "block", textDecoration: "none" }}>Shoe Accessories</Link>

                                          </div>
                                            

                                        
                                            </div>
                                            
                                            </div>

                                        <div style={{ padding: "16px 16px 16px 16px", borderBottom: "1px solid #f0f0f0" }}>
                                            <div style={{ fontSize: "14px", fontWeight: "600", padding: "5px 0px", display: "block", textDecoration: "none" }}>PRICE</div>
                                            <input type="range" className='w-100'></input>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <div className='row d-flex justify-content-between'>
                                                        <select className='col-4 product-option'>
                                                            <option>Min</option>
                                                            <option>9,99</option>
                                                            <option>1,999</option>
                                                            <option>2,999</option>
                                                            <option>3,999</option>
                                                            <option>4,499</option>
                                                        </select>
                                                        <span className='col-3'>To</span>
                                                        <select className='col-5 product-option'>
                                                            <option>4,999</option>
                                                            <option>5,999</option>
                                                            <option>6,499</option>
                                                            <option>7,999</option>
                                                            <option>8,999</option>
                                                            <option>9,999</option>
                                                            <option>50,999</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ padding: "16px 16px 16px 16px", borderBottom: "1px solid #f0f0f0" }}>
                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ width: "50px", border: "1px solid" }}></input><span>AGRIBOT</span></div>
                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ width: "50px" }}></input><span>AIElectro</span></div>
                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ width: "50px" }}></input><span>BLR2</span></div>
                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ width: "50px" }}></input><span>CLASSITOWILLA</span></div>
                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ width: "50px" }}></input><span>DRwilla</span></div>
                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ width: "50px" }}></input><span>Dainty</span></div>
                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ width: "50px" }}></input><span>Ephemeral</span></div>
                                        </div>
                                        <div style={{ padding: "0px 16px 0px 16px", borderBottom: "1px solid #f0f0f0", borderTop: "1px solid #f0f0f0" }}>
                                            <div className="accordion" id="accordionExample">
                                                <div>
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <p className="discounte" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            DISCOUNT
                                                        </p>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ border: "1px solid" }}></input><span className='ps-3'>30% or more</span></div>
                                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ border: "1px solid" }}></input><span className='ps-3'>20% or more</span></div>
                                                            <div style={{ color: "#212121", fontSize: "14px", display: "flex", alignItems: "center", padding: "5px 0px" }}><input type="checkbox" style={{ border: "1px solid" }}></input><span className='ps-3'>10% or more</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

  </div>
</div>
        </div>
    </>
    )
}

export default Navbar


