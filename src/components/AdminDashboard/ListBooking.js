import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
  fetchAllHistory,
  getHistories,
  getPage,
  validateBook,
} from '../../features/admin/adminSlice';

function ListBooking() {
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const size = 100;

  const [pagination, setPagination] = useState(0);

  const histories = useSelector(getHistories);

  const nextPage = (page) => {
    if (page + 1 < histories?.length / 10) {
      setPagination(page + 1);
    }
  };

  const previousPage = (page) => {
    if (page - 1 >= 0) {
      setPagination(page - 1);
    }
  };

  let displayHistories = [];

  for (let i = 0; i < histories?.length; i += 10) {
    const temp = histories.slice(i, i + 10);
    displayHistories.push(temp);
  }

  useEffect(() => {
    dispatch(fetchAllHistory({ page, size }));
  }, [dispatch, page]);

  const status = (item) => {
    if (item.bookingStatus === 'WAITING') {
      return 'text-blue-600 bg-blue-100';
    }
    if (item.bookingStatus === 'ACTIVE') {
      return 'text-yellow-600 bg-yellow-100';
    }
    if (item.bookingStatus === 'EXPIRED') {
      return 'text-gray-600 bg-gray-100';
    }
    if (item.bookingStatus === 'COMPLETED') {
      return 'text-green-600 bg-green-100';
    }
  };

  const handleValidate = ({ userId, bookingId }) => {
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(validateBook({ userId, bookingId }));
      }
    });
  };

  return (
    <section className="container mx-auto">
      <h1 className="text-lg font-bold mb-3">List Booking </h1>
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-sm font-semibold text-left text-gray-900 bg-gray-100 border-b border-gray-600">
                <th className="text-center">No.</th>
                <th className="text-center">User Id</th>
                <th className="text-center">Email</th>
                <th className="text-center">Phone Number</th>
                <th className="text-center">Booking Id</th>
                <th className="text-center">Amount</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {displayHistories[pagination]?.map((item, i) => {
                return (
                  <tr className="text-gray-700" key={i}>
                    <td className="px-2 py-1 text-xs border">
                      {i + pagination * 10 + 1}.
                    </td>
                    <td className="px-2 py-1 text-xs border">{item.userId}</td>
                    <td className="px-2 py-1 text-xs border">{item.email}</td>
                    <td className="px-2 py-1 text-xs border">
                      {item.phoneNumber}
                    </td>
                    <td className="px-2 py-1 text-xs border">
                      {item.bookingId}
                    </td>
                    <td className="px-2 py-1 text-xs border">{item.amount}</td>
                    <td className="px-2 py-1 text-xs border">
                      <span
                        className={`px-2 py-1 font-semibold leading-tight  rounded-sm  ${status(
                          item
                        )} `}
                      >
                        {item.bookingStatus}
                      </span>
                    </td>
                    <td className="px-2 py-1 text-xs border">
                      {item.bookingStatus === 'WAITING' ? (
                        <button
                          className="text-green-600 bg-green-100 flex items-center rounded-md p-1"
                          onClick={() => {
                            handleValidate({
                              userId: item.userId,
                              bookingId: item.bookingId,
                            });
                          }}
                        >
                          <AiFillCheckCircle className="" />
                          <span
                            className={`px-2 py-1 font-semibold leading-tight  rounded-sm   `}
                          >
                            Approve
                          </span>
                        </button>
                      ) : (
                        ''
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end gap-3 w-full mt-3">
        <button
          className="px-3 py-1 rounded-xl text-white bg-primary font-semibold shadow-md border border-1 border-solid hover:opacity-80"
          onClick={previousPage.bind(this, pagination)}
        >
          Previous
        </button>
        <button
          className="px-3 py-1 rounded-xl text-white bg-primary font-semibold shadow-md border border-1 border-solid hover:opacity-80"
          onClick={nextPage.bind(this, pagination)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default ListBooking;
