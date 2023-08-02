import Link from 'next/link'
import { Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Icon
import { GoSearch } from "react-icons/go";
import {FiHeart } from "react-icons/fi";
import {AiOutlineShoppingCart } from "react-icons/ai";
import {BiUser } from "react-icons/bi";
import { FaFacebookF,FaYoutube,FaInstagram,FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";




const Menubar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>

    <div className='Multipage__1__DextopVs'>

          <Container>

              <div className='Multipage__1__ManubarDiv'>

                  <div className='Multipage__1__ManubarItem1'>

                    <Link href="/multipage-1"> <img src="/images/multipage-1/logo.png" alt="" /></Link>

                  </div>

                  <div className='Multipage__1__ManubarItem2'>


                    <div className='Multipage__1__ManubarInputDiv'>

                      <input type="text" placeholder="Search here..."/>
                      <button type="button" ><GoSearch/></button>
                   
                    </div>

                    
                  </div>

                  <div className='Multipage__1__ManubarItem3'>

                      <ul>

                          <li>
                            
                           

                            <Link href=""> 
                            
                             <FiHeart className="Multipage__1__menuicon"></FiHeart> 
                             
                            </Link>

                            <div className="Multipage__1__TopNum">7</div>      

                            <Link href='#' className="Multipage__1__L2" >Wishlist</Link>

                          </li>

                          <li>

                           <Link href="">  

                             <AiOutlineShoppingCart className="Multipage__1__menuicon"></AiOutlineShoppingCart> 
                             
                            </Link>

                            <div className="Multipage__1__TopNum">2</div>

                            <Link href='#' className="Multipage__1__L3" >Cart</Link>

                          </li>
                          
                          <li>

                            <Link href="">  

                              <BiUser className="Multipage__1__menuicon"></BiUser>

                            </Link>

                            <Link href='#' className="Multipage__1__L4" >Account</Link>

                          </li>

                      </ul>

                  </div>

              </div>

          </Container>

          <div className="Multipage__1__HrDiv"></div>


          <Container>

              <div className="Multipage__1__MenubarDiv2">

                  <div className="Multipage__1__MenubarDiv2Item">

                    <Dropdown>

                        <Dropdown.Toggle  id="dropdown-basic">

                          <div className='Multipage__1__MenubarImgDiv'> 

                            <img src="/images/multipage-1/img.png" alt="" />

                            <span>Browse Categories</span> 

                            <div>  <IoIosArrowDown/> </div>
                          
                          </div>
                        
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                          <div className='Multipage__1__DropItem'>

                            <Dropdown.Item href="#/action-1">Vegetables</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Dairy Goods</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Meats</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Fish & Seafoods</Dropdown.Item>

                          </div>
                         
                        </Dropdown.Menu>

                    </Dropdown> 

                    <div className='Multipage__1__MenuDiv'>

                      <Link href="/multipage-1">Home</Link>

                      <Link href="/multipage-1/shop">Shop</Link>

                      <Link href="/multipage-1/aboutus">About Us</Link>

                      <Link href="/multipage-1/contactus">Contact Us</Link>

                    </div>

                  </div>

                  <div className="Multipage__1__MenubarDiv2Item2">

                      <Link href=""> <FaFacebookF/> </Link>
                      <Link href=""> <FaYoutube/></Link>
                      <Link href=""> <FaInstagram/></Link>
                      <Link href=""> <FaTwitter/></Link>
                      
                  </div>

              </div>

          </Container>

          <div className="Multipage__1__HrDiv"></div>

    </div>

   {/* =========================================================================================
            Mobile Vs
   ===============================================================================================*/}

    <div className='Multipage__1__MobileVs'>

      <div className='Multipage__1__MobileVsBg'>

        <Container>

            <div className='Multipage__1__MenubarMob1'>

              <div>

                <div className="Multipage__1__MenubarDiv2Item2 Multipage__1__MenubarDiv2Item3">

                    <Link href=""> <FaFacebookF/> </Link>
                    <Link href=""> <FaYoutube/></Link>
                    <Link href=""> <FaInstagram/></Link>
                    <Link href=""> <FaTwitter/></Link>

                </div>

              </div>


                <div className='Multipage__1__ManubarItem2'>

                  <div className='Multipage__1__ManubarInputDiv'>

                    <input type="text" placeholder="Search here..."/>
                    <button type="button" ><GoSearch/></button>

                  </div>


              </div>

            </div>

        </Container>

      </div>

        <Container>

          <div className='Multipage__1__MobileVs2'>

           
              <div className="Multipage__1__MenubarDiv2">

                  <div className="Multipage__1__MenubarDiv2Item">

                   
                     <Button variant="primary" onClick={handleShow}>

                       <div className='Multipage__1__MenubarImgDiv'> 

                          <img src="/images/multipage-1/img28.png" alt="" />

                      </div>

                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>

                      <Offcanvas.Header closeButton>

                        <Offcanvas.Title> 

                           <Link href="/multipage-1"> <img className='Multipage__1__LogoMob' src="/images/multipage-1/logo.png" alt="" /></Link>
                        
                        </Offcanvas.Title>

                      </Offcanvas.Header>

                      <Offcanvas.Body>

                            <div className='Multipage__1__OffCanDiv'>

                                <ul>

                                  <li>
                                    <Link href="/multipage-1">Home</Link>
                                  </li>

                                  <li>
                                    <Link href="/multipage-1/shop">Shop</Link>
                                  </li>

                                  <li>
                                    <Link href="/multipage-1/">About Us</Link>
                                  </li>

                                  <li>
                                    <Link href="/multipage-1">Contact Us</Link>
                                  </li>

                                  <li>
                                    <Link href="/multipage-1">Vegetables</Link>
                                  </li>

                                  <li>
                                    <Link href="/multipage-1">Dairy Goods</Link>
                                  </li>

                                  <li>
                                    <Link href="/multipage-1">Meats</Link>
                                  </li>

                                  <li>
                                    <Link href="/multipage-1">Fish & Seafoods</Link>
                                  </li>

                                </ul>

                            </div>

                      </Offcanvas.Body>
                      
                    </Offcanvas>


                    <Link href="/multipage-1"> <img className='Multipage__1__LogoMob' src="/images/multipage-1/logo.png" alt="" /></Link>

                  </div>


              </div>


              <div className='Multipage__1__ManubarItem3'>

                  <ul>

                      <li>
                        
                       <Link href=""> <FiHeart className="Multipage__1__menuicon"></FiHeart> </Link>

                        <div className="Multipage__1__TopNum">7</div>      

                      </li>

                      <li>

                      <Link href=""> <AiOutlineShoppingCart className="Multipage__1__menuicon"></AiOutlineShoppingCart> </Link>

                        <div className="Multipage__1__TopNum">2</div>

                      </li>
                      
                      <li>

                      <Link href=""> <BiUser className="Multipage__1__menuicon"></BiUser> </Link>

                      </li>

                  </ul>

              </div>


          </div>

        </Container>




    </div>





    </>

  )
}

export default Menubar