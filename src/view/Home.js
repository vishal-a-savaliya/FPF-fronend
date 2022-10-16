import React from 'react'
import Fileicon from '../img/folder-outline.svg'
import Printericon from '../img/printer-outline.svg'
import Sheeticon from '../img/file-outline.svg'
import Othericon from '../img/plus-circle-outline.svg'


import Product from '../componets/Product';

function Home() {


    return (

        // main four box
        <div>
            <div className='flex justify-center items-center mt-20'>

                <div className='mx-4'>

                    {/* for files */}
                    <Product title={"File"} color="#b692ff" svg={Fileicon} description={"File for your submition"} nav={"/orderfile"} />

                    {/* DE sheet */}
                    <Product title={"DE sheets"} color="#05b577" svg={Sheeticon} description={"DE sheets for all sem DE projects"} nav={"/"} />

                </div>

                <div>

                    {/* XEROX */}
                    <Product title={"Xerox"} color="#526fff" svg={Printericon} description={"xerox for more than 20 pages "} nav={"/xerox"} />

                    {/* other products */}
                    <Product title={"Other"} color="#fe8849" svg={Othericon} description={"Coming Soon..."} nav={"/"} s />

                </div>

            </div>
        </div>
    )
}

export default Home