import React from 'react';
import Img2 from "../../assets/coffee2.png";
import Img3 from "../../assets/coffee-white.png";
import { Link } from 'react-router-dom';
const ServicesData = [
    {
        id: 1,
        img: Img3,
        name: "Espresso",
        price: "45 ETB",
        description: "A strong, full-bodied coffee, perfect for an energy boost.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Img2,
        name: "Americano",
        price: "55 ETB",
        description: "A smooth blend that brings out the bold flavors of coffee.",
        aosDelay: "300",
    },
    {
        id: 3,
        img: Img3,
        name: "Cappuccino",
        price: "50 ETB",
        description: "Rich and creamy, topped with a perfect froth to start your day.",
        aosDelay: "600",
     },
];

const Services = () => {
    return (
      <>
        <span id="services"></span>
        <div className='py-10'>
            <div className="container">
                {/* header title*/}
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                    Discover Our Coffee Selection
                    </h1>
                </div>

                {/* Services card sections*/}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {ServicesData.map((data, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={index}
                            className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'
                        >
                            {/*Image sections*/}
                            <div className='h-[122px]'>
                                <img
                                    src={data.img}
                                    alt=""
                                    className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300'
                                />
                            </div>

                            {/* Text Content*/}
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>{data.name}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                <p className='text-green-600 group-hover:text-white duration-300 text-xxl line-clamp-2'>{data.price}</p>
                                <button className="bg-secondary px-4 py-2 rounded-full text-white hover:bg-secondary-dark duration-200">See Detail </button>
                            </div>
                         
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </> 
    );
};

export default Services;
