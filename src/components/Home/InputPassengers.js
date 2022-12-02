import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getPassenger, setPassenger } from '../../features/search/searchSlice';

export default function InputPassengers() {
  const [customOpen, setCustomOpen] = useState(false);

  const passenger = useSelector(getPassenger);
  const dispatch = useDispatch();

  function buttonClicked() {
    setCustomOpen((prev) => !prev);
  }

  return (
    <div className="relative mt-1">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              onClick={(e) => {
                buttonClicked(customOpen);
              }}
              className="w-full border-none py-2 pl-3 pr-3 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none flex gap-3 items-center cursor-text shadow-md rounded-md justify-between"
              data-passenger={true}
            >
              <div className="flex gap-3 items-center">
                <FaUserFriends /> {passenger} Guest
              </div>
              <div className="flex items-center">
                {customOpen && <AiFillCloseCircle className="cursor-pointer" />}{' '}
              </div>
            </Menu.Button>
            {customOpen && (
              <Menu.Items
                static
                className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-opacity-5 focus:outline-none sm:text-sm z-10 shadow-md"
                data-passenger={true}
              >
                <Menu.Item className="text-left px-3 py-3 w-full flex items-center gap-2 justify-between">
                  <div>
                    <div className="flex flex-col justify-between mx-3">
                      <span className="text-sm">Guest</span>
                    </div>
                    <div className="flex gap-2 text-lg">
                      <button
                        onClick={() => {
                          if (passenger > 1) {
                            dispatch(setPassenger(passenger - 1));
                          }
                        }}
                      >
                        -
                      </button>
                      <span>{passenger}</span>
                      <button
                        onClick={() => {
                          dispatch(setPassenger(passenger + 1));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </Menu.Item>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}
