import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getOrders, setTripPosition } from '../../features/order/orderSlice';
import { fetchUser } from '../../features/user/userSlice';
import garudaLogo from '../../assets/garuda-logo.png';
import { FaPlane } from 'react-icons/fa';

export default function UserFlight() {
  let [searchParams] = useSearchParams();
  // const user = useSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // id
  // const [id, setId] = useState(user?.id || '');
  const email = JSON.parse(localStorage.getItem('email'));
  useEffect(() => {
    dispatch(fetchUser(email));
  }, [dispatch, email]);

  const from = searchParams.get('fr');
  const to = searchParams.get('to');
  // const date = searchParams.get('date');
  const departureDate = new Date(
    searchParams.get('dd').replace(' GMT 0700 (Western Indonesia Time)', '')
  );
  const returnDate =
    searchParams.get('rd').length > 0
      ? new Date(
          searchParams
            .get('rd')
            .replace(' GMT 0700 (Western Indonesia Time)', '')
        )
      : new Date();
  const roundTrip = searchParams.get('rt');
  const order = useSelector(getOrders);
  const passengers = searchParams.get('ps');
  const seatClass = searchParams.get('sc');
  const totalPassenger = searchParams.get('ps');

  return (
    <div className=" lg:w-1/3 w-full md:mt-24 mt-20 h-fit shadow-md border-gray-100 border-solid border-[1px] pt-3">
      <div className="ml-30">
        <h2 className="text-lg font-bold pl-3 mb-2">Your Flight</h2>
        <div
          className={`flex shadow cursor-pointer hover:opacity-75 ${
            order.tripPosition !== 0 ? 'text-gray-500' : 'text-black'
          }`}
          onClick={() => {
            if (order.tripPosition === 1) {
              navigate(
                `/flight/search?fr=${to}&to=${from}&ps=${passengers}&date=${departureDate}&dd=${departureDate}&rd=${returnDate}&sc=${seatClass}&rt=${roundTrip}`
              );
            }
            dispatch(setTripPosition(0));
            // console.log(order.tripPosition);
          }}
        >
          {order.tripPosition === 0 ? (
            <div className="mr-4 rounded-tl-md rounded-bl-md min-h-full w-1 bg-primary"></div>
          ) : (
            <div className="mr-4"></div>
          )}
          <div>
            <div className="w-full flex">
              <div className="w-full">
                <span className="text-sm">
                  {format(new Date(departureDate), 'iii, d MMM yyyy')}
                </span>
                <span className="flex items-center font-bold gap-1">
                  {order.tripPosition === 1
                    ? order.myFlight[0].from_airport
                    : from}{' '}
                  <AiOutlineArrowRight className="text-sm" />{' '}
                  {order.tripPosition === 1 ? order.myFlight[0].to_airport : to}
                </span>
              </div>
            </div>
            {order.myFlight[0].airplane.length > 0 && (
              <div className="flex flex-col items-start py-3">
                <div className="flex gap-1">
                  <div className=" rounded-full flex items-center justify-center w-14 my-2 mr-2">
                    <img src={garudaLogo} alt="" />
                  </div>
                  <span className="w-full text-sm font-semibold flex items-center">
                    {order.myFlight[0].airplane}
                  </span>
                </div>
                <div className="flex gap-5 justify-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      {order.myFlight[0].departure_time}
                    </span>
                    <span className="text-xs">
                      {order.myFlight[0].from_airport}
                    </span>
                  </div>
                  <div className="flex justify-center flex-col items-center">
                    <span className="text-gray-500 text-xs">
                      {order.myFlight[0].duration}
                    </span>
                    <span className="w-full h-[1px] bg-gray-600"></span>
                    <span className="text-gray-500 text-xs">
                      {order.myFlight[0].distance}
                    </span>
                  </div>
                  <div className="flex items-center -ml-2">
                    <FaPlane className="text-gray-500 text-xs " />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      {order.myFlight[0].arrival_time}
                    </span>
                    <span className="text-xs">
                      {order.myFlight[0].to_airport}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {roundTrip === 'true' && (
          <div
            className={`flex shadow mt-3 cursor-pointer hover:opacity-75 ${
              order.tripPosition !== 1 ? 'text-gray-500' : 'text-black'
            } `}
            onClick={() => {
              if (order.tripPosition === 0) {
                navigate(
                  `/flight/search?fr=${to}&to=${from}&ps=${passengers}&date=${returnDate}&dd=${departureDate}&rd=${returnDate}&sc=${seatClass}&rt=${roundTrip}`
                );
              }
              dispatch(setTripPosition(1));
              // console.log(order.tripPosition);
            }}
          >
            {order.tripPosition === 1 ? (
              <div className="mr-4 rounded-tl-md rounded-bl-md min-h-full w-1 bg-primary"></div>
            ) : (
              <div className="mr-4"></div>
            )}

            <div>
              <div className="w-full flex">
                <div className="w-full">
                  <span className="text-sm">
                    {format(new Date(returnDate), 'iii, d MMM yyyy')}
                  </span>
                  <span className="flex items-center font-bold gap-1">
                    {order.tripPosition === 1
                      ? order.myFlight[0].to_airport
                      : to}{' '}
                    <AiOutlineArrowRight className="text-sm" />{' '}
                    {order.tripPosition === 1
                      ? order.myFlight[0].from_airport
                      : from}
                  </span>
                </div>
              </div>
              {order.myFlight[1].airplane.length > 0 && (
                <div className="flex flex-col items-start py-3">
                  <div className="flex gap-1">
                    <div className=" rounded-full flex items-center justify-center w-14 my-2 mr-2">
                      <img src={garudaLogo} alt="" />
                    </div>
                    <span className="w-full text-sm font-semibold flex items-center">
                      {order.myFlight[1].airplane}
                    </span>
                  </div>
                  <div className="flex gap-5 justify-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {order.myFlight[1].departure_time}
                      </span>
                      <span className="text-xs">
                        {order.myFlight[1].from_airport}
                      </span>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                      <span className="text-gray-500 text-xs">
                        {order.myFlight[1].duration}
                      </span>
                      <span className="w-full h-[1px] bg-gray-600"></span>
                      <span className="text-gray-500 text-xs">
                        {order.myFlight[1].distance}
                      </span>
                    </div>
                    <div className="flex items-center -ml-2">
                      <FaPlane className="text-gray-500 text-xs " />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {order.myFlight[1].arrival_time}
                      </span>
                      <span className="text-xs">
                        {order.myFlight[1].to_airport}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="w-full flex justify-end  mt-3">
          <button
            onClick={() => {
              if (roundTrip === 'true') {
                if (
                  order.myFlight[0].scheduleId.length > 0 &&
                  order.myFlight[1].scheduleId.length > 0
                ) {
                  navigate(
                    `/detailOrder?scheduleId=${order.myFlight[0].scheduleId}&scheduleId2=${order.myFlight[1].scheduleId}&sc=${seatClass}&totalPassenger=${totalPassenger}&pr=${order.myFlight[0].price}&pr2=${order.myFlight[1].price}`
                  );
                }
              } else {
                if (order.myFlight[0].scheduleId.length > 0) {
                  navigate(
                    `/detailOrder?scheduleId=${order.myFlight[0].scheduleId}&scheduleId2=${order.myFlight[1].scheduleId}&sc=${seatClass}&totalPassenger=${totalPassenger}&pr=${order.myFlight[0].price}&pr2=${order.myFlight[1].price}`
                  );
                }
              }
            }}
            className={`${
              order.myFlight[0].scheduleId.length > 0 &&
              order.myFlight[1].scheduleId.length > 0 &&
              roundTrip === 'true'
                ? 'bg-primary text-white'
                : roundTrip === 'false' &&
                  order.myFlight[0].scheduleId.length > 0
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-600 cursor-default'
            } py-1 px-4  m-2 rounded-md  font-semibold`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
