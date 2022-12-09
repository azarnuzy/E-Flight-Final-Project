import React from 'react';
import logo from '../../assets/Logo.png';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    // <div className="w-full flex items-center justify-center flex-col md:absolute md:bottom-0 bg-primary py-3">
    //   <div className="flex justify-center flex-col text-center text-white">
    //     <div className="font-medium">
    //       <span className="font-semibold">FlyKet </span> is a E-Flight Company{' '}
    //     </div>
    //     <span className="font-medium">
    //       copyright © 2022, made with ❤️ in Indonesia
    //     </span>
    //   </div>
    // </div>
    <footer>
      <div className="text-center items-center text-white bg-primary p-5">
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-10">
          <div className="lg:ml-[60px] mx-auto">
            <div className="flex flex-row gap-2 my-2">
              <img src={logo} alt="" className="w-[25px]" />
              <span className="text-white text-xl">FlyKet</span>
            </div>
            <p className="text-white text-justify text-sm lg:w-[350px] w-[300px]">
              Flyket is an electronic plane ticket purchasing website that makes
              it easier and more effective
            </p>
          </div>
          <div className="flex flex-col gap-1 text-white lg:m-3 lg:ml-10 mt-8">
            <button className="bg-primary hover:text-color5">
              <p>Contact Us</p>
            </button>
            <button className="bg-primary hover:text-color5">
              <p>About Us</p>
            </button>
            <button className="bg-primary hover:text-color5">
              <p>Terms of Use</p>
            </button>
          </div>
          <div className="lg:ml-[200px] lg:mt-3 mt-6">
            <h5 className="text-xl font-bold">Ikuti Kami:</h5>
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
