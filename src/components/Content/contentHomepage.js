import React from 'react';
import content1 from '../../assets/content_1.webp';
import pict1 from '../../assets/transaction.png';
import pict2 from '../../assets/invoice.png';
import pict3 from '../../assets/digital-wallet.png';
import pict4 from '../../assets/lock.png';
import CityDestination from './CityDestination';

export default function Homepage() {
  return (
    <div>
      <CityDestination />
      <div className="bg-color6 p-10">
        <div className="flex md:flex-row flex-col md:w-3/4 md:h-3/4 h-full w-full mx-auto">
          <div>
            <img
              loading="lazy"
              src={content1}
              alt=""
              className="py-3 md:px-1"
            ></img>
          </div>
          <div className="mt-10 lg:ml-5">
            <h2 className="text-[30px] font-bold py-3 lg:px-4 lg:ml-5 lg:w-fit w-full">
              Get Flight Tickets to Your Favorite Destinations
            </h2>
            <p className="lg:w-[600px] w-full lg:ml-8 text-justify">
              Want to go on vacation with your family? Now, you can directly
              order flight tickets at Flyket. Flyket always provides reliable
              innovations to make it easier for you when ordering flight tickets
              online. Search for airline tickets online at Flyket to domestic
              and international flight destinations around the world. You can
              check flight ticket prices online at Flyket, as well as compare
              flight schedules directly via online.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 px-[100px]">
        <h2 className="font-bold text-[28px] p-5 mb-5 text-center">
          Why Using Flyket?
        </h2>
        <div className="flex lg:flex-row flex-col justify-between mb-10">
          <div>
            <img
              loading="lazy"
              src={pict1}
              alt=""
              className="w-[100px] py-5 mx-auto"
            />
            <h2 className="font-bold text-xl text-center">
              Transaction from Anywhere
            </h2>
            <p className="lg:w-[300px] text-center w-full mt-2">
              Make a transaction from anywhere at any time, from desktop, mobile
              app, or mobile web.
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              src={pict2}
              alt=""
              className="w-[100px] py-5 mx-auto"
            />
            <h2 className="font-bold text-xl text-center">Get Your Invoice</h2>
            <p className="lg:w-[300px] text-center w-full mt-2">
              Get an invoice for payment of your order to avoid
              misunderstandings in the future.
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              src={pict3}
              alt=""
              className="w-[100px] py-5 mx-auto"
            />
            <h2 className="font-bold text-xl text-center">Ease of Payment</h2>
            <p className="lg:w-[300px] text-center w-full mt-2">
              Payment for transactions is easy because you can use digital
              wallets and offline payment outlets.
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              src={pict4}
              alt=""
              className="w-[100px] py-5 mx-auto"
            />
            <h2 className="font-bold text-xl text-center">
              Secure Transaction
            </h2>
            <p className="lg:w-[300px] text-center w-full mt-2">
              The security of data and transactions is guaranteed so you don't
              have to worry about using Flyket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
