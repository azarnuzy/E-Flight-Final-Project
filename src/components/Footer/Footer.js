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
        <div className='grid grid-cols-3 mt-5'>
          <div className='items-start mx-5'>
            <div className='flex flex-row gap-2 my-2'>
              <img src={logo} alt="" className="w-[30px]" />{' '}
              <span className="text-white text-2xl">FlyKet</span>
            </div>
            <p className='text-white text-justify w-[300px]'>Flyket is E-flight Website </p>
          </div>
          <div className='flex flex-col gap-2 text-white m-5'>
            <p>Privacy Police</p>
            <p>About Us</p>
            <p>Terms of Use</p>
          </div>
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
        <p className="mt-2 text-white">
          Copyright &copy; 2022 Flyket. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
