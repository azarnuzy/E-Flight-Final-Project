import React from 'react';
import logo from '../../assets/Logo.png';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="text-center items-center text-white p-5">
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-10">
          <div className="lg:ml-[60px] mx-auto">
            <div className="flex  gap-2 mb-4 mx-auto md:justify-start justify-center">
              <img src={logo} alt="" className="w-[25px]" />
              <span className="text-white text-xl">FlyKet</span>
            </div>
            <p className="text-white text-justify text-sm lg:w-[370px] w-[300px]">
              Flyket is an online platform that allows users to purchase
              electronic flight tickets from various airlines. It is a
              convenient and hassle-free way to book flights and manage travel
              itineraries.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-white lg:mt-5 lg:ml-10 mt-8">
            <Link to={'/aboutUs'} className="bg-primary hover:text-color5">
              <p>About Us</p>
            </Link>
            <Link to={'/termsOfUse'} className="bg-primary hover:text-color5">
              <p>Terms of Use</p>
            </Link>
            <Link to={'/contactUs'} className="bg-primary hover:text-color5">
              <p>Contact Us</p>
            </Link>
          </div>
          <div className="lg:ml-[200px] lg:mt-5 mt-6">
            <h5 className="text-xl font-bold">Follow Us:</h5>
            <div className="flex gap-2 justify-center items-center my-5 text-xl">
              <a href="https://youtube.com/">
                <FaYoutube className="hover:text-color5" />
              </a>
              <a href="https://instagram.com/">
                <FaInstagram className="hover:text-color5" />
              </a>
              <a href="https://facebook.com/">
                <FaFacebook className="hover:text-color5" />
              </a>
              <a href="https://twitter.com/">
                <FaTwitter className="hover:text-color5" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 mb-5 lg:mb-0 text-white">
          Copyright &copy; 2022 Flyket. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
