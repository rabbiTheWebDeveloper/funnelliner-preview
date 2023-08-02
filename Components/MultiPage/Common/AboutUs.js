import Link from 'next/link'
import React from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import {IoIosArrowForward } from "react-icons/io";

const AboutUs = () => {

  return (

    
    <div className='AboutUsMultipage'>


    {/* ===================================================================================================
                        AboutUs banner
    ========================================================================================================*/}



        <div className="AboutUsMultipage__bannerBg">

            <img src="/images/multipage-1/aboutbg.png" alt="" />

            <div className='AboutUsMultipage__bannerTxtDiv'>

                <Container>

                    <Row>

                        <Col>

                                <div className='AboutUsMultipage__bannerTxt'>

                                    <h2>About Iconic</h2>

                                    <h4><Link href="/multipage-1">Home <IoIosArrowForward/> </Link> <Link href="/multipage-1/aboutus">About</Link></h4>
                                    
                                </div>

                        </Col>

                    </Row>
                    
                </Container>

            </div>

       
        </div>


        <div className="Section__Gaps"></div>


    {/* ===================================================================================================
                        AboutUs banner
    ========================================================================================================*/}

    <section>

        <Container>

            <Row>

                <Col sm={12} lg={10}>

                    <div className='AboutUsMultipage__AboutDiv'>

                        <h2>About Us</h2>

                        <h5>Connect and support all people in the world</h5>

                        <p>
                            It is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century 
                            BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends 
                            of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the 
                            first book Liber Primus and its discussion on hedonism, the words of which had been altered,
                             added and removed to make it nonsensical and improper Latin.
                        </p>

                        <br/>

                        <p>
                            It is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century 
                            BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends 
                            of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the 
                            first book Liber Primus and its discussion on hedonism, the words of which had been altered,
                             added and removed to make it nonsensical and improper Latin.
                        </p>


                        <div className='AboutUsMultipageHr'></div>


                        <h2>Our mission is to make building websites easier for everyone.</h2>

                         <p>
                            This philosophical work, also known as On the Ends 
                            of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the 
                            first book Liber Primus and its discussion on hedonism, the words of which had been altered,
                             added and removed to make it nonsensical and improper Latin.
                        </p>

                        <div className='AboutUsMultipageHr'></div>


                        <h2> Websites easier for everyone.</h2>

                         <p>
                            This philosophical work, also known as On the Ends 
                            of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the 
                            first book Liber Primus and its discussion on hedonism, the words of which had been altered,
                             added and removed to make it nonsensical and improper Latin.
                        </p>

                        <div className='AboutUsMultipageHr'></div>


                        <h2>Our mission </h2>

                         <p>
                            This philosophical work, also known as On the Ends 
                            of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the 
                            first book Liber Primus and its discussion on hedonism, the words of which had been altered,
                             added and removed to make it nonsensical and improper Latin.
                        </p>



                    </div>

                </Col>

            </Row>

        </Container>


    </section>


    <div className="Section__Gaps"></div>





    </div>







  )


}

export default AboutUs