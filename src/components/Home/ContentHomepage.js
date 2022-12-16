import React from 'react'
import content1 from '../../assets/content_1.png'
import { Disclosure } from '@headlessui/react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

export const ContentHomepage = () => {
  return (
    <div>
        <div className='flex flex-row px-4'>
          <div className='lg:w-1/3'>
            <img src={content1} alt='' className='w-100 h-96 p-10'></img>
          </div>
          <div className='lg:w-2/3'>
            <h2 className='text-2xl font-bold p-10 mx-auto'>Nikmati Kemudahan Pesan Tiket Pesawat</h2>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is your refund policy?</span>
                    <AiOutlineDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <AiOutlineDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
    </div>
  )
}
