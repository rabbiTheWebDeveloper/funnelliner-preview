import React from 'react'
import Link from 'next/link';
import style from '../Footer4/footer4.module.css'
import { Col, Container, Row } from 'react-bootstrap';


// icon

import { MdLocationOn } from "react-icons/md";


const Footer4 = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (

        <div className={style.Footer4}>

            <section className={style.Footer4Sec}>

                <Container>

                    <Row>

                        <Col>

                            <div className={style.FooterMainDiv}>

                                <div className={style.FooterMainDiv1}>

                                    <Link href="#">

                                        <h4> <MdLocationOn /> Kuril, Vatara, Dhaka-1229, Bangladesh</h4>

                                    </Link>

                                </div>

                                <div className={style.FooterMainDiv2}>

                                    <Link href="">

                                        <h4> Privacy Policy</h4>

                                    </Link>

                                    <Link href="">

                                        <h4> Terms & Conditions</h4>

                                    </Link>


                                </div>

                            </div>



                            <div id="tinyFooter2" className={style.tinyFooter2}>

                             
                                <div className={style.Hr}></div>

                                <div className={style.d_flex}>

                                    <p >&copy; {year} All Rights Reserved  Designed by <Link href='https://funnelliner.com/' >Funnel Liner</Link> </p>

                                </div>

                           </div>



                        </Col>

                    </Row>

                </Container>
            </section>




        </div>


    )
}

export default Footer4
