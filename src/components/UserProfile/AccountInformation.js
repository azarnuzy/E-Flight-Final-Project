import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editUser,
  fetchUser,
  getUser,
  updateImageProfile,
} from '../../features/user/userSlice';
export default function AccountInformation() {
  const user = useSelector(getUser);
  console.log(user);
  const dispatch = useDispatch();

  let email = JSON.parse(localStorage.getItem('email'));
  const [isEdit, setIsEdit] = useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [title] = useState();
  const [image, setImage] = useState();

  const handleEdit = async () => {
    try {
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setPhoneNumber(user?.phoneNumber);
      setIsEdit(true);
    } catch (error) {}
  };

  const handleEditAccount = async (id, firstName, lastName, phoneNumber) => {
    try {
      await dispatch(editUser({ id, firstName, lastName, phoneNumber }));
      if (image) {
        console.log(image);
        const formData = new FormData();
        formData.append('file', image[0]);
        console.log(formData);
        await dispatch(updateImageProfile({ id, formData }));
      }
      setIsEdit(false);
      setImage('');
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(fetchUser(email));
  }, [dispatch, email, isEdit]);
  return (
    <>
      {isEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit();
            handleEditAccount(
              user?.id,
              firstName,
              lastName,
              phoneNumber,
              user?.title
            );
          }}
          encType="multipart/form-data"
          className="bg-white md:ml-10 md:w-3/4 h-full border-2 rounded-md"
        >
          <div className="flex justify-between  md:flex md:justify-between border-b-2 px-4 py-2">
            <h1 className="font-medium">Account</h1>
            <button type="submit" className="text-primary hover:text-thirdly">
              Save
            </button>
          </div>
          <div className="px-4">
            <div className="w-full md:w-1/3">
              <p className="text-base text-userProfile">Title</p>
              <p>{user?.title || title}</p>
              {/* <ListTitleCategory /> */}
            </div>
            <div className="md:flex-row flex flex-col mb-2 mt-4">
              <div className="mr-4">
                <p className="text-base text-userProfile ">First Name</p>
                <input
                  className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-primary focus:primary block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div>
                <p className="text-base text-userProfile">Last Name</p>
                <input
                  className="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-primary focus:primary block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="my-2">
                <p className="text-base text-userProfile">Email</p>
                <span className="text-sm">{email}</span>
              </div>
              <div className="">
                <p className="text-base text-userProfile">Phone Number</p>
                <input
                  className="mt-1 md:w-1/2 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-primary focus:primary block w-full rounded-md sm:text-sm focus:ring-1 "
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </div>
              <div className="mt-4">
                <p className="text-base text-userProfile">Profile Image</p>
                <label class="block mt-2">
                  <span class="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-thirdly hover:file:bg-violet-100"
                    onChange={(e) => {
                      setImage(e.target.files);
                    }}
                    multiple
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
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
              <p>{user?.title || title}</p>
            </div>
            <div className="md:flex-row flex flex-col mb-2 mt-4">
              <div className="w-full md:w-1/3">
                <p className="text-base text-userProfile">First Name</p>
                <p>{user?.firstName || firstName}</p>
              </div>
              <div className="w-full md:w-1/3">
                <p className="text-base text-userProfile">Last Name</p>
                <p>{user?.lastName || lastName}</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="my-2">
                <p className="text-base text-userProfile">Email</p>
                <span className="text-sm">{user?.email || email}</span>
              </div>
              <div className="">
                <p className="text-base text-userProfile">Phone Number</p>
                <span className="text-sm">
                  {user?.phoneNumber || phoneNumber}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
