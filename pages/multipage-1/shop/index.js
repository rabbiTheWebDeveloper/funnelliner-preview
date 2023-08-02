import Link from 'next/link'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../../../Components/MultiPage/MultiPage-1/FooterM1'
import Menubar from '../../../Components/MultiPage/MultiPage-1/MenubarM1'


// icon
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";


// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination} from "swiper";



const index = () => {

  return (

    <div className='Multipage__1'>

        {/* =======================================================================
            Menubar
        ==============================================================================*/}

         <Menubar/>

        {/* =====================================================================================
            Banner
        ======================================================================================*/}
      
      <section>

        <Container>

        <div className='Multipage__1__SwiperDiv'>

        <Swiper  pagination={{
                clickable: true,}}
                modules={[Pagination]} 
                className="mySwiper"
            >

            <SwiperSlide>

                <div class="Multipage__1__SliderContantDiv">

                    <img src="/images/multipage-1/banner.png" alt="" />

                      <div className='Multipage__1__SliderContantDiv__Abs'>

                        <div>

                            <h1> Get The Best <br/> 

                            <span className='Multipage__1__H1s1'>Organic </span>
                             <span className='Multipage__1__H1s2'> Honey</span> <br/> 
                             <span className='Multipage__1__H1s3'> For </span>
                              Your Family 
                            
                            </h1>

                            <Link href='#placeAnOrder' className="bg"> Order Now</Link>

                            <Link href='#placeAnOrder' className="bg2">  View All Products</Link>


                        </div>

                      </div>  

                </div>

            </SwiperSlide>

            
            <SwiperSlide>

                <div className="Multipage__1__SliderContantDiv">

                    <img src="/images/multipage-1/banner.png" alt="" />

                      <div className='Multipage__1__SliderContantDiv__Abs'>

                        <div>

                            <h1> Get The Best <br/> 

                            <span className='Multipage__1__H1s1'>Organic </span>
                             <span className='Multipage__1__H1s2'> Honey</span> <br/> 
                             <span className='Multipage__1__H1s3'> For </span>
                              Your Family 
                            
                            </h1>

                            <Link href='#placeAnOrder' className="bg"> Order Now</Link>

                            <Link href='#placeAnOrder' className="bg2">  View All Products</Link>


                        </div>

                      </div>  

                </div>

            </SwiperSlide>

            <SwiperSlide>

                <div className="Multipage__1__SliderContantDiv">

                    <img src="/images/multipage-1/banner.png" alt="" />

                      <div className='Multipage__1__SliderContantDiv__Abs'>

                        <div>

                            <h1> Get The Best <br/> 

                            <span className='Multipage__1__H1s1'>Organic </span>
                             <span className='Multipage__1__H1s2'> Honey</span> <br/> 
                             <span className='Multipage__1__H1s3'> For </span>
                              Your Family 
                            
                            </h1>

                            <Link href='#placeAnOrder' className="bg"> Order Now</Link>

                            <Link href='#placeAnOrder' className="bg2">  View All Products</Link>


                        </div>

                      </div>  

                </div>

            </SwiperSlide>


         </Swiper>

       </div>

      </Container>


      </section>


      {/* =======================================================================================
                          All Product
      ====================================================================================*/}

      <Container>

          <div className='Multipage__1__AllProductDiv Multipage__1__AllProductDiv2'>

              <h2>All Products</h2>
{/* 
              <Link className='Multipage__1__AllProductDiv__Link' href="">Fruits & Vegetables</Link>
              <Link href="">Dairy Goods</Link>
              <Link href="">Meats</Link>
              <Link href="">Fish & Seafoods</Link>
              <Link href="">Fruits</Link>
              <Link href="">Tea & Coffee</Link> */}

          </div>

      </Container>

      

        {/* =====================================================================================
          Product
        ======================================================================================*/}

        <section>

          <Container>

              <Row className='Multipage__1__MyPad'>

                <Col xs={12} sm={6} md={4} lg={3}>

                  <div className='Multipage__1__AccrodingDivMain'>


                    <h4>Sort By:</h4>

                    <div className='Multipage__1__AccrodingDiv'>

                     

                      <Accordion >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header> Price Low To High</Accordion.Header>
                            <Accordion.Body>
                            
                                <ul>

                                  <li>
                                    <Link href="">Price Low To High</Link>
                                  </li>

                                  <li>
                                    <Link href="">Price High To low</Link>
                                  </li>

                                  <li>
                                    <Link href="">Price Low To High</Link>
                                  </li>

                                  <li>
                                    <Link href="">Price High To low</Link>
                                  </li>
                                    
            
                                </ul>

                            </Accordion.Body>
                            
                        </Accordion.Item>
                    
                      </Accordion>

                    </div>

                    <div className='Multipage__1__AccrodingDiv'>

                    <h4>Filter By:</h4>

                      <Accordion >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Price BDT 0 - BDT 500</Accordion.Header>
                            <Accordion.Body>
                            <ul>
                                  <li>
                                    <Link href="">BDT 0 - BDT 500</Link>
                                  </li>

                                  <li>
                                    <Link href="">BDT 501 - BDT 1500</Link>
                                  </li>

                                  <li>
                                    <Link href="">BDT 501 - BDT 1500</Link>
                                  </li>

                                  <li>
                                    <Link href="">BDT 2501 - BDT 5000</Link>
                                  </li>
                                    
                                    
                                  
                                   
                                  
                              </ul>

                            </Accordion.Body>

                        </Accordion.Item>
                    
                      </Accordion>

                    </div>


                  </div>

                
                
                </Col>

                <Col xs={12} sm={6} md={8} lg={9}>

                    <Row>

                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                            <img src="/images/multipage-1/img12.png" alt="" />

                        </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                            <img src="/images/multipage-1/img13.png" alt="" />

                          </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                            <img src="/images/multipage-1/img14.png" alt="" />

                            </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                          <img src="/images/multipage-1/img15.png" alt="" />

                          </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                                <img src="/images/multipage-1/img16.png" alt="" />

                            </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                            <img src="/images/multipage-1/img17.png" alt="" />

                          </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>

                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                            <img src="/images/multipage-1/img18.png" alt="" />

                          </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                              <Link href="/multipage-1/product-details">

                                <img src="/images/multipage-1/img19.png" alt="" />

                            </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                            <img src="/images/multipage-1/img20.png" alt="" />

                            </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                          <img src="/images/multipage-1/img12.png" alt="" />

                          </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                             <Link href="/multipage-1/product-details">

                                <img src="/images/multipage-1/img13.png" alt="" />

                            </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>
                      <Col xs={6} sm={12} md={6} lg={4}>

                          
                        <div className="Multipage__1__grid-item">

                          <div className="Multipage__1__grid-itemAbs">

                              <Link href=""><AiOutlineHeart/></Link>

                              <Link href=""><AiFillHeart/></Link>

                          </div>

                          <div className="Multipage__1__CardImgBox">

                          <Link href="/multipage-1/product-details">

                             <img src="/images/multipage-1/img14.png" alt="" />

                          </Link>

                          </div>

                          <div className="Multipage__1__CardTxtBox">

                              <h4>BDT 1200 <span>BDT 1900</span></h4>
                              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>

                              <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                              <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                          </div>

                        </div>

                      </Col>

                      




                      

                    </Row>
                
                </Col >


              </Row>

          </Container>

        </section>


        {/* =====================================================================================
                pagination
        ============================================================================================*/}

          <section>

            <Container>

              <div className='Multipage__1__Pagination'>

                  <div className="Multipage__1__center">

                      <div className="Multipage__1__pagination">
                          <a href="#">&laquo; Previous</a>
                          <a href="#">1</a>
                          <a href="#" className="Multipage__1__active">2</a>
                          <a href="#">3</a>
                          <a href="#">4</a>
                          <a href="#">5</a>
                          <a href="#">6</a>
                          <a href="#">&raquo; Next</a>
                      </div>

                  </div>

              </div>

            </Container>

          </section>


        {/* =====================================================================================
            Card
        ======================================================================================*/}

          
        <section>

          <Container>

              <Row>

                  <Col lg={4}>

                      <div className='Multipage__1__CardDiv'>

                          <div className='Multipage__1__CardAbs'>

                                  <img src="/images/multipage-1/img8.png" alt="" />

                                  <img src="/images/multipage-1/img9.png" alt="" />

                                  <h4>Get the <span>fresh food</span> out of the farm</h4>

                          </div>

                      </div>
                  
                  </Col>

                  <Col lg={4}>


                      <div className='Multipage__1__CardDiv'>

                          <div className='Multipage__1__CardAbs2'>
                              
                              <h4> <span>Organic Fruits</span> Straight <br/> From Our Garden</h4>

                              <Link href='#placeAnOrder' className="bg3"> Order Now</Link>

                              <img src="/images/multipage-1/img11.png" alt="" />

                          </div>



                      </div>
                  
                  </Col>

                  <Col lg={4}>

                      <div className='Multipage__1__CardDiv Multipage__1__CardDiv3'>
                    
                          <div className='Multipage__1__CardAbs3'>

                              <h4> <span>Fresh Butchered Meat</span> Direct To Your Home</h4>                             

                              <img src="/images/multipage-1/img10.png" alt="" />

                              <Link href='#placeAnOrder' className="bg3 bg4"> Order Now</Link>

                          </div>

                      </div>
                  
                  </Col>


              </Row>

          </Container>

        </section>





        <div className="Section__Gaps"></div>

        {/* =======================================================================
             Footer
        ==============================================================================*/}
      
      <Footer/>

    </div>

  )
}

export default index