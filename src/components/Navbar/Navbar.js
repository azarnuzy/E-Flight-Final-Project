import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div className="w-full bg-primary flex justify-between px-3">
      <Link to={'/'} className="flex items-center gap-3 my-2 ">
        <img src={logo} alt="" className="w-[60px]" />{' '}
        <span className="text-white text-2xl">FlyKet</span>
      </Link>
      <div className="py-2 border-t-0 border-x-0 border-b-2 border-slate-50 w-[40vw] border-solid  my-3 flex justify-between items-center">
        <input
          type="text"
          className="outline-none bg-transparent text-white w-full"
          id="search-movie"
          placeholder="Search"
          // value={keyword}
          // onChange={(e) => setKeyword(e.target.value)}
          // onKeyDown={(e) => {
          //   if (keyword.length > 0) {
          //     handleKeyPressed(e);
          //   }
          // }}
        />
        <label htmlFor="search-movie">
          <AiOutlineSearch className="text-white mr-3" />
        </label>
      </div>
      <div className="flex gap-3 items-center">
        <button className="text-white">Login</button>
        <button className="text-primary bg-white py-2 px-3 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
}
