import React from 'react'
import Link from 'next/link';

// Bootstrap

import { Col, Container, Row } from 'react-bootstrap';

// icon

import { AiOutlineShoppingCart } from 'react-icons/ai';


// Common 

import landingImageUrl from "../../public/images/landing-27/logo.png";
import MenubarLeft from '../../Components/LandingPage/Common/Menubar/MenubarLeft';
import Order from '../../Components/LandingPage/Common/Order/Order';
import CustomerReview from '../../Components/LandingPage/Common/CustomerReview/CustomerReview';
import Video from '../../Components/LandingPage/Common/Video/Video';
import Footer4 from '../../Components/LandingPage/Common/Footer4/Footer4';



const index = () => {

    return (

        <div className='Landing__27'>


            {/* =======================================================================================
                    Logo
        ============================================================================================*/}

            <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

            {/* =======================================================================================
                    Banner
        ============================================================================================*/}

            <section className='Landing__27__Banner'>

                <img className='Landing__27__Banner__bg' src="/images/landing-27/bg.png" alt="" />


                {/* Landing__27__Banner__Content */}

                <div className="Landing__27__Banner__Content">

                    <Container>

                        <Row className='d_flex Landing__27__collumnRev'>

                            <Col lg={6}>

                                <div className="Landing__27__Banner__TextContent">

                                    <h5>স্মার্ট লুঙ্গি অনলাইন শপ</h5>

                                    <h1>গুণমান আমাদের প্রথম অগ্রাধিকার নতুন লুঙ্গির বাংলাদেশে </h1>

                                    <div className="Landing__27__Banner__Order">

                                        <Link href='#placeAnOrder' className="bg"> <AiOutlineShoppingCart />অর্ডার করুন</Link>

                                        <div className='Landing__27__RelText'>

                                            <div className='Landing__27__AbsB_Box'>

                                                <img src="images/landing-27/img3.png" alt="" />

                                                <h6>01894844452</h6>

                                            </div>

                                        </div>

                                    </div>

                                    <h2>ডিস্কাউন্ট মূল্যঃ  ১৬৫০ টাকা</h2>

                                </div>

                            </Col>

                            <Col lg={6}>

                                <div className="Landing__27__Banner__Img">

                                    <img className="Landing__27__Banner__Img1" src="/images/landing-27/img2.png" alt="" />

                                    <img className="Landing__27__Banner__Img2" src="/images/landing-27/img1.png" alt="" />

                                    <div className="Landing__27__Banner__H4__Div">

                                        <h4>স্টাইলিশ পুরুষদের 100% খাঁটি তুলা লুঙ্গি</h4>

                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </div>

            </section>

            <div className="Landing__27__section_gaps"></div>


            {/* =======================================================================================
                    Card
        ============================================================================================*/}

            <section>

                <Container>

                    <div className="Landing__27__CardH2">

                        <h2 >পুরুষদের জন্য সাশ্রয়ী মূল্যে উচ্চ মানের  আমাদের ৬ টি লুঙ্গি</h2>
                    </div>

                    <Row>

                        <Col lg={4}>

                            <div className="Landing__27__Card">

                                <img src="/images/landing-27/img4.png" alt="" />

                                <h4>স্টাইলিশ পুরুষদের স্ট্রাইপ লুঙ্গি</h4>

                            </div>

                        </Col>

                        <Col lg={4}>

                            <div className="Landing__27__Card">

                                <img src="/images/landing-27/img5.png" alt="" />

                                <h4>স্টাইলিশ পুরুষের পাঠশালা লুঙ্গি</h4>

                            </div>

                        </Col>

                        <Col lg={4}>

                            <div className="Landing__27__Card">

                                <img src="/images/landing-27/img6.png" alt="" />

                                <h4>ফ্যাশনেবল পুরুষের স্ট্রাইপ লুঙ্গি</h4>

                            </div>

                        </Col>

                        <Col lg={4}>

                            <div className="Landing__27__Card">

                                <img src="/images/landing-27/img7.png" alt="" />

                                <h4>একদম স্টাইলিশ লুঙ্গি পুরুষদের</h4>

                            </div>

                        </Col>

                        <Col lg={4}>

                            <div className="Landing__27__Card">

                                <img src="/images/landing-27/img8.png" alt="" />

                                <h4>আকর্ষণীয় স্ট্রাইপ লুঙ্গি পুরুষের</h4>

                            </div>

                        </Col>

                        <Col lg={4}>

                            <div className="Landing__27__Card">

                                <img src="/images/landing-27/img9.png" alt="" />

                                <h4>স্টাইল বাণিজ্যে লুঙ্গি পুরুষদের</h4>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


            <div className="Landing__27__section_gaps"></div>

            {/* =======================================================================================
                    Lungi Details
        ============================================================================================*/}

            <section>

                <Container>

                    <div className="Landing__27__Lungi_Details">

                        <div className="Landing__27__Lungi_DetailsH2">

                            <h2>আমাদের লুঙ্গি গুলা সম্পর্কে আরো বেশি কিছু  আলোচনা করা হল </h2>

                        </div>

                        <p>

                            আমাদের লুঙ্গি গুলা  অফার, 3 কিনুন 1টি বিনামূল্যে! আমাদের এই লুঙ্গি গুলা খুব স্টান্ডার্ট মানের
                            স্টাইলিশ পুরুষদের জন্য  বাংলাদেশে বেশির ভাগ লুঙ্গি উৎপাদন হয় নরসিংদী, পাবনা ও সিরাজগঞ্জ
                            জেলায়। লুঙ্গির সবচেয়ে বড় পাইকারি বাজার বসে নরসিংদীর বাবুরহাট, সিরাগঞ্জের শাহজাদপুর ও টাঙ্গাইলের
                            করটিয়ায়। মূলত এসব বাজার থেকেই আমরা ভালো স্ট্যান্ডার্ড মানের  ব্যবসায়ীরা জন্য লুঙ্গি কিনে তা
                            ক্রেতাদের নিকট সরবরাহ করে থাকি ।

                        </p>

                    </div>

                </Container>

            </section>


            <div className="Landing__27__section_gaps"></div>

            {/* =======================================================================================
                     Lungi Details2
        ============================================================================================*/}

            <section>

                <Container fluid>

                    <div className="Landing__27__LungiDetails2">

                        <img className="Landing__27__LungiImg" src="/images/landing-27/bg2.png" alt="" />

                        <div className="Landing__27__LungiDetails2Abs">

                            <div className="Landing__27__LungiDetails2AbsImgDiv">

                                <img src="/images/landing-27/img10.png" alt="" />

                            </div>

                            <div className="Landing__27__LungiDetails2Img6Div">

                                <div>

                                    <img src="/images/landing-27/img11.png" alt="" />

                                    <h4>মিনি চেক প্যাটার্ন</h4>

                                </div>

                                <div>

                                    <img src="/images/landing-27/img12.png" alt="" />

                                    <h4>নীল এবং লাল রঙ</h4>

                                </div>

                                <div>

                                    <img src="/images/landing-27/img13.png" alt="" />

                                    <h4>100% পিওর  কটন </h4>

                                </div>

                                <div>

                                    <img src="/images/landing-27/img14.png" alt="" />

                                    <h4>হ্যান্ড ওয়াশ এন্ড হালকা মেশিন ধোয়া</h4>

                                </div>

                                <div>

                                    <img src="/images/landing-27/img15.png" alt="" />

                                    <h4> ৫.৫ হাত লুঙ্গি</h4>

                                </div>

                                <div>

                                    <img src="/images/landing-27/img16.png" alt="" />

                                    <h4>নীল এবং লাল রঙ</h4>

                                </div>

                            </div>

                        </div>

                    </div>

                </Container>

            </section>



            {/* =======================================================================================
                   Details Table
             ============================================================================================*/}

            <section className="Landing__27__DetailsTable">

                <Container>

                    <h2>আরো কিছু তথ্য আমাদের এই ব্র্যান্ড লুঙ্গির </h2>

                    <div class="grid-container">

                        <div class="grid-item">WEIGHT</div>

                        <div class="grid-item">0.22 kg</div>

                        <div class="grid-item">DIMENSIONS</div>

                        <div class="grid-item">28 × 12 × 2 cm</div>

                        <div class="grid-item">BRAND</div>

                        <div class="grid-item">Lungi</div>

                        <div class="grid-item">TYPE</div>

                        <div class="grid-item">Non-Stitched</div>

                        <div class="grid-item">SIZE</div>

                        <div class="grid-item">2.10m</div>

                        <div class="grid-item">COLOR</div>

                        <div class="grid-item">Blue Lungis, Red</div>

                    </div>

                </Container>

            </section>



            {/* =======================================================================================
                  CustomerReview
        ============================================================================================*/}

            <section className="Landing__27__CustomerReview">

                <img className="Landing__27__VideoImg1" src="/images/landing-27/img17.png" alt="" />

                <img className="Landing__27__VideoImg2" src="/images/landing-27/img18.png" alt="" />

                <Container>

                    <Video></Video>

                    <div className="Landing__27__section_gaps"></div>

                    <CustomerReview></CustomerReview>

                </Container>

            </section>

            <div className="Landing__27__section_gaps"></div>

            {/* =======================================================================================
                    Details-3
            ============================================================================================*/}

            <section>

                <div className="Landing__27__Details-3">

                    <Container fluid>

                        <img src="/images/landing-27/img19.png" alt="" />

                    </Container>

                </div>

            </section>

            <div className="Landing__27__section_gaps"></div>

            {/* =======================================================================================
                    Order Sec
            ============================================================================================*/}

            <section className='Landing__27__OrderSec'>

                <div className='Landing__27__OrderSecAbs'>

                    <Container>

                        <div id="placeAnOrder">

                            <Order></Order>

                        </div>

                    </Container>

                </div>

            </section>


            <div className="Landing__27__section_gaps"></div>

            {/* =======================================================================================
                   Shipping Details
            ============================================================================================*/}

            <section>

                <Container>

                    <div className='Landing__27__ShippingDetails'>

                        <div>

                            <img src="/images/landing-27/img21.png" alt="" />

                            <h4>ফ্রি শিপিং</h4>

                        </div>

                        <div>

                            <img src="/images/landing-27/img21.png" alt="" />

                            <h4>5 দিনের রিটার্ন পলিসি</h4>

                        </div>

                        <div>

                            <img src="/images/landing-27/img21.png" alt="" />

                            <h4>100% নিরাপদ পেমেন্ট</h4>

                        </div>

                        <div>

                            <img src="/images/landing-27/img21.png" alt="" />

                            <h4>ক্যাশ অন ডেলিভারি</h4>

                        </div>

                    </div>

                </Container>

            </section>


            <div className="Landing__27__section_gaps"></div>

    


       {/* =======================================================================================
                   Footer
        ============================================================================================*/}

            <Footer4/>


            {/* <section className='Landing__27__FooterSec'>

                <Container>

                    <div className='Landing__27__FooterContant'>

                        <img className='Landing__27__FooterContantImg' src="/images/landing-27/logo2.png" alt="" />

                        <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                        <h3>+8801799733234</h3>

                        <div className='Landing__27__Hr'></div>

                        <ul>

                            <li>
                                <Link href="">শর্তাবলী</Link>
                            </li>

                            <li>
                                <Link href="">প্রাইভেসী পলিসি</Link>
                            </li>

                        </ul>

                        <SocialMedia></SocialMedia>

                        <TinyFooter></TinyFooter>



                    </div>

                </Container>

            </section> */}



            {/* =======================================================================================
                    Banner
        ============================================================================================*/}




        </div>

    )

}

export default index