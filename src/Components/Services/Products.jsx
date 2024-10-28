import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Img2 from "../../assets/coffee2.png";
import Img3 from "../../assets/coffee-white.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductData = [
    {
        id: 1,
        img: Img3,
        name: "Espresso",
        price: "45 ETB",
        description: "A strong, full-bodied coffee, perfect for an energy boost.",
    },
    {
        id: 2,
        img: Img2,
        name: "Americano",
        price: "55 ETB",
        description: "A smooth blend that brings out the bold flavors of coffee.",
    },
    {
        id: 3,
        img: Img3,
        name: "Cappuccino",
        price: "50 ETB",
        description: "Rich and creamy, topped with a perfect froth to start your day.",
    },
];

const Product = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
      <div className='py-10 bg-gray-50'>
        <div className="container">
            {/* Header Title */}
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                    Discover Our Coffee Selection
                </h1>
            </div>

            {/* Product Slider Section */}
            <Slider {...sliderSettings} className="product-slider">
                {ProductData.map((product) => (
                    <div key={product.id} className="p-4">
                        <div className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] mx-auto group relative'>
                            {/* Product Image */}
                            <div className='h-[122px]'>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300'
                                />
                            </div>

                            {/* Product Details */}
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>{product.name}</h1>
                                <h1 className='text-xl font-bold'>{product.price}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                                    {product.description}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="p-4 flex justify-center gap-3">
                                <Link
                                    to={`/product/${product.id}`}
                                    className="bg-secondary px-4 py-2 rounded-full text-white hover:bg-secondary-dark duration-200"
                                >
                                    See Detail
                                </Link>
                                <button
                                    className="bg-primary px-4 py-2 rounded-full text-white hover:bg-primary-dark duration-200"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    );
};

// Placeholder function for adding items to cart
const addToCart = (product) => {
    alert(`${product.name} added to cart!`);
};

export default Product;
