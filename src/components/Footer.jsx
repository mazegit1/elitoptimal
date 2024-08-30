import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcJcb } from 'react-icons/fa'; 
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between gap-6">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        >
          <h3 className="text-red-500 text-lg font-semibold">Личный Кабинет</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Мои заказы</a></li>
            <li><a href="/" className="hover:text-gray-400">История заказов</a></li>
            <li><a href="/" className="hover:text-gray-400">Список желаний</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
        >
          <h3 className="text-red-500 text-lg font-semibold">Дополнительно</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Сервисы</a></li>
            <li><a href="/" className="hover:text-gray-400">Условия эксплуатации</a></li>
            <li><a href="/" className="hover:text-gray-400">Информация</a></li>
            <li><a href="/" className="hover:text-gray-400">Корпоративные продажи</a></li>
            <li><a href="/" className="hover:text-gray-400">Политика конфиденциальности</a></li>
            <li><a href="/" className="hover:text-gray-400">Служба поддержки</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        >
          <h3 className="text-red-500 text-lg font-semibold">Кампании</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Бренды</a></li>
            <li><a href="/" className="hover:text-gray-400">Филиалы</a></li>
            <li><a href="/" className="hover:text-gray-400">Вакансии</a></li>
            <li><a href="/" className="hover:text-gray-400">Обратная связь</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        >
          <h3 className="text-red-500 text-lg font-semibold">Контактная информация</h3>
          <p className="text-gray-400">Адрес: Ашиг Молла Джума 46Б, город Баку, Наримановский район</p>
          <p className="text-gray-400 hover:text-red-600">Email: <a href="mailto:editor.azer@gmail.com">editor.azer@gmail.com</a></p>
        </motion.div>
      </div>

      <div className="container mx-auto border-t border-gray-700 mt-8 pt-4">
        <div className="flex flex-wrap justify-between items-center">
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
          >
            Верги ödəyicisinin adı: “ELIT EO” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏT<br />
            Dövlət qeydiyyatı № (VÖEN): 1406293461<br />
            Vergi ödəyicisinin ünvanı: Bakı şəhəri, Nərimanov rayonu, Aşıq Molla Cümə 46B
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
          >
            <a href="/" className="text-gray-400 hover:text-red-500 text-3xl"><FaFacebookF /></a>
            <a href="https://www.instagram.com/xelil_ovw/" className="text-gray-400 text-3xl hover:text-red-500"><FaInstagram /></a>
            <a href="/" className="text-gray-400 text-3xl hover:text-red-500"><FaTelegramPlane /></a>
            <a href="https://www.linkedin.com/in/huseyn-xalil-7022262bb/" className="text-gray-400 text-3xl hover:text-red-500"><FaLinkedinIn /></a>
            <a href="/" className="text-gray-400 text-3xl hover:text-red-500"><FaYoutube /></a>
            <a href="/" className="text-gray-400 text-3xl hover:text-red-500"><FaWhatsapp /></a>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
          >
            <FaCcVisa className="text-8xl text-gray-400" />
            <FaCcMastercard className="text-8xl text-gray-400" />
            <FaCcAmex className="text-8xl text-gray-400" />
            <FaCcJcb className="text-8xl text-gray-400" />
          </motion.div>
        </div>

        <motion.p
          className="text-gray-400 text-center text-sm mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
        >
          Copyright © 2024 "ELİT EO" MMC. All rights reserved.<br />
          Created by: <a href="https://amiroff.az" className="hover:text-red-500">Mazegit</a>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
