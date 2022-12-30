import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import call from '../../assets/call.png';

export const ContactUs = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbar />
      <div className="mt-[100px] lg:ml-24">
        <div className="lg:flex lg:flex-row lg:gap-3 lg:p-10">
          <div>
            <h2 className="text-center font-bold lg:text-3xl text-2xl items-center">
              Contact Flyket
            </h2>
            <p className="lg:w-[700px] w-full text-justify lg:px-10 lg:py-5 md:m-6 p-3">
              Thank you for visiting Flyket's website. If you have any questions
              or concerns about our e-flight ticket purchasing service, please
              don't hesitate to contact us.
              <br />
              <b>Phone</b>
              <br />
              If you prefer to speak with one of our customer service
              representatives, you can reach us at{' '}
              <span className="text-primary font-semibold">
                +62-8594-3216-880
              </span>
              . Our phone lines are open from 9am to 5pm, Monday through Friday.
              <br />
              <b>Email</b>
              <br />
              You can also send us an email at{' '}
              <span className="text-primary font-semibold">
                support@flyket.com
              </span>
              . We will do our best to respond to your inquiry as quickly as
              possible.
              <br />
            </p>
            <p className="lg:px-10 md:m-6 p-3">
              Flyket
              <br />
              Attn: Customer Service
              <br />
              123 Main Street
              <br />
              Anytown, INA 12345
              <br />
            </p>
            <p className="lg:px-10 mt-5 font-bold md:m-6 p-3">
              We look forward to hearing from you!
            </p>
          </div>
          <div className="w-full flex items-center">
            <img
              src={call}
              alt=""
              loading="lazy"
              className="lg:w-[400px] w-[300px] my-8 mx-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
