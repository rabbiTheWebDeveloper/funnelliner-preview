// import AboutUs from '@/components/MultiPage/Common/AboutUs'
import AboutUs from '../../../Components/MultiPage/Common/AboutUs'
import Footer from '../../../Components/MultiPage/MultiPage-1/FooterM1'
import Menubar from '../../../Components/MultiPage/MultiPage-1/MenubarM1'
import React from 'react'

const index = () => {

  return (

    <div className='Multipage__1'>

            {/* ==========================================================================================
                    Menubar
            ==============================================================================================*/}

                <Menubar/>

            {/* ==========================================================================================
                   About Us
            ==============================================================================================*/}
            

                <AboutUs/>


            {/* ==========================================================================================
                    Footer
            ==============================================================================================*/}


                <Footer/>





    </div>

  )

}

export default index