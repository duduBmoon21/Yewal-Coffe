import React from 'react'; 
import Slider from "react-slick";

// Import local images
import Image1 from '../../assets/1x/c11.jpg';
import Image2 from '../../assets/1x/c7.jpg';
import Image3 from '../../assets/1x/c3.jpg';
import Image4 from '../../assets/1x/c4.jpg';
import Image5 from '../../assets/1x/c5.jpg';
import Image6 from '../../assets/1x/c6.jpg';

const TestimonialData = [
    { id: 1, img: Image1 },
    { id: 2, img: Image2 },
    { id: 3, img: Image3 },
    { id: 4, img: Image4 },
    { id: 5, img: Image5 },
    { id: 6, img: Image6 },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ]
    };

    return (
        <div className='py-14 mb-10'>
            <div className='container'>
                {/* Header Section */}
                <div data-aos="fade-up" className='text-center mb-10'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                        Our Customers Enjoying Our Coffee
                    </h1>
                </div>
                {/* Image Slider */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className='my-6' key={data.id}>
                                <div className='shadow-lg mx-4 rounded-xl overflow-hidden'>
                                    {/* Image Section: Full Card */}
                                    <img 
                                        src={data.img} 
                                        alt={`Customer ${data.id}`} 
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
