import React, { useState } from 'react';
import { AiFillBook, AiFillCaretRight } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../assets/Logo.png';
import { setStatusAdmin } from '../../features/admin/adminSlice';
import { setisLogin } from '../../features/user/userSlice';

function Sidebar() {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: 'Do you want to Log Out?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        dispatch(setisLogin(false));
        navigate('/login');
      } else if (result.isDenied) {
        Swal.fire('Log Out Failed!', '', 'info');
      }
    });
  };
  return (
    <div
      className={` ${
        open ? 'w-60' : 'w-20 '
      } bg-primary h-screen p-5  pt-8 relative duration-300`}
    >
      <div
        className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-primary
     border-2 rounded-full bg-white  ${
       !open && 'rotate-180'
     } flex justify-center items-center text-primary `}
        onClick={() => setOpen(!open)}
      >
        <AiFillCaretRight className="transform scale-110" />
      </div>
      <button
        onClick={() => {
          navigate('/');
        }}
        className="flex gap-x-4 items-center"
      >
        <img
          alt="sidebarLogo"
          src={logo}
          className={`w-6 cursor-pointer duration-500 ${
            open && 'rotate-[360deg]'
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && 'scale-0'
          }`}
        >
          FlyKet
        </h1>
      </button>
      <ul className="pt-6">
        <li
          key={1}
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-gray-300 hover:text-primary text-sm items-center gap-x-4 
        `}
          onClick={() => {
            dispatch(setStatusAdmin('idle'));
            navigate('/admin/bookingList');
          }}
        >
          <AiFillBook />
          <span
            className={`${
              !open && 'hidden'
            } origin-left duration-200 font-semibold`}
          >
            Booking List
          </span>
        </li>
        <li
          key={2}
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-gray-300 hover:text-primary text-sm items-center gap-x-4 
        `}
          onClick={() => {
            dispatch(setStatusAdmin('idle'));
            navigate('/admin/waitingList');
          }}
        >
          <AiFillBook />
          <span
            className={`${
              !open && 'hidden'
            } origin-left duration-200 font-semibold`}
          >
            Waiting List
          </span>
        </li>
        <li
          key={3}
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-gray-300 hover:text-primary text-sm items-center gap-x-4 mt-3
        `}
          onClick={handleLogout}
        >
          <MdLogout />
          <span
            className={`${
              !open && 'hidden'
            } origin-left duration-200 font-semibold`}
          >
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
