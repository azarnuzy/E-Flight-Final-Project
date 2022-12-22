import { format } from 'date-fns';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
  fetchValidateList,
  getPage,
  getStatusValidate,
  getValidateList,
  validateBook,
} from '../../features/admin/adminSlice';

function ComponentWaitingList() {
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const size = 10;

  const [pagination, setPagination] = useState(0);

  let validateList = useSelector(getValidateList);

  let [list, setList] = useState(validateList);

  const statusValidate = useSelector(getStatusValidate);

  useEffect(() => {
    if (statusValidate === 'idle') {
      dispatch(fetchValidateList({ page, size }));
    }
    if (validateList !== null) {
      setList(validateList);
    }
  }, [dispatch, page, statusValidate, validateList]);

  const handleValidate = ({ userId, bookingId }) => {
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(validateBook({ userId, bookingId }));
        setList(list.filter((item) => item.bookingId !== bookingId));
      }
    });
  };

  return (
    <section className="container mx-auto">
      <h1 className="text-lg font-bold mb-3">Waiting List </h1>
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-sm font-semibold text-left text-gray-900 bg-gray-100 border-b border-gray-600">
                <th className="text-center">No.</th>
                <th className="text-center">User Id</th>
                <th className="text-center">Booking Id</th>
                <th className="text-center">Amount</th>
                <th className="text-center">Status</th>
                <th className="text-center">Date/Time</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {list?.map((item, i) => {
                const datetime = format(
                  new Date(item.createdAt),
                  'd-M-yy/HH:mm'
                );
                return (
                  <tr className="text-gray-700" key={i}>
                    <td className="px-2 py-1 text-xs border">
                      {i + pagination * 10 + 1}.
                    </td>
                    <td className="px-2 py-1 text-xs border">{item.userId}</td>

                    <td className="px-2 py-1 text-xs border">
                      {item.bookingId}
                    </td>
                    <td className="px-2 py-1 text-xs border">{item.amount}</td>
                    <td className="px-2 py-1 text-xs border">
                      <span
                        className={`px-2 py-1 font-semibold leading-tight  rounded-sm  text-blue-600 bg-blue-100 `}
                      >
                        {item.bookingStatus}
                      </span>
                    </td>
                    <td className="px-2 py-1 text-xs border">
                      <span
                        className={`px-2 py-1 font-semibold leading-tight  rounded-sm `}
                      >
                        {datetime}
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
          onClick={() => {
            if (pagination - 1 >= 0) {
              dispatch(fetchValidateList({ page: pagination - 1, size: 10 }));
              setPagination(pagination - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          className="px-3 py-1 rounded-xl text-white bg-primary font-semibold shadow-md border border-1 border-solid hover:opacity-80"
          onClick={() => {
            if (validateList.length === 10) {
              dispatch(fetchValidateList({ page: pagination + 1, size: 10 }));
              setPagination(pagination + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default ComponentWaitingList;
