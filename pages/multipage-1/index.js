import Link from 'next/link'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Menubar from '../../Components/MultiPage/MultiPage-1/MenubarM1';
import Footer from '../../Components/MultiPage/MultiPage-1/FooterM1';

// icon
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";



// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, FreeMode , Navigation} from "swiper";




const index = () => {

  return (

    <div className='Multipage__1'>

        {/* ============================================================================= =========
                    Menubar
        ============================================================================================*/}

        <Menubar/>

        {/* ============================================================================= =========
                    Banner
        ============================================================================================*/}
      
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


        {/* ============================================================================= =========
                    Categories
        ============================================================================================*/}

        <section>

            <Container>

                <div className='Multipage__1__CategoriesDiv'>

                    <h2>Categories</h2>

                    <div>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            freeMode={true}
                            modules={[FreeMode, Navigation]}
                            className="mySwiper2"
                            navigation={true} 

                             breakpoints={{

                                300: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },

                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },

                                1280: {
                                    slidesPerView: 6,
                                    spaceBetween: 50,
                                },

                                1480: {
                                    slidesPerView: 7,
                                    spaceBetween: 50,
                                },


                                }}
                        >
                            
                           

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img1.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Vegetables</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img2.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Dairy Goods</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img3.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Meats</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img4.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Fish & Seafoods</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img5.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Fruits</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img6.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Tea & Coffee</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                            

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img7.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Foods & Chips</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img1.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Vegetables</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img2.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Dairy Goods</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img3.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Meats</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img4.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Fish & Seafoods</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>
                                <SwiperSlide>

                                    <Link href="/multipage-1/shop">
                                   
                                        <div className='Multipage__1__Categories__Slider__Div'>

                                            <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                                                <div className='Multipage__1__Categories__Slider__ImgDiv'>

                                                    <img src="/images/multipage-1/img5.png" alt="" />

                                                </div>

                                            </div>

                                        <h4>Fruits</h4> 

                                        </div>

                                    </Link>

                                </SwiperSlide>


                        </Swiper>

                    </div>

                </div>           

            </Container>

        </section>


        {/* ============================================================================= =========
                    Card 
        ============================================================================================*/}

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


        {/* ============================================================================= =========
                   Cart
        ============================================================================================*/}

        <section>

            <Container>

                <div className='Multipage__1__CardH2Div'>

                    <h2>Popular Products</h2>
                    
                </div>


                <div className="Multipage__1__grid-container">

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

                    {/* Card---- */}

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
                            <h5>All Natural Italian-Style Chicken Meatballs</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Foster Farms Takeout Crispy Classic Buffalo Wings</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Chobani Complete Vanilla Greek Yogurt</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Encore Seafoods Stuffed Alaskan Salmon</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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

                    {/* Card---- */}

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
                            <h5>All Natural Italian-Style Chicken Meatballs</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Foster Farms Takeout Crispy Classic Buffalo Wings</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Chobani Complete Vanilla Greek Yogurt</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

                    <div className="Multipage__1__grid-item">

                        <div className="Multipage__1__grid-itemAbs">

                            <Link href=""><AiOutlineHeart/></Link>

                            <Link href=""><AiFillHeart/></Link>

                        </div>

                        <div className="Multipage__1__CardImgBox">

                        <Link href="/multipage-1/product-details">

                        <img src="/images/multipage-1/img21.png" alt="" />

                        </Link>

                        </div>

                        <div className="Multipage__1__CardTxtBox">

                            <h4>BDT 1200 <span>BDT 1900</span></h4>
                            <h5>Encore Seafoods Stuffed Alaskan Salmon</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}



                </div>

                {/* ============================================================================
                        All Product
                ====================================================================================*/}

                <div className='Multipage__1__AllProductDiv'>

                    <h2>All Products</h2>

                    {/* <Link className='Multipage__1__AllProductDiv__Link' href="">Fruits & Vegetables</Link>
                    <Link href="">Dairy Goods</Link>
                    <Link href="">Meats</Link>
                    <Link href="">Fish & Seafoods</Link>
                    <Link href="">Fruits</Link>
                    <Link href="">Tea & Coffee</Link> */}

                </div>


                <div className="Multipage__1__grid-container">

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

                    {/* Card---- */}

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
                            <h5>All Natural Italian-Style Chicken Meatballs</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Foster Farms Takeout Crispy Classic Buffalo Wings</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Chobani Complete Vanilla Greek Yogurt</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Encore Seafoods Stuffed Alaskan Salmon</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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

                    {/* Card---- */}

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
                            <h5>All Natural Italian-Style Chicken Meatballs</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Foster Farms Takeout Crispy Classic Buffalo Wings</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

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
                            <h5>Chobani Complete Vanilla Greek Yogurt</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                    </div>

                    {/* Card---- */}

                    <div className="Multipage__1__grid-item">

                        <div className="Multipage__1__grid-itemAbs">

                            <Link href=""><AiOutlineHeart/></Link>

                            <Link href=""><AiFillHeart/></Link>

                        </div>

                        <div className="Multipage__1__CardImgBox">

                        <Link href="/multipage-1/product-details">

                            <img src="/images/multipage-1/img21.png" alt="" />

                        </Link>

                        </div>

                        <div className="Multipage__1__CardTxtBox">

                            <h4>BDT 1200 <span>BDT 1900</span></h4>
                            <h5>Encore Seafoods Stuffed Alaskan Salmon</h5>

                            <Link href='#placeAnOrder' className="bg6"> Add To Cart</Link>
                            <Link href='#placeAnOrder' className="bg5"> Order Now</Link>

                        </div>

                </div>

                 {/* Card---- */}



            </div>



            </Container>


        </section>

        <div className="Section__Gaps"></div>

        {/* ============================================================================= =========
                    Footer
        ============================================================================================*/}

        <section className='Multipage__1__FooterDiv' >

            <Footer/>

        </section>

        {/* ============================================================================= =========
                    Banner
        ============================================================================================*/}





    </div>

  )
}

export default index