import { Menu } from '@headlessui/react';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaSort, FaSortDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllHistory,
  fetchHistoryById,
  getHistories,
} from '../../features/admin/adminSlice';

function ListBooking() {
  const dispatch = useDispatch();
  const size = 10;

  const [pagination, setPagination] = useState(0);
  const [dateSort, setDateSort] = useState('desc');
  const [statusBook, setStatusBook] = useState('completed');
  const [userId, setUserId] = useState('');
  const [sortStatus, setSortStatus] = useState('sort-date');

  const histories = useSelector(getHistories);
  // const [histories, setHistories] = useState(tempHistories);

  const nextPage = (pagination) => {
    if (histories?.length % 10 === 0) {
      if (sortStatus === 'sort-date') {
        dispatch(
          fetchAllHistory({ page: pagination + 1, size, sort: dateSort })
        );
      } else if (sortStatus === 'sort-userId') {
        dispatch(
          fetchHistoryById({ page: pagination + 1, size: 10, userid: userId })
        );
      } else if (sortStatus === 'sort-byStatus') {
        dispatch(
          fetchAllHistory({
            page: pagination + 1,
            size: 10,
            sort: '',
            statusSort: statusBook,
          })
        );
      }
      setPagination(pagination + 1);
    }
  };

  const previousPage = (pagination) => {
    if (pagination - 1 >= 0) {
      if (sortStatus === 'sort-date') {
        dispatch(
          fetchAllHistory({ page: pagination - 1, size, sort: dateSort })
        );
      } else if (sortStatus === 'sort-userId') {
        dispatch(
          fetchHistoryById({ page: pagination - 1, size: 10, userid: userId })
        );
      } else if (sortStatus === 'sort-byStatus') {
        dispatch(
          fetchAllHistory({
            page: pagination - 1,
            size: 10,
            sort: '',
            statusSort: statusBook,
          })
        );
      }
      setPagination(pagination - 1);
    }
  };

  useEffect(() => {
    if (sortStatus === 'sort-date') {
      dispatch(fetchAllHistory({ page: pagination, size, sort: dateSort }));
    }
  }, [dateSort, dispatch, pagination, sortStatus]);

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

  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold mb-3">Booking List </h1>
        <div className="flex items-center">
          <div className="border border-solid my-3 h-[40px] flex items-center  rounded-l-full border-primary px-3 py-1">
            <input
              type="text"
              id="search-user-id"
              className="focus:outline-none"
              placeholder="Search by User-Id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <button
            onClick={async () => {
              await dispatch(
                fetchHistoryById({ page: 0, size: 10, userid: userId })
              );
              setSortStatus('sort-userId');
              setPagination(0);
            }}
            className="bg-primary rounded-r-full h-[40px] text-white font-bold flex items-center gap-3 px-3"
          >
            <span>Search</span>
          </button>
        </div>
      </div>
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
                <th
                  className={`text-center ${
                    histories?.length > 0 ? 'relative' : ''
                  } `}
                >
                  {' '}
                  <Menu>
                    <Menu.Button>
                      <div className="flex gap-3 justify-center w-full items-top ">
                        Status <FaSortDown />
                      </div>
                    </Menu.Button>
                    <Menu.Items className="absolute z-10 top-5 right-0 bg-primary p-3 text-white flex flex-col gap-3">
                      <Menu.Item className="w-full">
                        {({ active }) => (
                          <button
                            className={`${active && 'bg-white text-primary'}`}
                            onClick={() => {
                              dispatch(
                                fetchAllHistory({
                                  page: 0,
                                  size: 10,
                                  sort: '',
                                  statusSort: 'completed',
                                })
                              );
                              setPagination(0);
                              setStatusBook('completed');
                              setSortStatus('sort-byStatus');
                            }}
                          >
                            Completed
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active && 'bg-white text-primary'}`}
                            onClick={() => {
                              dispatch(
                                fetchAllHistory({
                                  page: 0,
                                  size: 10,
                                  sort: '',
                                  statusSort: 'waiting',
                                })
                              );
                              setPagination(0);
                              setStatusBook('waiting');
                              setSortStatus('sort-byStatus');
                            }}
                          >
                            Waiting
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active && 'bg-white text-primary'}`}
                            onClick={() => {
                              dispatch(
                                fetchAllHistory({
                                  page: 0,
                                  size: 10,
                                  sort: '',
                                  statusSort: 'active',
                                })
                              );
                              setPagination(0);
                              setStatusBook('active');
                              setSortStatus('sort-byStatus');
                            }}
                          >
                            Active
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <div></div>
                </th>
                <th
                  className="text-center justify-center flex gap-3 items-center hover:opacity-80 cursor-pointer"
                  onClick={() => {
                    let sort = dateSort;
                    if (dateSort === 'desc') {
                      sort = 'asc';
                      setDateSort('asc');
                    } else {
                      sort = 'desc';
                      setDateSort('desc');
                    }
                    dispatch(fetchAllHistory({ page: 0, size, sort: sort }));
                    setPagination(0);
                    setSortStatus('sort-date');
                  }}
                >
                  Date / Time <FaSort />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {histories?.map((item, i) => {
                const datetime = format(
                  new Date(item.createdAt || item.purchaseCompleteAt),
                  'd-M-yy / HH:mm'
                );
                const rupiah = (number) => {
                  return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(number);
                };

                return (
                  <tr className="text-gray-700" key={i}>
                    <td className="px-2 py-1 text-xs border">
                      {i + pagination * 10 + 1}.
                    </td>
                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                      {item.userId}
                    </td>
                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                      {item.email}
                    </td>
                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                      {item.phoneNumber}
                    </td>
                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                      {item.bookingId}
                    </td>
                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                      {rupiah(item.amount)}
                    </td>
                    <td className={` py-1 px-2 text-xs border text-center `}>
                      <span
                        className={`px-2 py-1 ${status(
                          item
                        )} font-semibold leading-tight min-w-min  rounded-sm `}
                      >
                        {item.bookingStatus}
                      </span>
                    </td>
                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                      <span
                        className={`px-2 py-1 font-semibold leading-tight  rounded-sm `}
                      >
                        {datetime}
                      </span>
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
            previousPage(pagination);
          }}
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
