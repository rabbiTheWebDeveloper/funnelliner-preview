import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'
import Footer from '@/Components/MultiPage/MultiPage-1/FooterM1'
import Menubar from '@/Components/MultiPage/MultiPage-1/MenubarM1'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';



// Swiper 
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";


// icon

import { AiFillStar,AiOutlineShoppingCart,AiFillMinusCircle, AiOutlineHeart,AiOutlineGooglePlus,AiFillFacebook,AiOutlineTwitter} from "react-icons/ai";


const index = () => {

  const [thumbsSwiper, setThumbsSwiper] =  useState(null);
  const now = 90;
    
  return (

    <div className='Multipage__1'>

      {/* ====================================================================================
            Menubar
      ===========================================================================================*/}

      <Menubar/>

      {/* ====================================================================================
            SliderOneImg
      ===========================================================================================*/}

      <section>

        <Container>

            <Row>

              <Col lg={6}>

                <div className='Multipage__1__SliderOneImg'>

                  <>
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      loop={true}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >

                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgBox'>

                          <img src="/images/multipage-1/img12.png" />

                        </div>

                      </SwiperSlide>

                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgBox'>

                          <img src="/images/multipage-1/img13.png" />

                        </div>

                      </SwiperSlide>
                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgBox'>

                          <img src="/images/multipage-1/img14.png" />

                        </div>

                      </SwiperSlide>
                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgBox'>

                          <img src="/images/multipage-1/img15.png" />

                        </div>

                      </SwiperSlide>
                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgBox'>

                          <img src="/images/multipage-1/img16.png" />

                        </div>

                      </SwiperSlide>
                      
                  
                    </Swiper>


                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >

                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgSmall'>

                          <img src="/images/multipage-1/img12.png" />
                          
                        </div>

                      </SwiperSlide>

                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgSmall'>

                          <img src="/images/multipage-1/img13.png" />

                        </div>

                      </SwiperSlide>
                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgSmall'>

                          <img src="/images/multipage-1/img14.png" />

                        </div>

                      </SwiperSlide>
                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgSmall'>

                          <img src="/images/multipage-1/img15.png" />

                        </div>

                      </SwiperSlide>
                      <SwiperSlide>

                        <div className='Multipage__1__ThambImgSmall'>

                          <img src="/images/multipage-1/img16.png" />

                        </div>

                      </SwiperSlide>
                     
                    
                    </Swiper>
                  </>


                </div>

              
              </Col>

              <Col lg={6}>

                <div className='Multipage__1__CartDetails'>

                  <div className='Multipage__1__CartInstcok'>IN STOCK</div>
                  
                  <h2>Seeds of Change Organic Quinoa, Brown</h2>

                  <div className='Multipage__1__CartStarDiv'>

                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>

                      <span>5 Ratings / 53 reviews </span>

                  </div>

                  <div className='Multipage__1__CartTKDiv'>
                    <h3>250 TK</h3>
                    <h4>34 TK</h4>
                    <span></span>
                    <h6>You Save TK. 37</h6>

                  </div>

                  <div className='Multipage__1__CartButtonDiv2'>

                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, 
                      corrupti reiciendis minima nisi modi, quasi, odio minus dolore 
                      impedit fuga eum eligendi.</p>

                  </div>


                  <div className='Multipage__1__CartButtonDiv'>

                    <Link href='#placeAnOrder' className="bg"><AiOutlineShoppingCart/> Order Now</Link>

                    <div>

                      <button><AiFillMinusCircle/></button>
                      <span>2</span>
                      <button>+</button>

                    </div>

                  </div>


                  <div className='Multipage__1__CartColorDiv'>

                    <ul>

                      <li>
                          <h4>Color</h4>

                          <div className='Multipage__1__CartColorButton'>

                            <button></button>
                            <button></button>
                            <button></button>

                          </div>
                          
                      </li>

                      <li>
                          <h4>Size</h4>

                          <div className='Multipage__1__CartColorButton2'>

                            <button>S</button>
                            <button>M</button>
                            <button>L</button>

                          <Link href="">
                            <AiOutlineHeart/>
                            Add to Wishlist
                          </Link>
                        
                          </div>

                      </li>


                    </ul>


                  </div>


                  <div className='Multipage__1__ShareDiv'>

                      <h4>Share:</h4>

                    <Link href=""><AiOutlineGooglePlus/> </Link>
                    <Link href=""> <AiFillFacebook/></Link>
                    <Link href=""> <AiOutlineTwitter/></Link>
                      
                  </div>


                      
                </div>
              
              </Col>

            </Row>

        </Container>

      </section>

    
      {/* ====================================================================================
            Reviews
      ===========================================================================================*/}

      <div className='Multipage__1__ReviewsDiv'>

        <Container>

        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="Description">

                <div className='Multipage__1__DesDiv'>

                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
                  
                  <ul>
                    <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                    <li>Vivamus finibus vel mauris ut vehicula.</li>
                    <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                  </ul>
                  
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>


                </div>

            </Tab>


            <Tab eventKey="profile" title="Additional information">

              <div className='Multipage__1__InformationDiv'>

                <div>

                  <p>Weight</p>
                  <p>1 kg</p>


                </div>

                <div>
                  <p>Dimensions	</p>
                  <p>224 × 65 × 564 cm</p>

                </div>

                <div>

                      <p>Brand</p>

                </div>


              </div>
              
            </Tab>


            <Tab eventKey="longer-tab" title=" Reviews (9)">

                <div>
                    
                    <Row>

                        <Col lg={6}>

                          <div className='Multipage__1__ReviewsDiv '>

                            <h2>Customer questions & answers</h2>

                            <div className='Multipage__1__ReviewsDiv2 '>

                                <div className='Multipage__1__ReviewsDiv3 '>

                                  <img src="/images/multipage-1/img26.png" alt="" />

                                  <ul>
                                    <li> <h4>Ibrahim Husain</h4></li>
                                    <li> <h6>April 6, 2023 at 3:21 AM</h6></li>
                                  </ul>

                                </div>

                                <div className='Multipage__1__ReviewsDivIcon '> 

                                   <div className='Multipage__1__CartStarDiv'>

                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>

                                    </div>

                                </div>
                            </div>

                            <p>Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about.</p>

                            <div className='Multipage__1__ReviewsDiv2 '>

                                <div className='Multipage__1__ReviewsDiv3 '>

                                  <img src="/images/multipage-1/img27.png" alt="" />

                                  <ul>
                                    <li> <h4>Bessie Cooper</h4></li>
                                    <li> <h6>April 6, 2023 at 3:21 AM</h6></li>
                                  </ul>

                                </div>

                                <div className='Multipage__1__ReviewsDivIcon '> 

                                   <div className='Multipage__1__CartStarDiv'>

                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>

                                    </div>

                                </div>
                              </div>

                              <p>Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about.</p>

                          </div>

                        </Col>

                        <Col lg={6}>

                          <div className='Multipage__1__CustomerDiv'>
                              <h2>Customer reviews</h2>
                              
                              <div className='Multipage__1__CartStarDiv'>

                                <span>4.8 out of 5</span>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                

                                </div>

                                <div className='Multipage__1__Progress'>

                                <h4>5 star</h4>
                                <ProgressBar now={now} label={`${now}%`} />

                                <h5>How are ratings calculated?</h5>

                                </div>

                          </div>

                          

                        </Col>


                    </Row>

                </div>
              
            </Tab>
            
        </Tabs>
            

        </Container>


      </div>
      


      {/* ====================================================================================
            Add a Review
      ===========================================================================================*/}

        <section>

          <Container>

              <div className='Multipage__1__AddReview'>

                <h4>Add a review</h4>

                <div className='Multipage__1__CartStarDiv'>

                    <span>Your Rating</span>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>

                </div>

                <h5>Your review *</h5>
                
                <Form action="">

                  <div className='Multipage__1__FromDiv'>

                    <textarea className='Multipage__1__Fromtxt' type="text" />

                    <h5>Name*</h5>
                    <input className='Multipage__1__Fromtxt2' type="text" />

                    <h5>Email*</h5>
                    <input className='Multipage__1__Fromtxt2' type="text" />

                      <br/><br/>

                      <div className='Multipage__1__checkbox'>

                      <input type="checkbox" />

                      <p>Save my name, email, and website in this browser for the next time I comment.</p>  

                      </div>

                      <input className='Multipage__1__FromDivS' type="submit" />
                
                  </div>
              

          </Form>
                
                  


              </div>

              


          </Container>

        </section>



      <div className="Section__Gaps"></div>

      {/* ====================================================================================
            Menubar
      ===========================================================================================*/}

      <Footer/>


    </div>

  )
}

export default index