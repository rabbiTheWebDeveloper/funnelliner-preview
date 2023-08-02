import Link from 'next/link'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import TinyFooter from '../../LandingPage/Common/TinyFooter/TinyFooter';

// icon

import { MdAvTimer } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube,FaShippingFast  } from 'react-icons/fa';




const Footer = () => {

  return (

    <div>

             {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Delivary
              -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
             
             <section className="Multipage__1__Delivary">

                <Container>

                    <Row>

                        <Col lg={12}>

                            <div className="Multipage__1__DelivaryContent">

                                {/* item */}
                                <div className="Multipage__1__DelivaryItem d_flex">

                                    <div className="Multipage__1__img">
                                        <FaShippingFast></FaShippingFast>
                                    </div>

                                    <div className="Multipage__1__text">
                                        <h3>Fastest Delivery</h3>
                                        <p>100% Free for all orders</p>
                                    </div>

                                </div>

                                {/* item */}
                                <div className="Multipage__1__DelivaryItem d_flex">

                                    <div className="Multipage__1__img">
                                        <MdAvTimer></MdAvTimer>
                                    </div>

                                    <div className="Multipage__1__text">
                                        <h3>Great Support 24/7</h3>
                                        <p>We care your experiences</p>
                                    </div>

                                </div>

                                {/* item 3*/}
                                <div className="Multipage__1__DelivaryItem d_flex">

                                    <div className="Multipage__1__img">
                                        <TbTruckReturn/>
                                    </div>

                                    <div className="Multipage__1__text">
                                        <h3>90 Days Return</h3>
                                        <p>90 Days Return</p>
                                    </div>

                                </div>

                                {/* item */}
                                <div className="Multipage__1__DelivaryItem d_flex">

                                    <div className="Multipage__1__img">
                                        <RiShieldCheckLine></RiShieldCheckLine>
                                    </div>

                                    <div className="Multipage__1__text">
                                        <h3>secure Payment</h3>
                                        <p>100% Secure Payment Method</p>
                                    </div>

                                </div>


                            </div>

                        </Col>

                    </Row>


                    <div className="Multipage__1__HrDiv  Multipage__1__HrDivht"></div>

                  {/* Address */}

                  <div className='Multipage__1__AddressDiv'>

                    <div className="Multipage__1__AddressDivItem ">

                          <div className="Multipage__1__text">
                              <img src="/images/multipage-1/logo.png" alt="" />
                          </div>

                          <div className="Multipage__1__text2">
                              <h3>Store Address</h3>
                              <p>SAR Bhaban, Level-5 , Ka-78, Progoti Sarani, Kuril, Vatara</p>
                          </div>

                          <div className="Multipage__1__text2">
                              <h3>Contact No.</h3>
                              <p>+8801894844452</p>
                          </div>

                    </div>

                  </div>


                  <div className="Multipage__1__HrDiv  Multipage__1__HrDivht"></div>


                  {/* Social Media */}

                    <div className='Multipage__1__SocialMedia'>

                        <h2>Join Us On Social Media</h2>

                        <div className='Multipage__1__SocialMediaLinkDiv'>

                          <Link href=''> <FaFacebookF/> </Link>
                          <Link href='' > <FaInstagram/> </Link>
                          <Link href=''> <FaYoutube/> </Link>
                          <Link href=''> <FaTwitter/> </Link>

                        </div>

                    </div>


                    {/* Tiney Footer */}

                    <div className='Multipage__1__Tiney'>

                          <TinyFooter/>

                        

                    </div>


                </Container>

                </section>



    </div>

  )
  
}

export default Footer