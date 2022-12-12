import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUser } from '../../features/user/userSlice';
// Import Components
import ListTitleCategory from './ListTitleCategory';
export default function AccountInformation() {
  let email = JSON.parse(localStorage.getItem('email'));
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = async () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(email));
  }, [dispatch, email]);
  return (
    <>
      {isEdit ? (
        <div className="bg-white md:ml-10 md:w-3/4 h-full border-2 rounded-md">
          <div className="flex justify-between  md:flex md:justify-between border-b-2 px-4 py-2">
            <h1 className="font-medium">Account</h1>
            <button
              className="text-primary hover:text-thirdly"
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
          <div className="px-4">
            <div className="w-full md:w-1/3">
              <p className="text-base text-userProfile">Title</p>
              <ListTitleCategory />
            </div>
            <div className="md:flex-row flex flex-col mb-2 mt-4">
              <div className="mr-4">
                <p className="text-base text-userProfile ">First Name</p>
                <input className='mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-primary focus:primary block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"' />
              </div>
              <div>
                <p className="text-base text-userProfile">Last Name</p>
                <input className='mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-primary focus:primary block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"' />
              </div>
            </div>
            <div className="mb-4">
              <div className="my-2">
                <p className="text-base text-userProfile">Email</p>
                <span className="text-sm">marcus.holloway@gmail.com</span>
              </div>
              <div className="">
                <p className="text-base text-userProfile">Phone Number</p>
                <input className='mt-1 md:w-1/2 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-primary focus:primary block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white md:ml-10 md:w-3/4 h-full border-2 rounded-md">
          <div className="flex justify-between  md:flex md:justify-between border-b-2 px-4 py-2">
            <h1 className="font-medium">Account</h1>
            <button
              className="text-primary hover:text-thirdly"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
          <div className="px-4">
            <div className="w-full md:w-1/3">
              <p className="text-base text-userProfile">Title</p>
              <p>{user.title}</p>
            </div>
            <div className="md:flex-row flex flex-col mb-2 mt-4">
              <div className="w-full md:w-1/3">
                <p className="text-base text-userProfile">First Name</p>
                <p>{user.firstName}</p>
              </div>
              <div className="w-full md:w-1/3">
                <p className="text-base text-userProfile">Last Name</p>
                <p>{user.lastName}</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="my-2">
                <p className="text-base text-userProfile">Email</p>
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="">
                <p className="text-base text-userProfile">Phone Number</p>
                <span className="text-sm">{user.phoneNumber}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
