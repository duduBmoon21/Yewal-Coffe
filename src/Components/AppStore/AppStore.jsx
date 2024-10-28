import React from 'react';
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";


const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    weight: "100%",
};

const AppStore = () => {
  return (
    <div style={backgroundStyle} className='py-14'>
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-2 items-center gap-4">
            <div
                data-aos="fade-up"
                className='space-y-6 max-w-xl mx-auto'>
                {/* text Content*/}
               
                {/* Logo Section*/}
                <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                    <a href ="#">
                       
                    </a>
                    <a href ="#">
                        <img 
                            src={PlayStoreImg} 
                            alt=""
                            className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                        />
                    </a>
                </div>
            </div>
            <div></div>
        </div>
      </div>
     
    </div>
  );
};

export default AppStore;
