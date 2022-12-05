import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLogin } from '../../features/user/userSlice';
import ava from '../../assets/profile_picture.png';
import { getEmail } from '../../features/auth/authSlice';

export default function Navbar() {
  const navigate = useNavigate();

  const isLogin = useSelector(getLogin).isLogin;
  console.log(isLogin);

  const email = useSelector(getEmail) || null;
  if (email !== null) {
    console.log(email);
  }
  return (
    <div className="w-full bg-primary flex justify-between px-5 py-2 fixed top-0 z-10">
      <Link to={'/'} className="flex items-center gap-3 my-2 ">
        <img src={logo} alt="" className="w-[40px]" />{' '}
        <span className="text-white text-2xl">FlyKet</span>
      </Link>
      <div className="flex gap-3 items-center">
        <button onClick={() => navigate(`/notification`)}>
          <IoIosNotifications className="text-white text-2xl" />
        </button>
        {isLogin ? (
          <Link to={'/myprofile'}>
            <img src={ava} alt="" className="w-8" />
          </Link>
        ) : (
          <Link
            className="text-primary bg-white py-1 px-3 rounded-md"
            to={'/login'}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
