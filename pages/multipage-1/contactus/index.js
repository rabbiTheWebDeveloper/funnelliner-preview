import React from 'react'
import Footer from '@/Components/MultiPage/MultiPage-1/FooterM1'
import Menubar from '@/Components/MultiPage/MultiPage-1/MenubarM1'
import ContactUs from '@/Components/MultiPage/Common/ContactUs'

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


            <ContactUs/>


        {/* ==========================================================================================
                Footer
        ==============================================================================================*/}


            <Footer/>





    </div>

  )

}

export default index