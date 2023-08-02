import Link from 'next/link';
import React from 'react';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCheck2Circle} from 'react-icons/bs';



import landingImageUrl from "../../public/images/landing-8/logo.svg";
import MenubarLeft from '../../Components/LandingPage/Common/Menubar/MenubarLeft';
import Order from '../../Components/LandingPage/Common/Order/Order';
import CustomerReview from '../../Components/LandingPage/Common/CustomerReview/CustomerReview';
import Video from '../../Components/LandingPage/Common/Video/Video';
import Footer4 from '../../Components/LandingPage/Common/Footer4/Footer4';



const index = () => {
    

  return (

    <div className='Landing__8'>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Banner
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className="Banner">

            <div className="img_center">

                <img className='' src="/images/landing-8/dashed-circle.svg" alt="" />

            </div>

            <div className="img_right">

                <img className='' src="/images/landing-8/bannerdesign.svg" alt="" />

            </div>
            
            <div className="img_bottom_right">

                <img className='' src="/images/landing-8/cross.svg" alt="" />

            </div>

            <Container>

            <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                <Row>

                    <Col lg={5}>

                        <div className="Logo">

                            {/* <img className='' src="/images/landing-8/logo.svg" alt="" /> */}

                        </div>

                        <div className="text">

                            <h1>অরজিনাল <span>চামড়ার লেদার</span>  মানিব্যাগ টিকবে বছরের পর বছর </h1>

                            <div className="textBox">

                                <h2>ডিস্কাউন্ট মূল্য:</h2>

                                <div className="textCircle">

                                <img className='' src="/images/landing-8/textCircle.svg" alt="" />

                                <h2>২৫৫০</h2>

                                </div>

                                <h2>টাকা</h2>

                            </div>

                        </div>
                                        
                    </Col>

                    <Col lg={7} className='d-flex justify-content-center'>

                        <div className="bannerBG">
                            <img className="backgroundOne" src="/images/landing-8/circle-yellowbg.png" alt="" />


                            <img className="wallet" src="/images/landing-8/wallet.png" alt="" />

                        </div>
                    
                    </Col>

                </Row>

                <Row className='justify-content-start'>
                    
                    <Col lg={8}>

                        <div className="btnBox">
                                        
                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                            <h2>ডেলিভারী চার্জ ফ্রি</h2>


                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            WhyUs From Us
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        

        <section className="WhyUs">

            <div className="LeftImage">

                <img className="imgBlack" src="/images/landing-8/dotted.svg" alt="" />

            </div>

            <div className="RightImage">

                <img className="imgBlack" src="/images/landing-8/dotted.svg" alt="" />

            </div>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={10} xs={12}>

                    <div className="headerTitle">

                        <h2>আমাদের থেকে কেন কিনবেন?</h2>

                    </div>

                    <div className="text">

                        <p>আমরা আপনাকে দিচ্ছে ১০০% অরজিনাল চামড়ার লেদার মানিব্যাগ। মানিব্যাগটি টেকসই এবং আরামদায়ক এবং কমফোর্টেবল পায় ব্যবহার করার সময়। মাঝারি থেকে বড় সাইজ ফ্যাশনেবলভাবে আসল চামড়া বা কৃত্রিম ব্যবহার করে ডিজাইন করা হয়। স্টাইলটি চটকদার এবং রঙটি ট্রেন্ডি। মানিব্যাগটি দীর্ঘস্থায়ী এবং দেখতে সুন্দর</p>
                        

                    </div>
                    
                    </Col>

                </Row>

            </Container>

        </section>

        {/* Section Gaps */}
        <div className="section_gaps"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Wallets Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className="Wallets">

            <div className="RightImage">

                <img className="imgBlack" src="/images/landing-8/dotted_square.svg" alt="" />

            </div>
                    
            <Container>

                <Row>

                <Col lg={3} xs={6}>
                    <div className="Image">

                    <img className="imgItem" src="/images/landing-8/wallet1 (2).png" alt="" />

                    </div>
                
                </Col>

                <Col lg={3} xs={6}>
                    <div className="Image">

                    <img className="imgItem" src="/images/landing-8/wallet2.png" alt="" />

                    </div>
                
                </Col>

                <Col lg={3} xs={6}>
                    <div className="Image">

                    <img className="imgItem" src="/images/landing-8/wallet3.png" alt="" />

                    </div>
                
                </Col>

                <Col lg={3} xs={6}>
                    <div className="Image">

                    <img className="imgItem" src="/images/landing-8/wallet4.png" alt="" />

                    </div>
                
                </Col>

                </Row>

                <Row className='justify-content-center'>
                        
                    <Col lg={8}>

                        <div className="btnBox">
                                        
                            <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করুন</Link>


                        </div>

                    </Col>

                </Row>

            </Container>

        </section>


        {/* Section Gaps */}

        <div className="section_gaps"></div>

         {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Video
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        

            <Container>
                    
                <Video></Video>

            </Container>




        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Specification
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className="Specification">

            <div className="LeftImage">

                <img className="imgBlack" src="/images/landing-8/wave.svg" alt="" />

            </div>

            <div className="LeftImage2">

                <img className="imgBlack" src="/images/landing-8/quarter_circle.svg" alt="" />

            </div>
            <div className="RightImage">

                <img className="imgBlack" src="/images/landing-8/Ellipse.svg" alt="" />

            </div>

            <Container>

                <Row className='justify-content-center'>

                    <Col lg={10} xs={12}>

                        <h1>কেন এই স্টাইলিশ 100%<br/> <span> চামড়া মানিব্যাগ</span> ওয়ালেট ব্যবহার করবেন?</h1>
                    
                    </Col>

                </Row>

                <Row className='mt-lg-5 mt-2 row-eq-height'>

                    <Col lg={4} md={6}>
                        <div className="IconBox">
                            <div className="icon">
                                <BsCheck2Circle/>

                            </div>
                        <div className="text">

                            <p>প্রিমিয়াম কোয়ালিটি 100% আসল চামড়া</p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="IconBox">
                            <div className="icon">
                                <BsCheck2Circle/>

                            </div> 
                        <div className="text">

                            <p>খাঁটি চামড়া দিয়ে তৈরি মানিব্যাগ আপনার ব্যক্তিত্বের বহি:প্রকাশ ঘটাবে।</p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="IconBox">
                            <div className="icon">
                                <BsCheck2Circle/>

                            </div>
                        <div className="text">

                            <p>টেকসই স্টাইলটি চটকদার উচ্চ গুনসম্পন্ন মানিব্যাগ </p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="IconBox">
                            <div className="icon">
                                <BsCheck2Circle/>

                            </div>
                        <div className="text">

                            <p>আমাদের থেকে জেনুইন লেদার মানি ব্যাগ কিনুন সেরা দামে </p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="IconBox">
                            <div className="icon">
                                <BsCheck2Circle/>

                            </div>
                        <div className="text">

                            <p>আপনি বন্ধু, বিবাহ, ইভেন্টের বা অফিসের সহকর্মীকে উপহার দিতে পারেন। </p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="IconBox">
                            <div className="icon">
                                <BsCheck2Circle/>

                            </div>
                        <div className="text">

                            <p>এতে 20টি পকেট রয়েছে। ক্রেডিট কার্ড, নগদ, চাবি, ড্রাইভার লাইসেন্স দৈনন্দিন জিনিসপত্র বহন করা সহজ </p>
                        
                        </div>
                            
                        </div>
                    
                    </Col>

                </Row>

            </Container>


        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Phone Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        

        <section className="PhoneSection">

        <Container>

            <Row className='justify-content-center'>

              <Col>

                <div className="btnBox">
                                        
                <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করুন</Link>

                </div>

                

                <div className="text">

                  <h2>+8801894844452</h2>

                  <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                </div>
              
              </Col>

            </Row>
            
          </Container>



        </section>

          {/* Section Gaps */}

          <div className="section_gaps"></div>

          {/* -------------------------------------------------------------------------------------------
                            CustomerReview
            -----------------------------------------------------------------------------------------------*/}


            <CustomerReview></CustomerReview>    



        {/* Section Gaps */}

        <div className="section_gaps"></div>
        
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Form Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        


        <section id="placeAnOrder">
        
            <Order></Order>

        </section>

        {/* Section Gaps */}
        <div className="section_gaps"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer Icon Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className="Info">

            <Container>

                <Row className='mt-5 justify-content-between'>

                    <Col xs={4} lg={3}>
                        <div className="IconBox">
                            <div className="icon">

                                <img className="imgBlack" src="/images/landing-8/original.png" alt="" />


                            </div>
                        <div className="text">

                            <h4>১০০% অরিজিনাল</h4>
                        
                        </div>
                            
                        </div>

                    </Col>
                    <Col xs={4} lg={3}>
                        <div className="IconBox">
                            <div className="icon">

                                <img className="imgBlack" src="/images/landing-8/box.png" alt="" />


                            </div>
                        <div className="text">

                            <h4>৭ দিনের মধ্যে রিটার্ন</h4>
                        
                        </div>
                            
                        </div>

                    </Col>
                    <Col xs={4} lg={3}>
                        <div className="IconBox">
                            <div className="icon">

                                <img className="imgBlack" src="/images/landing-8/secured.png" alt="" />


                            </div>
                        <div className="text">

                            <h4>ওয়ারেন্টি আছে </h4>
                        
                        </div>
                            
                        </div>

                    </Col>
                </Row>
            </Container>

        </section>

         {/* Section Gaps */}
         <div className="section_gaps"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Order Button Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className="OrderBtn">

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className="DisplayBox">

                                <div className="LeftImage">

                                    <img className="imgBlack" src="/images/landing-8/rays.svg" alt="" />

                                </div>

                                
                                <div className="RightImage">

                                    <img className="imgBlack" src="/images/landing-8/rays.svg" alt="" />

                                </div>

                                <h1>৩০% ডিস্কাউন্ট এর পর মূল্যেঃ ১৬৯০ টাকা</h1>

                                <h2>অর্ডার করতে নিচের বাটনে ক্লিক করুন</h2>

                                <div className="btnBox">
                                        
                                    <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart/> অর্ডার করুন</Link>


                                </div>
                        </div>

                    </Col>

                </Row>

            </Container>
            
        </section>

        {/* Section Gaps */}
        <div className="section_gaps"></div>
        {/* Section Gaps */}
        <div className="section_gaps"></div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Footer Widget Section
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

            <Footer4/>

        {/* <section className="FooterWidget">

            

            <Container className=''>


                <Row className='front my-3 '>

                    <Col lg={4} xl={4}>

                        <div className="footerMenu">

                            <h5>Contact Us</h5>

                                <ul className=''>

                                    <li><Link href="#"><BsTelephone/>
                                        00 0392 96 32</Link>
                                    </li>

                                    <li><Link href="#"><FiMail/>
                                        oder@freshen.com</Link>
                                    </li>

                                </ul>

                        </div>

                    </Col>

                    <Col lg={3} xl={4} className=''>

                        <div className="footerMenu">

                            <h5>Important Link</h5>

                                <ul className=''>

                                    <li>
                                        <Link href="#">Refund Policy </Link>
                                    </li>

                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>

                                    <li>
                                        <Link href="#">Terms and Conditions</Link>
                                    </li>

                                </ul>

                        </div>

                    </Col>

                    <Col lg={5} xl={4}>

                        <div className="footerMenu">

                            

                            <h2 className='text-lg-end'>+8801894844452</h2>
                            <h5 className='text-lg-end text-center'>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                        </div>

                    </Col>
                    <hr className='mt-4' />


                </Row>

                <Row>

                    <Col lg={6}>
                        <div className="socialBox">

                            <ul className="social">

                                <li>
                                    <Link href="#"><FaFacebookF/></Link>
                                </li>

                                <li>
                                    <Link href="#"><FaTwitter/></Link>
                                </li>

                                <li>
                                    <Link href="#"><FaGooglePlus/></Link>
                                </li>

                                <li>
                                    <Link href="#"><FaLinkedinIn/></Link>
                                </li>

                            </ul>
                        </div>

                        
                    
                    </Col>

                    <Col lg={6} className=' justify-content-lg-end justify-content-center'>


                    <TinyFooter></TinyFooter>

                    
                    </Col>
                </Row>

            </Container>

        </section> */}





    </div>
  )
}

export default index