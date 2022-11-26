import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai";

export default function RecentOrders() {
	return (
		<>
			<div className='md:max-w-[1024px] mx-auto mt-10 mb-6'>
				<h1 className='text-xl font-medium mb-3 ml-3'>Recent Orders</h1>
				<div className='border-2 rounded-md'>
					<div className='w-full md:flex md:justify-between border-b-2 px-2 p-2'>
						<div className='md:w-1/2 flex md:justify-between md:flex-row flex-col'>
							<span className='text-base font-medium'>Flight ID 796572328</span>
							<span className='text-base'>Purchase completed on 4 April 2022</span>
						</div>
						<div className='pr-2'>
							<Link className='text-base text-primary flex items-center gap-2'>Full Details <AiOutlineRight className='text-xs text-primary' /> </Link>
						</div>
					</div>

					<div className='md:flex '>
						{/* Left */}
						<div className='md:flex p-3 border-r-2'>
							<img
								className='w-25 h-20'
								src='https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Logo-2006-present.jpg'
								alt='img-plane' />
							<div className='md:ml-4 md:flex md:flex-col md:justify-center'>
								<p className='text-sm font-medium'>Jakarta (CGK) → Denpasar - Bali (DPS) </p>
								<p className='text-sm'>Wednesday, 25 May 2022</p>
								<p className='text-sm'>3 Adults</p>
							</div>
						</div>
						{/* center */}
						<div className=" border-r-2 ">
							<div className='md:flex justify-center gap-3 p-3'>
								<div className="flex flex-col gap-2 text-center">
									<span className="text-black text-sm">10:55 AM</span>
									<span className="text-gray-400">CGK</span>
								</div>
								<div className="flex flex-col text-center w-1/2 md:mx-4 my-3 mx-auto">
									<span className="text-gray-400 text-xs font-semibold">1h 50m</span>
									<div className="flex  items-center">
										<div className="h-3 w-4 rounded-full border-solid border border-gray-400 transform translate-x-[1px]"></div>
										<div className="w-full h-[1.5px] bg-gray-400"></div>
										<div className="h-3 w-4 rounded-full border-solid border border-gray-400 bg-gray-400 transform -translate-x-[1px]"></div>
									</div>
									<span className="text-gray-400">CGK</span>
								</div>
								<div className="flex flex-col gap-2 text-center">
									<span className="text-black text-sm">12:55 PM</span>
									<span className="text-gray-400">DPS</span>
								</div>
							</div>
						</div>
						{/* right */}
						<div className='flex justify-between items-center p-2 gap-5' >
							<div className='text-sm'>
								<p>Seat</p>
								<p className='text-primary'>25A, 25B, 25C</p>
								<p className='text-primary'>Car rental included</p>
							</div>
							<div className='md:flex items-center text-sm'>
								<div>
									<p className='text-sm'>Ticket refundable</p>
									<p className='text-sm'>Reschedule available</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}
