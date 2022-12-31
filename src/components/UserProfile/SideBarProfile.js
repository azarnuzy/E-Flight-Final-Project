import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPersonFill, BsCardList } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import Swal from 'sweetalert2';
import { getUser, setisLogin } from '../../features/user/userSlice';
import { FaDatabase } from 'react-icons/fa';

export default function SideBarProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(getUser);
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

  const roles = JSON.parse(localStorage.getItem('user-info'))?.userId.split(
    '-'
  )[0];

  return (
    <>
      <div className="bg-grey-600  md:w-1/4 md:h-full pt-3 mb-6 border-2 rounded-md ">
        <div className="border-b-2 border-grey-800">
          <img
            loading="lazy"
            src={
              user?.imgUrl ||
              'https://tse4.mm.bing.net/th?id=OIP.mDv826UG65YB8vFcW1SB3QHaHa&pid=Api&P=0'
            }
            alt="img-profile"
            className="rounded-full mb-8 mt-16 sm:my-8 w-32 h-32 mx-auto object-cover"
          />
          <div className="text-center mb-6">
            <h1 className="font-medium">
              {user?.firstName} {user?.lastName}{' '}
            </h1>
          </div>
        </div>
        <div className="border-b-2 border-grey-800 py-3 md:py-5  ">
          <div className="py-2 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <BsFillPersonFill className="text-primary  hover:bg-gray-100" />
            <Link
              to={'/myprofile'}
              className="text-sm hover:text-secondary hover:bg-gray-100"
            >
              {' '}
              Account{' '}
            </Link>
          </div>
          <div className="py-2 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
            <BsCardList className="text-primary" />{' '}
            <Link to={'/myorder'} className="text-sm hover:text-secondary">
              {' '}
              My Orders{' '}
            </Link>
          </div>
          {roles === 'ADMIN' && (
            <div>
              <div className="py-2 md:py-3 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
                <FaDatabase className="text-primary" />{' '}
                <Link
                  to={'/admin/bookingList'}
                  className="text-sm hover:text-secondary"
                >
                  {' '}
                  Admin Page{' '}
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className=" py-3">
          <div className="py-2 md:py-2 pl-4 flex items-center gap-3 hover:bg-gray-100 ">
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
