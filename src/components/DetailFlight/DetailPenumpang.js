import React from 'react'
import ListTitleCategory from '../UserProfile/ListTitleCategory'
import SwitchToggle from './SwitchToggle'
import { BsPersonCircle } from "react-icons/bs";
function DetailPenumpang() {
    return (
        <>
            <div className='bg-white md:ml-10 h-fit border rounded-md p-3 md:mb-8 mb-6'>
                <span className='md:text-lg flex items-center gap-3 my-3'> <BsPersonCircle /> Detail Penumpang</span>
                <div className=' flex justify-between items-center bg-slate-200 px-1 py-2 text-sm rounded-md'>
                    <p className='font-semibold '>Penumpang 1 : Dewasa</p>
                    <div className='flex items-center'>
                        <p className='mr-2'>Sama dengan pemesan </p>
                        <SwitchToggle />
                    </div>
                </div>
                <div className=''>
                    <div className='mt-5 mb-5 w-1/3'>
                        <ListTitleCategory />
                    </div>
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="off"
                            required
                            className="w-full mt-2 block px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:primary rounded-md sm:text-sm focus:ring-1" placeholder="Fullname"
                        // onChange={(e) => setEmail(e.target.value)}
                        // value={email}
                        // aria-invalid={validEmail ? 'false' : 'true'}
                        // aria-describedby="emailidnote"
                        // onFocus={() => setEmailFocus(true)}
                        // onBlur={() => setEmailFocus(false)}
                        />
                        <span className='pl-2 font-sans text-xs font-extralight'>Isi sesuai KTP/Pasport/SIM tanpa tanda baca dan gelar!</span>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default DetailPenumpang