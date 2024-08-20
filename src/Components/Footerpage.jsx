
import React from 'react'
import { Link } from 'react-router-dom'

const Footerpage = () => {
  return (
  <footer className='foot'>
 <div className="container a_foot1">
  
 </div>
 {/* <div className="container a_foot2"></div>
 <div className="container a_foot3"></div> */}
 <div className="a_main1_b1">
        <div className="container" style={{ backgroundColor: 'white' }}>
          <div className="row">
            <div className="col-6 d-flex justify-content-end">
              <img src="https://i1.sdlcdn.com/img/appScreenshot@1x.png" className="img-fluid" alt="" />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <h1 style={{ fontSize: '41px' }}>
                Download Snapdeal <br /> App Now
              </h1>
              <h3 style={{ fontSize: '17px', color: '#777777' }}>
                Fast, Simple & Delightful.
                <br />
                All it takes is 30 seconds to Download.
              </h3>
              <div className="row d-flex align-items-center">
                <div className="col-2">
                  <a
                    href="https://apps.apple.com/in/app/snapdeal-online-shopping-app/id721124909?ls=1&utm_campaign=ios&utm_source=mobileAppLp"
                  >
                    <img
                      src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                      style={{ width: '100%' }}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=mobileAppLp&utm_campaign=android"
                  >
                    <img
                      src="https://www.codot.gov/safety/impaired-driving/planahead/2011-assets/android-market-icon.png/@@images/image"
                      style={{ width: '70%' }}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-section mt-2">
          <div className="container-fluid foot_top">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-3 foot_sc">
                  <div className="icon mb-2">🔒</div>
                  <h5 className="footer-title" style={{ color: '#5A5A5A' }}>100% SECURE PAYMENTS</h5>
                  <p style={{ color: '#6c757d' }}>Moving your card details to a much more secured place</p>
                </div>
                <div className="col-md-3 foot_sc">
                  <div className="icon mb-2">✅</div>
                  <h5 className="footer-title" style={{ color: '#5A5A5A' }}>TRUSTPAY</h5>
                  <p style={{ color: '#6c757d' }}>100% Payment Protection. Easy Return Policy</p>
                </div>
                <div className="col-md-3 foot_sc">
                  <div className="icon mb-2">💬</div>
                  <h5 className="footer-title" style={{ color: '#5A5A5A' }}>HELP CENTER</h5>
                  <p style={{ color: '#6c757d' }}>Got a question? Look no further. Browse our FAQs or submit your query here.</p>
                </div>
                <div className="col-md-3 foot_sc">
                  <div className="icon mb-2">📱</div>
                  <h5 className="footer-title" style={{ color: '#5A5A5A' }}>SHOP ON THE GO</h5>
                  <p style={{ color: '#6c757d' }}>Download the app and get exciting app-only offers at your fingertips</p>
                </div>
              </div>


            </div>
            <div className="conatiner">
              <div className="row m-auto mt-0" style={{ borderTop: '1px solid #E7E7E7', width: '90%', height: "100%" }}>
                <div className="col-md-3 ">
                  {/* <h6 className="footer-title mt-4">POLICY INFO</h6>
                  <div className="footer-links" style={{ color: '#E7E7E7' }}>
                   <Link> <a href="#">Privacy Policy</a></Link><br />
                    <Link><a href="#">Terms of Sale</a></Link><br />
                   <Link> <a href="#">Terms of Use</a></Link><br />
                    <a href="#">Report Abuse & Takedown Policy</a><br />
                    <a href="#">Know Your BIS Standard</a><br />
                    <a href="#">Products Under Compulsory BIS Certification</a><br />
                    <a href="#">FAQ</a>
                  </div> */}
                  <h6 className="footer-title mt-4">POLICY INFO</h6>
                  <div className="footer-links">
                    <a href="#">Privacy Policy</a><br />
                    <a href="#">Terms of Sale</a><br />
                    <a href="#">Terms of Use</a><br />
                    <a href="#">Report Abuse & Takedown Policy</a><br />
                    <a href="#">Know Your BIS Standard</a>
                    <a href="#">Products Under Compulsory BIS Certification</a>
                    <a href="#">FAQ</a>
                  </div>

                </div>
                <div className="col-md-3">
                  <h6 className="footer-title mt-4">COMPANY</h6>
                  <div className="footer-links">
                    <a href="#">Impact@Snapdeal</a><br />
                    <a href="#">Careers</a><br />
                    <a href="#">Blog</a><br />
                    <a href="#">Sitemap</a><br />
                    <a href="#">Contact Us</a>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="footer-title mt-4">SNAPDEAL BUSINESS</h6>
                  <div className="footer-links">
                    <a href="#">Shopping App</a><br />
                    <a href="#">Sell on Snapdeal</a><br />
                    <a href="#">Media Enquiries</a>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="footer-title mt-4">POPULAR LINKS</h6>
                  <div className="footer-links">
                    <a href="#">Lehenga</a><br />
                    <a href="#">Kid's Clothing</a><br />
                    <a href="#">Sarees</a><br />
                    <a href="#">Winter Wear</a>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="row mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="col-md-6">
                        <h6 className="footer-title mt-1">SUBSCRIBE</h6>
                        <form className="d-flex">
                          <input type="email" className="form-control me-2" placeholder="Your email address" />
                          <button className="btn btn-dark" type="submit">SUBSCRIBE</button>
                        </form>
                        <p className="mt-2">
                          Register now to get updates on promotions and coupons. Or{' '}
                          <a href="https://play.google.com/store/search?q=snapdeal&c=apps">Download App</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid py-3 mt-3" style={{ borderTop: "1px solid #E7E7E7",display:"flex",justifyContent:'center',alignItems:'center'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="footer-title">PAYMENT</h6>
                      <div className="footer-links d-flex my-5" style={{width:"50%"}}>
                        <img src="https://cdn-icons-png.freepik.com/256/11378/11378186.png?semt=ais_hybrid" width="10%" height="10%" alt="Payment Method 1" />

                        <img src="https://www.clipartmax.com/png/small/110-1105116_american-express-icon-amex-icon-png.png" width="15%" alt="Payment Method 2" />
                        <img src="https://static-00.iconduck.com/assets.00/mastercard-icon-512x329-xpgofnyv.png" width="15%" alt="Payment Method 3" />
                        <img src="https://static-00.iconduck.com/assets.00/diners-icon-2048x1313-zmf93hz7.png" width="15%" alt="Payment Method 4" />
                        <img src="https://i.pinimg.com/474x/1b/27/db/1b27db5052cb7f0f21b3949fa80e6ffd.jpg" width="15%" alt="Payment Method 5" />
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-netbanking-credit-debit-card-bank-transaction-32302.png?f=webp&w=256" width="15%" alt="Payment Method 6" />

                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <h6 className="footer-title">CONNECT</h6>
                      <div className="footer-links d-flex my-5" style={{width:"50%"}}>
                        <a href="https://www.facebook.com/profile.php?id=100064919734915"><img src="https://i4.sdlcdn.com/img/footer/facebook@4x.png"  alt="Facebook" /></a>
                        <a href="https://x.com/snapdeal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://i1.sdlcdn.com/img/footer/twitter@4x.png"  alt="Twitter" /></a>
                        <a href="https://www.instagram.com/snapdeal/?hl=en"><img src="https://i4.sdlcdn.com/img/footer/instagram@4x.png"  alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/company/snapdeal/"><img src="https://i2.sdlcdn.com/img/footer/linkedin@4x.png"  alt="LinkedIn" /></a>
                        <a href=""><img src="https://i1.sdlcdn.com/img/footer/youtube@4x.png"  alt="YouTube" /></a>
                        <a href="/"><img src="https://i4.sdlcdn.com/img/footer/Telegram-Logo_112x112.png"  alt="Telegram" /></a>
                        <a href="/"><img src="https://i1.sdlcdn.com/img/footer/whatsapp-logo-112x112.png"  alt="WhatsApp" /></a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </footer>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>

      {/* <div className="container-fluid a_main2 mt-5">
        <div className="container">
          <div className="row">
            <h1>Banner</h1>
          </div>
        </div>
      </div> */}
       <footer className="container-fluid py-4" style={{borderTop: '1px solid #E7E7E7',backgroundColor:"#F7F7F7",cursor:"pointer"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p><strong>Men:</strong> Shirts for Men / Casual Shirts for Men / Formal Shirts for Men / Hoodies for Men / Cotton Shirts for Men / T Shirts for Men / Polo T shirts / Kurta Pajama for Men / White Shirt / Black Shirt / Lower for Men / Trousers for Men / Jacket for Men / Formal Pants for Men / Tracksuit for Men / Jeans for Men / Kurta Pajama Sets / Kurta for Men / Blazer for Men / Sweater for Men</p>
                    <p><strong>Women:</strong> Tops for Women / Kurti / Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees / Dresses for Women / Jumpsuit for Women / Jeans for Women / Salwar Suit / Bra / Jacket for Women / Night Dress for Women / Sweatshirt for Women / Shorts for Women / Readymade Blouse / Dupatta / T Shirt for Women / Shirts for Women / Skirts for Women / Ethnic wear for Women / Western Dresses for Women / Leggings for Women</p>
                    <p><strong>Footwear:</strong> Men’s Footwear / Casual Shoes for Men / Formal Shoes for Men / Loafers for Men / Slippers for Men / Boots for Men / Sandals for Women / Slippers for Women / Boots for Women / Jutti for Women / Sports Shoes for Women / Footwear for Women / Heels for Women / Sandals for Women / Shoes for Women</p>
                    <p><strong>Home & Kitchen:</strong> Wall Painting / Wall Stickers / Dream Catcher / Rangoli Designs / Clock / Wall Clock / Alarm Clock / Diya / Bean Bag / Laptop Table / Study Table / Wall Hanging / Ceiling Lights / Table Lamp / Hanging Lights / LED Bulbs / Torch Light / LED Lights / Flower Vase / Keychain / Rudraksha / Screwdriver</p>
                    <p><strong>Watch:</strong> Watch For Men / Womens Watches / Smart Watch / Boys Watch / Girls Watch</p>
                    <p><strong>Home Furnishing:</strong> Bed Sheet / Mosquito Net / Mattress / Curtains / Sofa Cover / Blanket / Pillow / Carpet / Apron / Quilt / Floor Mat / Towel / Pillow Cover</p>
                    <p><strong>Electronics:</strong> Bluetooth Speakers / Headphones / Earphone / Ceiling Fan / Geysers / Trimmer / Hair Straightner / Hair Dryer / Water Purifier / Mixer Grinder / Gas Stove / Electric Kettle / Computer Mouse / Computer Keyboard / USB & HDMI Cables / Computer Antivirus</p>
                    <p><strong>Mobiles Accessories:</strong> Mobile Covers / Leather Mobile Covers / Printed Back Covers / Tempered Glass</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>Snapdeal is India’s leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform. Snapdeal’s vision is to enable the shoppers of Bharat to experience the joy of living their aspirations through reliable, value-for-money shopping. With a personalized, multilingual interface and cutting edge technology, Snapdeal has simplified the shopping experience for its value-conscious buyers by showcasing the most relevant products- products that are a good functional fit with their needs and of a quality that lasts-thereby delivering true value to its customers. With its commitment to high service standards, Snapdeal suppliers operate under a well structured ecosystem that enables them to offer great quality products at affordable prices. With majority of the value-seeking, middle-income, price-conscious buyers coming from the non-metros, Snapdeal’s logistics networks powered by third party logistics cover more than 96% of India’s pin codes enabling order deliveries to more than 2500 towns and cities and expanding further. Snapdeal’s mission is to become India’s value lifestyle omni-channel leader. We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat consumers wherever they are on their offline to online shopping journey. Snapdeal is part of the AceVector Group and one of India’s best-known e-commerce companies with an exclusive focus on the value segment.</p>
                </div>
            </div>
        </div>
    </footer>
    <div className="container-fluid" style={{backgroundColor:"white"}}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>Copyright Yogesh D"c 😎 © 2024, Snapdeal Limited. All Rights Reserved</p>
          </div>
          <div className="col-6 ">
           <Link to='./home' className='d-flex justify-content-end'><img src="https://www.svgrepo.com/show/11322/up-arrow.svg" width="5%" className=''  alt="" /></Link>
          </div>
        </div>
      </div>
    </div>

  </footer>  
  )
}
export default Footerpage



