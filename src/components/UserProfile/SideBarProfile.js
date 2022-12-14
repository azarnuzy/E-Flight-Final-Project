import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsFillPersonFill, BsFillWalletFill, BsCardList } from 'react-icons/bs';
import { RiRefund2Fill } from 'react-icons/ri';
import { BiHelpCircle } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { MdLogout } from 'react-icons/md';
import Swal from 'sweetalert2';
import { setisLogin } from '../../features/user/userSlice';

export default function SideBarProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  //Logout
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
        navigate('/');
      } else if (result.isDenied) {
        Swal.fire('Log Out Failed!', '', 'info');
      }
    });
  };
  return (
    <>
      <div className="bg-grey-600 h-screen md:w-1/4 md:h-full pt-5 border-2 rounded-md ">
        <div className="border-b-2 border-grey-800">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.mDv826UG65YB8vFcW1SB3QHaHa&pid=Api&P=0"
            alt="img-profile"
            className="rounded-full w-32 h-32 mx-auto"
          />
          <div className="text-center mb-2">
            <h1 className="font-medium">Marcus Holloway </h1>
          </div>
        </div>
        <div className="border-b-2 border-grey-800  py-3 md:py-5  ">
          <div className="py-3 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <BsFillPersonFill className="text-primary  hover:bg-gray-100" />
            <Link
              to={'/'}
              className="text-sm hover:text-secondary hover:bg-gray-100"
            >
              {' '}
              Account{' '}
            </Link>
          </div>
          <div className="py-3 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <BsCardList className="text-primary" />{' '}
            <Link to={'/myorder'} className="text-sm hover:text-secondary">
              {' '}
              My Orders{' '}
            </Link>
          </div>
          <div className="py-2 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <BsFillWalletFill className="text-primary" />{' '}
            <Link className="text-sm hover:text-secondary">
              {' '}
              Wallet & Cards{' '}
            </Link>
          </div>
          <div className="py-2 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <RiRefund2Fill className="text-primary" />{' '}
            <Link className="text-sm hover:text-secondary"> Refunds </Link>
          </div>
        </div>
        <div className=" py-5">
          <div className="py-2 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <BiHelpCircle className="text-primary" />{' '}
            <Link className="text-sm hover:text-secondary"> Help Center </Link>
          </div>
          <div className="py-2 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <CiSettings className="text-primary" />{' '}
            <Link className="text-sm hover:text-secondary"> Settings </Link>
          </div>
          <div className="py-2 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <MdLogout className="text-primary" />{' '}
            <Link className="text-sm hover:text-primary" onClick={handleLogout}>
              {' '}
              Logout{' '}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
