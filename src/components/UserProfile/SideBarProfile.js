import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillPersonFill, BsFillWalletFill, BsCardList } from "react-icons/bs";
import { RiRefund2Fill } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";

export default function SideBarProfile() {
	// const navigate = useNavigate();
	return (
		<>
			<div className='bg-grey-600 h-screen md:w-1/4 md:h-full pt-5 border-2 rounded-md '>
				<div className='border-b-2 border-grey-800'>
					<img
						src='https://tse4.mm.bing.net/th?id=OIP.mDv826UG65YB8vFcW1SB3QHaHa&pid=Api&P=0'
						alt='img-profile'
						className='rounded-full w-32 h-32 mx-auto' />
					<div className='text-center mb-2'>
						<h1 className='font-medium'>Marcus Holloway </h1>
						<span className='text-xs text-gray-500'>Avid traveller </span>
					</div>
				</div>
				<div className='border-b-2 border-grey-800 pl-4 py-3 md:py-5'>
					<div className='py-3 md:py-3  flex items-center gap-3'>
						<BsFillPersonFill className='text-primary' /> <Link to={'/'} className='text-sm hover:text-secondary'>  Account </Link>
					</div>
					<div className='py-3 md:py-3 flex items-center gap-3'>
						<BsCardList className='text-primary' /> <Link to={'/myorder'} className='text-sm hover:text-secondary'>  My Orders </Link>
					</div>
					<div className='py-2 md:py-3 flex items-center gap-3'>
						<BsFillWalletFill className='text-primary' /> <Link className='text-sm hover:text-secondary'>  Wallet & Cards </Link>
					</div>
					<div className='py-2 md:py-3 flex items-center gap-3'>
						<RiRefund2Fill className='text-primary' /> <Link className='text-sm hover:text-secondary'>  Refunds </Link>
					</div>
				</div>
				<div className='pl-4 py-5'>
					<div className='py-2 md:py-3 flex items-center gap-3'>
						<BiHelpCircle className='text-primary' /> <Link className='text-sm hover:text-secondary'>  Help Center </Link>
					</div>
					<div className='py-2 md:py-3 flex items-center gap-3'>
						<CiSettings className='text-primary' /> <Link className='text-sm hover:text-secondary'>  Settings </Link>
					</div>
					<div className='py-2 md:py-3 flex items-center gap-3'>
						<MdLogout className='text-primary' /> <Link className='text-sm hover:text-primary'>  Logout </Link>
					</div>
				</div>
			</div>
		</>
	)
}
