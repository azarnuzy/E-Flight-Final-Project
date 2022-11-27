import React from 'react';
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
      <div className="text-center items-center text-white bg-primary p-10">
        <div className="flex gap-2 justify-center my-5 text-lg">
          <a href='https://youtube.com/'><FaYoutube className='hover:text-color5'/></a>
          <a href='https://instagram.com/'><FaInstagram className='hover:text-color5'/></a>
          <a href='https://facebook.com/'><FaFacebook className='hover:text-color5'/></a>
          <a href='https://twitter.com/'><FaTwitter className='hover:text-color5'/></a>
        </div>
        <p>Explore the world with Flyket.</p>
        <p className="mt-2 text-white">Copyright &copy; 2022 Flyket. All Right Reserved.</p>
      </div>
    </footer>
  );
}
