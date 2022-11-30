import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLogin } from '../../features/user/userSlice';

export default function Navbar() {
  const navigate = useNavigate();

  const isLogin = useSelector(getLogin).isLogin
  console.log(isLogin)
  return (
    <div className="w-full bg-primary flex justify-between px-5 py-2 fixed top-0 z-10">
      <Link to={'/'} className="flex items-center gap-3 my-2 ">
        <img src={logo} alt="" className="w-[40px]" />{' '}
        <span className="text-white text-2xl">FlyKet</span>
      </Link>
      {/* <div className="py-2 border-t-0 border-x-0 border-b-2 border-slate-50 w-[40vw] border-solid  my-3 lg:flex justify-between items-center hidden">
        <input
          type="text"
          className="outline-none bg-transparent placeholder:text-gray-200 ml-3 w-full"
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
      </div> */}
      <div className="flex gap-3 items-center">
        <button onClick={() => navigate(`/notification`)}>
          <IoIosNotifications className="text-white text-2xl" />
        </button>
        {isLogin ? 
          <div>
            <p>Ini sudah login</p>
          </div>
        :
          
          <Link
            className="text-primary bg-white py-1 px-3 rounded-md"
            // onClick={() => navigate(`/login`)}n
            to={'/login'}
          >
            Login
          </Link>
        }
        <Link className="bg-primary text-white py-1 px-3" to={'/myprofile'}>
          My Profile
        </Link>
      </div>
    </div>
  );
}
