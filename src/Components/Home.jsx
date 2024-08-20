import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import Footerpage from './Footerpage';

function Home() {
  



  return (
    <div>
      <div className='container-fluid ps-5 pe-5 ms-5 me-5'>
        <div className='row'>
          <div className='col-2 p-0 mt-3'>
            <div className='p-2 ps-3' style={{ backgroundColor: "white", fontSize: "12px" }}>
              <p className='p-0 pb-0 mb-0'>Top Categories</p>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <li className=' pt-2 pb-2'>
                  <div className='nav-link1'><div style={{ display: "flex", alignItems: "center" }}><img src="https://n1.sdlcdn.com/imgs/k/v/x/Men_sitenavigation-b972a.jpg" style={{ borderRadius: "50%", width: "20%" }} alt="" />
                    <Link to='' className='ps-2 link_y' style={{ color: "#666666" }}>Men's Fashion</Link></div>
                    <div className='nav-link-vice1'>
                      <div className='d-flex w-100'>
                        <div className='w-25 pe-0' style={{ borderRight: "1px solid #666666", color: "#666666" }}>
                          <Link className='link_y'><h6 style={{ color: "black" }}>Footwear</h6></Link>
                          <ul className='ps-0'>
                            <NavLink to='/Product' className='link_y'><li>Sports Shoes</li></NavLink>
                            <Link  className='link_y'><li>Casual Shoes</li>
                            </Link>
                            <Link className='link_y'><li>Slippers & Flip Flops</li></Link>
                            <Link className='link_y'><li>Sandals & Floaters</li></Link>
                            <Link className='link_y'><li>Formal Shoes</li></Link>
                            <Link className='link_y'><li>Loafers</li></Link>
                            <Link className='link_y'><li>Sneakers</li></Link>
                            <Link className='link_y'><li>Ethnic Footwear</li></Link>
                            <Link className='link_y'><li>Shoe Accessories</li></Link>
                            <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>
                          </ul>
                          <div className='mt-3' style={{ borderTop: "1px solid #666666", color: "#666666" }}>
                            <ul className='mt-4 ps-0'>

                              <Link className='link_y'><h6 style={{ color: "black" }}>Bags & Luggage</h6></Link>
                              <Link className='link_y'><li>Backpacks</li></Link>
                              <Link className='link_y'><li>Laptop Bags</li></Link>
                              <Link className='link_y'><li>Hiking Bags</li></Link>
                              <Link className='link_y'><li>Luggage & Suitcases</li></Link>
                              <Link className='link_y'><li>Travel Accessories</li></Link>
                              <Link className='link_y'><li>Office Bag</li></Link>
                              <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>
                            </ul>
                          </div>
                        </div>
                        <div style={{ borderRight: "1px solid #666666", color: "#666666" }} className='pe-5' >
                          <ul>
                            <Link className='link_y'><h6 style={{ color: "black" }}>Clothing</h6></Link>
                            <Link className='link_y'><li>T-Shirts & Polos</li></Link>
                            <Link className='link_y'><li>Shirts</li></Link>
                            <Link className='link_y'><li>Jeans</li></Link>
                            <Link className='link_y'><li>Trousers & Chinos</li></Link>
                            <Link className='link_y'><li>Innerwear & Sleepwear</li></Link>
                            <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>
                          </ul>
                          <div className='mt-3' style={{ borderTop: "1px solid #666666", color: "#666666" }}>
                            <ul className='pt-3'>
                              <Link className='link_y'><h6 style={{ color: "black" }}>Winter Wear</h6></Link>
                              <Link className='link_y'><li>Jackets</li></Link>
                              <Link className='link_y'><li>Sweatshirts</li></Link>
                              <Link className='link_y'><li>Sweaters</li></Link>
                              <Link className='link_y'><li>Thermals</li></Link>
                            </ul>
                          </div>
                          <div className='mb-3 mt-4' style={{ borderTop: "1px solid #666666", color: "#666666" }}>
                            <ul className='pt-4'>
                              <Link className='link_y'><h6 style={{ color: "black" }}>Sportswear</h6></Link>
                              <Link className='link_y'><li>T-Shirts & Polos</li></Link>
                              <Link className='link_y'><li>Trackpants & Tracksuits</li></Link>
                              <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>
                            </ul>
                            <div>
                              <ul className='mt-3 pt-3' style={{ borderTop: "1px solid #666666", color: "#666666" }}>
                                <Link className='link_y'><h6 style={{ color: "black" }}>Eye Wear</h6></Link>
                                <Link className='link_y'><li>Sun Glasses</li></Link>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div style={{ color: "#666666" }}>
                          <ul>
                            <Link className='link_y'><h6 style={{ color: "black" }}>Men's Grooming</h6></Link>
                            <Link className='link_y'><li>Shaving Creams & Gels</li></Link>
                            <NavLink className='link_y' style={{ color: "#24A8ED" }}><li>View all</li></NavLink>
                            <div className='mt-3 pt-3' style={{ borderTop: "1px solid #666666" }}>
                              <Link className='link_y'><h6 style={{ color: "black" }}>Watches</h6></Link>
                            </div>
                            <div className='mt-3 pt-3' style={{ borderTop: "1px solid #666666" }}>
                              <Link className='link_y'><h6 style={{ color: "black" }}>Jewellery & Cufflinks</h6></Link>
                            </div>
                          </ul>

                          <div className='mt-3 pt-3' style={{ borderTop: "1px solid #666666" }}>
                            <ul className='mb-3'>
                              <Link className='link_y'><h6 style={{ color: "black" }}>Accessories</h6></Link>
                              <Link className='link_y'><li>Wallets</li></Link>
                              <Link className='link_y'><li>Bets</li></Link>
                              <Link className='link_y'><li>Hats & Caps</li></Link>
                              <Link className='link_y'><li>Gift Sets</li></Link>
                              <Link className='link_y'><li>Neckties & Cravats</li></Link>
                              <Link className='link_y'><li>Card Holders</li></Link>
                              <Link className='link_y'><li>Keychains</li></Link>
                              <Link className='link_y'><li>Suspenders</li></Link>
                              <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>
                            </ul>
                          </div>

                          <div style={{ borderTop: "1px solid #666666" }}>
                            <ul className='pt-3 mb-3'>
                              <Link className='link_y'><h6 style={{ color: "black" }}>Fragrances</h6></Link>
                              <Link className='link_y'><li>perfumes</li></Link>
                              <Link className='link_y'><li>Deodorants</li></Link>
                              <Link className='link_y'><li>Attars (Non-Alcoholic)</li></Link>
                              <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>
                            </ul>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </li>
                <li className=' pt-2 pb-2'><div className='nav-link2'><div style={{ display: "flex", alignItems: "center" }}><img src="https://n1.sdlcdn.com/imgs/k/v/x/WoMen_sitenav-5a8ca.jpg" style={{ borderRadius: "50% 50%", width: "20%" }} alt="" />
                  <Link to='' className='ps-2 link_y' style={{ color: "#666666" }}>Women's Fashion</Link></div>
                  <div className='nav-link-vice2'>
                    <div className='d-flex'>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Ethnic Wear</h6></Link>
                          <Link className='link_y'><li>Sarees</li></Link>
                          <Link className='link_y'><li>Kurtas & Kurtis</li></Link>
                          <Link className='link_y'><li>Lehengas</li></Link>
                          <Link className='link_y'><li>Salwar Suits</li></Link>
                          <Link className='link_y'><li>Salwars & Leggings</li></Link>
                          <Link className='link_y'><li>Blouses & Petticoats</li></Link>
                          <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>

                        </ul>
                        <div>
                          <ul>
                            <Link className='link_y'><h6>Footwear</h6></Link>
                            <Link className='link_y' ><li>Heels</li></Link>
                            <Link className='link_y'><li>Flats & Sandals</li></Link>
                            <Link className='link_y'><li>Slippers & Flip Flops</li></Link>
                            <Link className='link_y'><li>Ballerinas</li></Link>
                            <Link className='link_y'><li>Casual Shoes</li></Link>
                            <Link className='link_y'><li>Sports Shoes</li></Link>
                            <Link className='link_y'>Ethnic Footwear</Link>
                            <Link className='link_y'><li>Floater Sandal</li></Link>
                            <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>

                          </ul>
                          <div>
                            <ul>
                              <Link className='link_y'><h6>Perfumes & Fragrances</h6></Link>
                              <Link className='link_y'><li>Perfumes</li></Link>
                              <Link className='link_y'><li>Deodorants</li></Link>
                            </ul>

                          </div>
                        </div>
                      </div>
                      <div >
                        <ul >
                          <Link className='link_y'><h6>Western Wear</h6></Link>
                          <Link className='link_y'><li>Dresses</li></Link>
                          <Link className='link_y'><li>Tops & Tunics</li></Link>
                          <Link className='link_y'><li>T-Shirts</li></Link>
                          <Link className='link_y'><li>Shirts</li></Link>
                          <Link className='link_y'><li>Denims & Trousers</li></Link>
                          <Link className='link_y'><li>Pants & Palazzos</li></Link>
                          <Link className='link_y'><li>Innerwear</li></Link>
                          <Link className='link_y'><li>Nightwear</li></Link>
                          <Link className='link_y'><li>Sportswear</li></Link>
                          <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>



                        </ul>

                        <div >

                          <ul>
                            <Link className='link_y'><h6>Winter Wear</h6></Link>
                            <Link className='link_y'><li>Outerwear & Jackets</li></Link>
                            <Link className='link_y'><li>Sweatshirts</li></Link>
                            <Link className='link_y'><li>Cardigans & Pullovers</li></Link>
                            <Link className='link_y'><li>Shrugs & Waistcoats</li></Link>

                          </ul>
                          <div>
                            <ul>
                              <Link className='link_y' ><h6 >Maternity Wear</h6></Link>
                            </ul>
                            <div>
                              <ul>
                                <Link className='link_y'><h6>Handbags & Clutches</h6></Link>
                                <Link className='link_y'><li>Handbags</li></Link>
                                <Link className='link_y'><li>Wallets</li></Link>
                                <Link className='link_y'><li>Clutches</li></Link>
                                <Link className='link_y'><li>Utility bags</li></Link>


                              </ul>

                            </div>
                          </div>

                        </div>

                      </div>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Eyewear</h6></Link>
                          <Link className='link_y'><li>Sunglasses</li></Link>
                          <Link className='link_y'><li>Spectacle Frames</li></Link>
                        </ul>
                        <div>
                          <ul>
                            <Link className='link_y'><h6>Watches</h6></Link>
                          </ul>
                          <div>
                            <ul>
                              <Link className='link_y'><h6>Fashion Jewellery</h6></Link>
                              <Link className='link_y'><li>Necklaces & Sets</li></Link>
                              <Link className='link_y'><li>Earrings</li></Link>
                              <Link className='link_y'><li>Bangles & Bracelets</li></Link>
                              <Link className='link_y'><li>Pendants & Sets</li></Link>
                              <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>

                            </ul>
                            <div>
                              <ul>
                                <Link className='link_y'><h6>Gold Coins & Bars</h6></Link>
                              </ul>
                              <div>
                                <ul>
                                  <Link className='link_y'><h6>Fashion Accessories</h6></Link>
                                  <Link className='link_y'><li>Hair Accessories</li></Link>
                                  <Link className='link_y'><li>Stoles & Scarves</li></Link>
                                  <Link className='link_y'><li>Socks & Stockings</li></Link>
                                  <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </li>

                <li className=' pt-2 pb-2'><div className='nav-link3'><div style={{ display: "flex", alignItems: "center" }}><img src="https://n1.sdlcdn.com/imgs/k/v/x/HOme_sitenavigation-d7a00.jpg" style={{ borderRadius: "50% 50%", width: "20%" }} alt="" />
                  <Link to='' className='ps-2 link_y' style={{ color: "#666666" }}>Home & Kitchen</Link></div>
                  <div className='nav-link-vice3'>
                  <div className='d-flex'>
                     <div>
                     <div>
                      <ul>
                        <Link className='link_y' ><h6>Kitchen Appliances</h6></Link>
                        <Link className='link_y'><li>Juicer Mixer Grinders</li></Link>
                        <Link className='link_y'><li>Water Purifiers</li></Link>

                        <Link className='link_y'><li>Gas Stoves & Hobs</li></Link>

                        <Link className='link_y'><li>Chimneys</li></Link>

                        <Link className='link_y'><li>Induction Cooktops</li></Link>

                        <Link className='link_y'><li>Kettles & Coffee Makers</li></Link>

                        <Link className='link_y'><li>Choppers & Blenders</li></Link>

                        <Link className='link_y'><li>Sandwich Makers</li></Link>

                        <Link className='link_y'><li>Roti Makers</li></Link>

                        <Link className='link_y'><li>Electric Cookers</li></Link>

                        <Link className='link_y'><li>Air Fryers</li></Link>
                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>



                      </ul>
                      </div>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Kitchenware</h6></Link>
                          <Link className='link_y'><li>Cookware & Bakeware</li></Link>
                          <Link className='link_y'><li>Kitchen Storage</li></Link>

                          <Link className='link_y'><li>Dining & Serving</li></Link>

                          <Link className='link_y'><li>Kitchen Tools</li></Link>

                          <Link className='link_y'><li>Pressure Cookers</li></Link>

                          <Link className='link_y'><li>Water Bottles</li></Link>

                          <Link className='link_y'><li>Tea & Coffeeware</li></Link>

                          <Link className='link_y'><li>Bar Accessories</li></Link>
                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>


                        </ul>

                      </div>
                     </div>
                     <div>
                       <ul>
                        <Link className='link_y'><h6>Home Furnishing</h6></Link>
                        <Link className='link_y'><li>Bed Linen</li></Link>
                        <Link className='link_y'><li>Bath Linen</li></Link>

                        <Link className='link_y'><li>Blankets & Quilts</li></Link>

                        <Link className='link_y'><li>Curtains & Accessories</li></Link>

                        <Link className='link_y'><li>Mattresses</li></Link>
                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>


                       </ul>
                       <div>
                        <ul>
                          <Link className='link_y'><h6>Furniture</h6></Link>
                          <Link className='link_y'><li>Storage & Display</li></Link>
                          <Link className='link_y'><li>Bean Bags</li></Link>

                          <Link className='link_y'><li>Tables & Desks</li></Link>
                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>


                        </ul>
                        <div>
                          <ul>
                            <Link className='link_y'><h6>Home Décor</h6></Link>
                            <Link className='link_y'><li>Lighting Fixtures</li></Link>
                            <Link className='link_y'><li>Wall Decor</li></Link>
                            <Link className='link_y'><li>Gifts & Decor</li></Link>
                            <Link className='link_y'><li>Religion & Spirituality</li></Link>
                            <Link className='link_y'><li>LED Bulbs</li></Link>
                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>


                          </ul>
                        </div>
                        
                       </div>
                      </div>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Home Improvement</h6></Link>
                          <Link className='link_y'><li>Home Utility</li></Link>
                          <Link className='link_y'><li>Cleaning Mops</li></Link>
                          <Link className='link_y'><li>Plants & Gardening</li></Link>
                          <Link className='link_y'><li>Ironing Boards</li></Link>
                          <Link className='link_y'><li>Home Cleaning</li></Link>
                          <Link className='link_y'><li>Laundry Accessories</li></Link>
                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>


                        </ul>
                        <div>
                          <ul>
                            <Link className='link_y'><h6>Tools & Hardware</h6></Link>
                            <Link className='link_y'><li>Power & Hand Tools</li></Link>
                            <Link className='link_y'><li>Bathroom Accessories</li></Link>
                            <Link className='link_y'><li>Electrical</li></Link>
                            <Link className='link_y'><li>Taps & Showers</li></Link>
                            <Link className='link_y'><li>Safes Lock & Door Fitting</li></Link>
                            <Link className='link_y'><li>Sanitaryware</li></Link>
                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>


                          </ul>
                          <div>
                            <ul>
                              <Link className='link_y'><h6>Pet Supplies</h6></Link>
                              <Link className='link_y'><li>Dog Supplies</li></Link>
                              <Link className='link_y'><li>Cat Supplies</li></Link>
                              <Link className='link_y'><li>Fish & Aquatic Supplies</li></Link>
                              <Link className='link_y'><li>Bird Supplies</li></Link>
                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>


                            </ul>
                          </div>
                        </div>
                      </div>

                     
                   

                  </div>
                  </div>

                </div></li>
                <li className=' pt-2 pb-2'><div className='nav-link4'><div style={{ display: "flex", alignItems: "center" }}><img src="https://n4.sdlcdn.com/imgs/k/v/x/Toys_Sitenavigation-ef666.jpg" style={{ borderRadius: "50% 50%", width: "20%" }} alt="" />
                  <Link to='' className='ps-2 link_y' style={{ color: "#666666" }}>Toys Kids Fashion</Link></div>
                 <div  className='nav-link-vice4'>
               
                 <div className='d-flex'>
                     <div>
                    
                     <div>
                      <ul>
                        <Link className='link_y'><h6>Toys</h6></Link>
                        <Link className='link_y'><li>Toy Cars</li></Link>
                        <Link className='link_y'><li>Electronic Toys</li></Link>

                        <Link className='link_y'><li>Action Toys & Figures</li></Link>

                        <Link className='link_y'><li>Ride On & Scooters</li></Link>

                        <Link className='link_y'><li>Outdoor Toys</li></Link>

                        <Link className='link_y'><li>Soft Toys</li></Link>

                        <Link className='link_y'><li>Educational Toys</li></Link>

                        <Link className='link_y'><li>Toddler Toys</li></Link>

                        <Link className='link_y'><li>Dolls & Doll Houses</li></Link>

                        <Link className='link_y'><li>Activity Sets</li></Link>

                        <Link className='link_y'><li>Indoor & Board Games</li></Link>
                        <Link className='link_y'><li>Party Supplies</li></Link>

                        <NavLink style={{ color: "#24A8ED" }}><li>View all</li></NavLink>



                      </ul>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Bicycles & Tricycles</h6></Link>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Kids' Footwear</h6></Link>
                          <Link className='link_y'><li>Boys Footwear</li></Link>
                          <Link className='link_y'><li>Girls Footwear</li></Link>
                          <Link className='link_y'><li>Baby Footwear</li></Link>


                        </ul>
                      </div>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Accessories</h6></Link>
                          <Link className='link_y'><li>Eyewear</li></Link>

                        </ul>
                      </div>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Kids' Watches</h6></Link>
                        </ul>
                      </div>
                      </div>
                     </div>
                     <div>
                       <ul>
                        <Link className='link_y'><h6>Kids' Clothing</h6></Link>
                       


                       </ul>
                       <div>
                        <ul>
                        <Link className='link_y'><h6>Girls' Clothing</h6></Link>

                        <Link className='link_y'><li>Frocks & Dresses</li></Link>
                        <Link className='link_y'><li>Lehenga Cholis & Sarees</li></Link>

                        <Link className='link_y'><li>Jeans & Pants</li></Link>

                        <Link className='link_y'><li>Suit Sets</li></Link>

                        <Link className='link_y'><li>Tops, Tees & Shirts</li></Link>
                        <Link className='link_y'><li>Leggings & Jeggings</li></Link>
                        <Link className='link_y'><li>Top & Bottom Sets</li></Link>
                        
                        </ul>
                       </div>
                       <div>
                        <ul>
                          <Link className='link_y'><h6>Boys' Clothing</h6></Link>
                          <Link className='link_y'><li>Top Wear</li></Link>
                          <Link className='link_y'><li>Top & Bottom Sets</li></Link>
                          <Link className='link_y'><li>Bottom Wear</li></Link>
                          <Link className='link_y'><li>Ethnicwear</li></Link>
                          <Link className='link_y'><li>Innerwear</li></Link>
                          <Link className='link_y'><li>Nightwear
                          </li></Link>
                        </ul>
                       </div>
                       <div>
                        <ul>
                          <Link className='link_y'><h6>Baby Clothing
                          </h6></Link>
                          <Link className='link_y'><li>Top & Bottom Sets</li></Link>
                          <Link className='link_y'><li>Frocks, Dresses & Skirts</li></Link>
                          <Link className='link_y'><li>Rompers & Body Suits</li></Link>
                          <Link className='link_y'><li>Shirts, T-Shirts & Tops</li></Link>
                          <Link className='link_y'><li>Bottom Wear</li></Link>
                        </ul>
                       </div>
                       <div>
             
                       
                        
                       </div>
                      </div>
                      <div>
                        <ul>
                          <Link className='link_y'><h6>Baby Care</h6></Link>
                          <Link className='link_y'><li>Baby Mosquito Nets</li></Link>
                          <Link className='link_y'><li>Baby Blankets</li></Link>
                          <Link className='link_y'><li>Baby Carriers</li></Link>
                          <Link className='link_y'><li>Baby Strollers</li></Link>
                          <Link className='link_y'><li>Walkers</li></Link>
                          <Link className='link_y'><li>Feeding & Nursing</li></Link>

                        </ul>
                        <div>
                          <ul>
                            <Link className='link_y'><h6>Lab Equipment</h6></Link>
                          </ul>
                        </div>
                        <div>
                          <ul>
                            <Link className='link_y'><h6>Stationery</h6></Link>
                            <Link className='link_y'><li>Pens & Markers</li></Link>
                            <Link className='link_y'><li>Pencil Boxes</li></Link>
                            <Link className='link_y'><li>Files & Folders</li></Link>
                            <Link className='link_y'><li>Calculators</li></Link>
                            <Link className='link_y'><li>Diaries & Planners</li></Link>
                            <Link className='link_y'><li>Printing Papers</li></Link>
                            <Link className='link_y' ><li>Notebooks & Writing Pads</li></Link>
                            <Link className='link_y'><li>Art & Craft Supplies</li></Link>
                            <Link className='link_y'><li>Photo Papers</li></Link>
                            <Link className='link_y'><li>Tapes</li></Link>
                            <Link className='link_y'><li>Card Holders</li></Link>
                            <Link className='link_y'><li>Staplers</li></Link>

                          </ul>
                        </div>
                       
                          
                      </div>

                     
                   

                  </div>

                 </div>
                </div></li>
                <li className=' pt-2 pb-2'><div className='nav-link5'><div style={{ display: "flex", alignItems: "center" }}><img src="https://n2.sdlcdn.com/imgs/k/v/x/Beauty_Site_navigation-5f3be.jpg" style={{ borderRadius: "50% 50%", width: "20%" }} alt="" />
                  <Link to='' className='ps-2 link_y' style={{ color: "#666666" }}>Beauty,Health</Link></div>
                  <div className='nav-link-vice5'>    
                 <div className='d-flex'>
                 <div>
                    <ul className='ps-0' style={{ listStyle: "none", color: "#666666", fontSize: "13px" }}>
                      <Link className='link_y'><h6 className='mt-3'>Beauty</h6></Link>
                      <Link className='link_y'><li >Face</li></Link>
                      <Link className='link_y'><li >Eyes</li></Link>
                      <Link className='link_y'><li >Lips</li></Link>
                      <Link className='link_y'><li >Nails</li></Link>
                      <Link className='link_y'><li >Makeup Palettes</li></Link>
                      <Link className='link_y'><li >Brushes & Applicators</li></Link>
                    </ul>
                    <div>
                      <ul className='ps-0' style={{ listStyle: "none", color: "#666666", fontSize: "13px" }}>
                        <Link className='link_y'><h6 className='mt-3'>Personal Care & Grooming</h6></Link>
                        <Link className='link_y'><li>Skin Care</li></Link>
                       <Link className='link_y'><li>Hair Care</li></Link>
                       <Link className='link_y'><li>Bath & Shower</li></Link>
                       <Link className='link_y'><li>Oral Care</li></Link>
                       <Link className='link_y'><li>Men's Grooming</li></Link>
                       <Link className='link_y'><li>Feminine Hygiene</li></Link>
                       <Link className='link_y'><li>Waxing & Hair Removal</li></Link>
                       <Link className='link_y'><li>Deodorants & Roll-ons</li></Link>
                      </ul>
                    </div>
                    <div>
                      <ul className='ps-0'>
                        <Link className='link_y'><h6>Sexual Wellness</h6></Link>
                        <Link className='link_y'><li>Condoms</li></Link>
                        <Link className='link_y'><li>Lubes</li></Link>
                        <Link className='link_y'><li>Adult Sex Toys</li></Link>
                        <Link className='link_y'><li>Performance & Enlargement
                        </li></Link>
                        <Link className='link_y'><li>Sexy Lingerie</li></Link>

                      </ul>
                    </div>

                  </div>
                  <div>
                    <ul className='ps-0' style={{ listStyle: "none", color: "#666666", fontSize: "13px" }}>
                      <Link className='link_y'><h6 className='mt-3'>Food and Gourmet</h6></Link>
                      <Link className='link_y'><li>Tea, Coffee & Beverages</li></Link>
                      <Link className='link_y'><li>Noodles, Soups & Pastas</li></Link>
                      <Link className='link_y'><li>Biscuits</li></Link>
                      <Link className='link_y'><li>Breakfast Foods</li></Link>
                      <Link className='link_y'><li>Ready To Cook & Eat</li></Link>
                      <Link className='link_y'><li>Sauces & Dressings</li></Link>
                      <Link className='link_y'><li>Baking Essentials</li></Link>
                      <Link className='link_y'><li>Chocolates & Candies</li></Link>
                      <Link className='link_y'><li>Staples, Oils & Spices</li></Link>
                      <Link className='link_y'><li>Dry Fruits & Gifts Boxes</li></Link>

                    </ul>
                    <div>
                      <ul className='ps-0' style={{ listStyle: "none", color: "#666666", fontSize: "13px" }}>
                        <Link className='link_y'><h6 className='mt-3'>Nutrition & Supplements</h6></Link>
                       <Link className='link_y'><li>Proteins</li></Link>
                       <Link className='link_y'><li>Vitamins & Minerals</li></Link>
                       <Link className='link_y'><li>Health Drinks</li></Link>
                       <Link className='link_y'><li>Meal Replacements</li></Link>
                       <Link className='link_y'><li>Weight Gainers</li></Link>
                       <Link className='link_y'><li>Workout Supplements</li></Link>
                       <Link className='link_y'><li>Muscle Support</li></Link>
                       <Link className='link_y'><li>Shakers</li></Link>

                      </ul>
                    </div>

                  </div>
                  <div>
                    <ul className='ps-0' style={{ listStyle: "none", color: "#666666", fontSize: "13px" }}>
                      <Link className='link_y'><h6 className='mt-3'>Health Monitoring Devices</h6></Link>
                      <Link className='link_y'><li>BP Monitors</li></Link>
                      <Link className='link_y'><li>Diabetic Care</li></Link>
                      <Link className='link_y'><li>Weighing Scales</li></Link>
                      <Link className='link_y'><li>Body Fat Analysers</li></Link>
                      <Link className='link_y'><li>Respiratory & Heart Care</li></Link>
                      <Link className='link_y'><li>Thermometers</li></Link>

                    </ul>
                    <div>
                      <ul className='ps-0' style={{ listStyle: "none", color: "#666666", fontSize: "13px" }}>
                        <Link className='link_y'><h6 className='mt-3'>General Wellness</h6></Link>
                       <Link className='link_y'><li>Massagers & Pain Relief</li></Link>
                       <Link className='link_y'><li>Mobility Rehabilitation</li></Link>
                       <Link className='link_y'><li>First Aid</li></Link>
                       <Link className='link_y'><li>Nicotine Gums</li></Link>

                      </ul>
                    </div>
                    <div>
                      <ul>
                        <Link className='link_y'><h6>Baby Care</h6></Link>
                        <Link className='link_y'><li>Diapers & Potty Training</li></Link>
                        <Link className='link_y'><li>Bath, Skin & Health Care</li></Link>
                        <Link className='link_y'><li>Baby Food</li></Link>


                      </ul>
                    </div>
                    <div>
                      <ul>
                        <Link className='link_y'><h6>Household Essentials</h6></Link>
                        <Link className='link_y'><li>Detergents & Fabric Care</li></Link>
                        <Link className='link_y'><li>House & Kitchen Cleaners</li></Link>
                        <Link className='link_y'><li>Repellents</li></Link>
                        <Link className='link_y'><li>Air Fresheners</li></Link>
                      </ul>
                    </div>

                  </div>
                 </div>
                 
                  </div>

                </div>

                </li>

              </ul>
            </div>
            <div className='mt-5 d-flex justify-content-center' style={{ alignItems: "center" }}>
              <img src="https://i1.sdlcdn.com/img/snapdeal/barCode_Home1x.png" alt="" className='img-fluid w-25 h-25' />
              <div className='ms-3 pt-3'>
                <h5 className='mb-0' style={{ fontSize: '16px' }}>Enjoy Convenient <br /> Order Tracking</h5>

                <p style={{ fontSize: "13px", color: "#666666" }}>Scan to download app</p>
              </div>
            </div>
          </div>


          <div className='col-10'>
            <div className='row'>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-8" style={{ height: "329px" }}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ width: '810px' }}>
                      <div className="carousel-inner">
                        <div className="carousel-item active" id="slide-img1">
                          <img src="https://n2.sdlcdn.com/imgs/k/s/i/ethnicwear-ef4d9.jpg" className="d-block w-100 img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="https://n2.sdlcdn.com/imgs/k/v/r/web_home_903_new_12-13ad3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="https://n3.sdlcdn.com/imgs/k/s/i/cookware-bc6ef.jpg" className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className='d-flex justify-content-around align-items-center pt-2' style={{ backgroundColor: "white", width: "810px" }}>
                      <p data-bs-target="#slide-img1" className='slider-inne-main' style={{ position: 'relative', top: "0%", left: "0%", cursor: "pointer" }}>ONDC
                        <span className='slider-line'></span>
                      </p>
                      <p data-bs-target="#slide-img1" className='slider-inne-main' style={{ position: 'relative', top: "0%", left: "0%", cursor: "pointer" }}>BOB Card
                        <span className='slider-line'></span>
                      </p>
                      <p data-bs-target="#slide-img1" className='slider-inne-main' style={{ position: 'relative', top: "0%", left: "0%", cursor: "pointer" }}>ETHNIC WEAR
                        <span className='slider-line'></span>
                      </p>
                      <p data-bs-target="#slide-img1" className='slider-inne-main' style={{ position: 'relative', top: "0%", left: "0%", cursor: "pointer" }}>KITCHENWARE
                        <span className='slider-line'></span>
                      </p>
                      <p data-bs-target="#slide-img1" className='slider-inne-main' style={{ position: 'relative', top: "0%", left: "0%", cursor: "pointer" }}>HOME FURNISHING
                        <span className='slider-line'></span>
                      </p>
                    </div>
                  </div>
                  <div className="col-2 ms-5">
                    {/* <div className="container d-flex justify-content-center align-items-center min-vh-100"> */}
                    <div className="card_y p-3 pb-2" style={{ width: "250px", backgroundColor: "white" }}>
                      <div className="card-body text-center">
                        <img src="https://img.icons8.com/color/48/000000/marker.png" alt="Delivery" className="mb-4 m-auto" />
                        <h5 className="card-title">Your Delivery Pincode</h5>
                        <p className="card-text">Enter your pincode to check availability and faster delivery options</p>
                        <form>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter pincode" />
                          </div>
                          <div>
                            <button type="submit" className="btn btn-dark btn-block mt-3">SUBMIT</button>
                            <button type="submit" className="btn  btn-block mt-3">NEXT</button>

                          </div>
                        </form>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-5 me-5'>
              <div className="col-12">

                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide className='m-auto '>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='m-auto'>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className='m-auto'>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='m-auto'>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='m-auto'>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='m-auto'>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='m-auto'>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='m-auto'>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='m-auto'>
                    <div className="card c-card">
                      <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "80%", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                      <div className="card-body p-0">
                        <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                        <div className='d-flex align-items-center mt-2 ps-2'>
                          <del className="original-price ps-2" style={{ color: "#CCCCCC", marginBottom: "0px", fontSize: "13px" }}>Rs. 1,399</del>
                          <p className="price mb-0 ps-2" style={{ fontSize: "13px" }}>Rs. 662</p>
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
                    </div>
                  </SwiperSlide>
                </Swiper>







              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5 me-5'>
          <div className="col-12">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className='m-0 mb-5'>
                <div className="card">
                  <img src="https://t3.sdlcdn.com/imgs/j/s/s/large/ASIAN-White-Running-Shoes-SDL131628106-1-ae960.jpeg" style={{ width: "150px", margin: "auto" }} alt="Action Sports Shoes Blue Men's Sports Running Shoes" className="card-img-top product-image" />
                  <div className="card-body p-0">
                    <h5 className="card-title" style={{ fontSize: "13px", color: "#666666", marginBottom: "0px" }}>Action Sports Shoes Blue Men’s Sports Running Shoes</h5>
                    <p className="original-price" style={{ color: "#CCCCCC", marginBottom: "0px" }}>Rs. 1,399</p>
                    <p className="price mb-0">Rs. 662</p>
                    <p className="discount" style={{ color: '#CCCCCC', marginBottom: "0px" }}>53% Off</p>
                    <p className="rating">
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9733;</span>
                      <span>&#9734;</span>
                      <span>&#9734;</span>
                      (3)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='m-0'>Slide 2</SwiperSlide>
              <SwiperSlide className='m-0'>Slide 3</SwiperSlide>
              <SwiperSlide className='m-0'>Slide 4</SwiperSlide>
              <SwiperSlide className='m-0'>Slide 5</SwiperSlide>
              <SwiperSlide className='m-0'>Slide 6</SwiperSlide>
              <SwiperSlide className='m-0'>Slide 7</SwiperSlide>
              <SwiperSlide className='m-0'>Slide 8</SwiperSlide>
              <SwiperSlide className='m-0'>Slide 9</SwiperSlide>
            </Swiper>

          </div>
        </div>
      </div>
      <Footerpage />
    </div>
  )
}

export default Home
