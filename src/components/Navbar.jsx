import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { GoVerified, GoPersonFill } from 'react-icons/go';
import { FaPhoneVolume, FaShoppingCart } from 'react-icons/fa';
import { IoHeartCircle } from 'react-icons/io5';
import heroimg from '../images/herologo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <nav className="navbar text-white">
      <div className="navbar-top border-b border-b-black bg-[#FF1E37] flex items-center justify-between py-4 px-4 md:px-10 lg:px-32">
        <motion.div className="block md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {isMenuOpen ? (
            <AiOutlineClose className="text-3xl text-black cursor-pointer" onClick={toggleMenu} />
          ) : (
            <AiOutlineMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
          )}
        </motion.div>

        <motion.div className="hidden md:flex gap-8">
          {['Кампании', 'Бренды', 'Филиалы', 'Контакты', 'SAMSUNG', 'Кредит'].map((link, index) => (
            <motion.a
              key={index}
              href="/"
              className="hover:text-gray-300 transition-transform duration-200"
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <GoVerified />
            <span>Регистрация</span>
          </motion.div>
          <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <GoPersonFill />
            <span>Личный кабинет</span>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`absolute top-0 left-0 w-full bg-white text-[#FF1E37] z-10 p-4 ${isMenuOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <AiOutlineClose className="text-3xl text-black cursor-pointer" onClick={toggleMenu} />
        </div>

        <motion.div className="flex flex-col gap-4">
          {['Кампании', 'Бренды', 'Филиалы', 'Контакты', 'SAMSUNG', 'Кредит'].map((link, index) => (
            <motion.a
              key={index}
              href="/"
              className="hover:text-black hover:border-b hover:border-b-black transition-all text-xl ease-in-out duration-200"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <div className="navbar-bottom flex flex-col md:flex-row items-center py-10 px-4 md:px-10 lg:px-32 justify-between">
        <motion.img
          src={heroimg}
          className="w-2/3 md:w-1/5 mb-4 md:mb-0"
          alt="Hero Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.input
          type="text"
          placeholder="Поиск..."
          className="text-gray-600 border-2 rounded-3xl border-[#FF1E37] px-4 py-2 mb-4 md:mb-0 w-full md:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="flex gap-6 items-start mb-4 md:mb-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaPhoneVolume className="text-red-600 text-4xl" />
          <div>
            <h1 className="text-red-600 font-semibold text-sm md:text-md">*4848</h1>
            <p className="text-[#636363] text-xs md:text-sm">
              Будни 09:00 - 20:00 <br />
              Выходные 10:00 - 18:00
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <IoHeartCircle className="text-red-600 text-3xl md:text-4xl" />
          <FaShoppingCart className="text-red-600 text-3xl md:text-4xl" />
          <span className="text-gray-500">О Товаров - 0.00₼</span>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
