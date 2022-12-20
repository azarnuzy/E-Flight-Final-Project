import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { IoIosNotifications } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getLogin, getUser } from '../../features/user/userSlice';
import ava from '../../assets/profile_picture.png';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();

  const [isLoginVal, setIsLoginVal] = useState(false);
  const isLogin = useSelector(getLogin);

  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('user-info'))?.email;

  useEffect(() => {
    if (email !== undefined) {
      dispatch(fetchUser(email));
    }
  }, [dispatch, email]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user-info') !== null)) {
      setIsLoginVal(true);
    }
  }, [isLogin]);

  return (
    <div className="w-full bg-primary flex items-center justify-between px-5 py-2 fixed top-0 z-10">
      <Link to={'/'} className="flex items-center gap-3 my-2 ">
        <img src={logo} alt="" className="w-[40px]" />{' '}
        <span className="text-white text-2xl">FlyKet</span>
      </Link>
      {isLoginVal ? (
        <div className="flex gap-3 items-center">
          <button onClick={() => navigate(`/notification`)}>
            <IoIosNotifications className="text-white text-2xl" />
          </button>
          <Link to={'/myprofile'}>
            <img
              src={user?.imgUrl || ava}
              alt=""
              className="w-[40px] h-[42px] rounded-full"
            />
          </Link>
        </div>
      ) : (
        <Link
          className="text-primary bg-white flex items-center py-2 px-4 rounded-md"
          to={'/login'}
        >
          Login
        </Link>
      )}
    </div>
  );
}
