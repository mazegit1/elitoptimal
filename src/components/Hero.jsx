import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import slideimg1 from '../images/slideimg1.jpg';
import slideimg2 from '../images/slideimg2.png';
import slideimg3 from '../images/slideimg3.png';
import slideimg4 from '../images/slideimg4.png';

const images = [slideimg1, slideimg2, slideimg3, slideimg4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="hero bg-gray-200 text-white py-8 px-4 sm:py-16 sm:px-8">
      <div className="slider relative overflow-hidden w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[800px]">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <IoIosArrowDropleft
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={handlePrev}
          size={56} sm:size={72}
        />
        <IoIosArrowDropright
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={handleNext}
          size={56} sm:size={32}
        />
      </div>
    
      <div className="container mx-auto px-2 sm:px-4">
        <section className="mb-8 sm:mb-12">
          <motion.h2
            className="text-red-500 text-xl sm:text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            Категории
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            {['Бытовая техника', 'Телефоны и планшеты', 'Компьютерная техника', 'ТВ, Аудио, Фото-Видео'].map((category) => (
              <motion.div
                key={category}
                className="category bg-red-600 rounded-xl text-white p-3 sm:p-4 flex-1 flex items-center justify-center text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
              >
                {category}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <motion.h2
            className="text-red-500 text-xl sm:text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
          >
            Бренды
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            {['Bosch', 'Vestel', 'Samsung', 'LG', 'Huawei', 'Sony', 'Carrier', 'Babyliss', 'Philips', 'Delonghi'].map((brand) => (
              <motion.div
                key={brand}
                className="brand bg-white text-black p-3 sm:p-4 flex-1 flex items-center justify-center text-sm sm:text-base"
                initial={{ opacity: 0, rotate: -15 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring", damping: 10 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <motion.h2
            className="text-red-500 text-xl sm:text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
          >
            Товары
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: 'Блендер BRAUN JB3272SI BL', price: '199.99₼', oldPrice: '249.99₼' },
              { name: 'Блендер BRAUN JB3100BK BL', price: '149.99₼', oldPrice: '179.99₼' },
              { name: 'Утюг с Парогенератором Braun IS3132WH', price: '399.99₼', oldPrice: '499.99₼' },
            ].map((product) => (
              <motion.div
                key={product.name}
                className="product bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
              >
                <h3 className="text-black text-lg sm:text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-400 line-through">{product.oldPrice}</p>
                <p className="text-red-500 text-lg sm:text-xl font-semibold">{product.price}</p>
                <button className="mt-2 sm:mt-4 bg-red-500 text-white py-2 px-3 sm:py-2 sm:px-4 rounded hover:bg-red-600">
                  Купить
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            className="text-red-500 text-xl sm:text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
          >
            Специальные предложения
          </motion.h2>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {[
              { name: 'Ноутбук Acer Aspire A315-59-38U6', price: '799.99₼', oldPrice: '1039.99₼' },
              { name: 'Ноутбук Acer Aspire A315-59G-5283', price: '1349.99₼', oldPrice: '1649.99₼' },
            ].map((offer) => (
              <motion.div
                key={offer.name}
                className="offer bg-white p-3 sm:p-4 rounded-lg text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
              >
                <h3 className="text-black text-lg sm:text-xl font-semibold">{offer.name}</h3>
                <p className="text-gray-400 line-through">{offer.oldPrice}</p>
                <p className="text-red-500 text-lg sm:text-xl font-semibold">{offer.price}</p>
                <button className="mt-2 sm:mt-4 bg-red-500 text-white py-2 px-3 sm:py-2 sm:px-4 rounded hover:bg-red-600">
                  Купить
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
