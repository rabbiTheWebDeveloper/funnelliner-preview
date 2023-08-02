import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";


// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Pagination, EffectCube } from "swiper";

// icon

import Order from '../../Components/LandingPage/Common/Order/Order';
import CustomerReview from '../../Components/LandingPage/Common/CustomerReview/CustomerReview';
import Video from '../../Components/LandingPage/Common/Video/Video';
import landingImageUrl from "../../public/images/landing-2/logo.svg";
import MenubarLeft from '../../Components/LandingPage/Common/Menubar/MenubarLeft';
import Footer4 from '../../Components/LandingPage/Common/Footer4/Footer4';




const ProbashiPackage = () => {

  return (

    <div className='Landing__2'>

      <div className="ProbashiPackage StudentPackage SariPackage">

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                Logo
         -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
       
        <section className="Logo">
          <Container>
            <Row>
              <Col lg={12}>

                <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

              </Col>
            </Row>
          </Container>
        </section>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Banner
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className="Banner">
          <div className="BannerOverlay">
            <img src="/images/landing-2/banner_bg.png" alt="" />
          </div>

          <div className="BannerContent">
            <Container>
              <Row className="d_flex">
                <Col lg={6}>
                  <div className="BannerText">
                    <h2>
                      ভালোবাসার মানুষের জন্য <br /> প্রবাসে থেকেও পাঠাতে পারেন{" "}
                    </h2>
                    <h1>
                      বিশেষ ভালোবাসা <br /> গিফট !
                    </h1>

                    <h3>প্যাকেজ মূল্যঃ ৯০০০ টাকা</h3>

                    <div className="OrderNow d_flex">
                      <div className="CallForOrder">
                        <Link href="#order">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          অর্ডার করুন
                        </Link>
                      </div>

                      <div className="BannerNumber">
                        <Link href="tel:01894844456">+8801894844456</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    ProbashiImgSlider
        -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className="ProbashiImgSlider">
          <Container>
            <Row className="justify-content-md-center">
              <Col lg={10}>
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="ProbashiImgSliderItem">
                      <img
                        src="/images/landing-2/ProbashiImgSlider.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="ProbashiImgSliderItem">
                      <img
                        src="/images/landing-2/ProbashiImgSlider.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="ProbashiImgSliderItem">
                      <img
                        src="/images/landing-2/ProbashiImgSlider.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    WhatHave
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className="WhatHave">
          <Container>
            <Row className="d_felx">
              <Col lg={6}>
                <div className="WhatHaveImg">
                  <img src="/images/landing-2/whathave.png" alt="" />
                  <div className="Overlay">
                    <h2>মুল্য-৯০০০ টাকা</h2>
                    <h3>সারা দেশে ফ্রি হোম ডেলিভারি</h3>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="WhatHavetext">
                  <h2>
                    কি কি থাকছে আমাদের এই <br /> প্রবাসী প্যাকেজে ?
                  </h2>

                  <ul>
                    <li>
                      <img src="/images/landing-2/why_buy1.png" alt="" />

                      <div className="text">
                        <h3>স্পেশাল শাড়ি বক্স</h3>
                        <p>শাড়ি,চুড়ি,টিপ,গাজরা,আংটি,নাকফুল,চকলেট</p>
                      </div>
                    </li>

                    <li>
                      <img src="/images/landing-2/why2.png" alt="" />

                      <div className="text">
                        <h3>স্পেশাল চকলেট বক্স</h3>
                        <p>
                          ১০ টি ডেইরি মিল্ক সিল্ক, ২০ টি ফাইভ স্টার, ১০ টি
                          কিটক্যাট
                        </p>
                      </div>
                    </li>

                    <li>
                      <img src="/images/landing-2/why1.png" alt="" />

                      <div className="text">
                        <h3>টেডি বিয়ার</h3>
                        <p>মিডিয়াম সাইজ টেডি বিয়ার</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Video
        -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
       
        <section className="Video">

          <Container>

            <Video></Video>

          </Container>

        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    SariAbout
        -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
        <section className="SariAbout">
          <Container>
            <Row className="d_flex">
              <Col lg={6}>
                <div className="SariAboutText">
                  <h2>
                    ভালোবাসার দিনে প্রিয়জনকে দিন <br /> আমাদের এই বিশেষ উপহার
                  </h2>
                  <p>
                    {" "}
                    কোটি টাকার বাড়ির চেয়েও একটি জামদানিতেই অনেক বেশি খুশি হন
                    বেশিরভাগ নারী। প্রিয় পোশাকের নাম জানতে চাইলে, সব বাঙালি নারী
                    মূহুর্তেই উত্তর দেবেন ‘শাড়ি’। প্রতিটি শাড়িই নারীর কাছে অনেক
                    অনেক প্রিয়। তাই তো বেশ কয়েক বছরও যদি পরা না হয়, তবুও শাড়িটি
                    ফেলে দিতে মন চায় না কারোই। হবেই বা না কেন, প্রতিটি শাড়ির
                    সঙ্গে যে জড়িয়ে থাকে উপলক্ষ, উৎসব, প্রিয় মানুষের ভালোবাসা,
                    অনেক অনেক স্মৃতি। তাই তো নারীর এত প্রিয় শাড়ি।
                  </p>

                  <p>
                    প্রতিটি শাড়ির সঙ্গে যে জড়িয়ে থাকে উপলক্ষ, উৎসব, প্রিয়
                    মানুষের ভালোবাসা, অনেক অনেক স্মৃতি। তাই তো নারীর এত প্রিয়
                    শাড়ি।
                  </p>

                  <div className="CallForOrder">
                    <Link href="#order">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      অর্ডার করুন <i className="flaticon-shopping-cart"></i>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="SariAboutSlider">
                  <div className="BannerSlider">
                    <Swiper
                      effect={"cube"}
                      grabCursor={true}
                      cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                      pagination={true}
                      modules={[EffectCube, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/landing-2/about_slider.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/landing-2/about_slider.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="BannerItem">
                          <div className="img">
                            <img
                              src="/images/landing-2/about_slider.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                CustomerReview
        -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
       
        <section className="CustomerReview">

            <Container>

                <CustomerReview></CustomerReview>

            </Container>

            <div className="section_gaps"></div>

        </section>

        {/* section_gaps */}
        <div className="section_gaps"></div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    OrderConfirmFrom
          -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section className="OrderConfirmFrom" id="order">

          <Order></Order>

        </section>


              
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Delivary
            -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

              
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                FollowUs
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
    

              
            


             {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Footer
                -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

                 <Footer4/>
                
                {/* <section className="StudentFooter">

                    <Container>

                        <Row className="d_flex d_justify">

                            <Col sm={6} xs={12}>

                                <div className="FooterItem">

                                    <ul>
                                        <li> <Link href=''>Terms & Conditions</Link> </li>
                                        <li> <Link href=''>Privacy Policy</Link> </li>
                                    </ul>
                                    
                                </div>

                            </Col>

                            <Col sm={6} xs={12}>

                                <div className="FooterLogo">
                                    <img src="images/landing-1/logo.svg" alt="" />
                                </div>

                            </Col>

                            <Col sm={12} xs={12}>

                                    <TinyFooter></TinyFooter>

                            </Col>

                        </Row>

                    </Container>

                </section> */}


      </div>

    </div>
  );
};

export default ProbashiPackage;
