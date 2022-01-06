import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/61O6PjlAPRL._SX3000_.jpg" alt=""/>
                
                <div className="home_row">
                <Product title ="Lenovo IdeaPad 3 11 Chromebook 11.6 Laptop, 11.6 HD (1366 x 768) Display, Intel Celeron N4020 Processor, 4GB LPDDR4 RAM, 64GB eMMC Storage, Intel UHD Graphics 600, Chrome OS, 82BA0003US, Onyx Black" price={159.99} 
                image='https://m.media-amazon.com/images/I/71XIwK5G75L._AC_SL1500_.jpg' rating={5} />
                <Product title ="HP Chromebook 14 Laptop, Intel Celeron N4020, 4 GB RAM, 32 GB eMMC, 14” HD Micro-Edge Display, Chrome OS, Thin & Portable, 4K Graphics, Backlit Ash Gray Keyboard (14a-na0024nr, 2021, Mineral Silver)" price={299.99} 
                image='https://m.media-amazon.com/images/I/81IDIvfiJ4L._AC_SL1500_.jpg' rating={3} />
                </div>
                <div className="home_row">
                <Product title ="Tracfone LG Stylo 5 4G LTE Prepaid Smartphone (Locked) - Black - 32GB - Sim Card Included - CDMA" price={79.99} 
                image='https://m.media-amazon.com/images/I/71ZGF619QwL._AC_SL1500_.jpg' rating={4} />
                <Product title ="Logitech G PRO X Wireless Lightspeed Gaming Headset - Shroud Edition" price={199.99} 
                image='https://m.media-amazon.com/images/I/610yRl5ecJS._AC_SL1284_.jpg' rating={4} />
                <Product title ="Logitech G635 DTS, X 7.1 Surround Sound LIGHTSYNC RGB PC Gaming Headset" price={99.99} 
                image='https://m.media-amazon.com/images/I/71V7EV7lkzL._AC_SL1500_.jpg' rating={1} />
                </div>
                <div className="home_row">
                <Product title ="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model" price={999.99} 
                image='https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg' rating={5} />
                </div>   
                <div className="home_row"><p>Built by Huan Bui (c)</p></div>             
            </div>
        </div>
        
        
    )
    
}

export default Home
