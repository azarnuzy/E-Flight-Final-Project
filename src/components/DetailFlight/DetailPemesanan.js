import React from 'react'
import ListTitleCategory from '../UserProfile/ListTitleCategory'
import { MdLibraryBooks } from "react-icons/md";

export default function DetailPemesanan() {
  return (
    <>
      <div className='bg-white md:ml-10  border rounded-md mb-5 p-3'>
        <span className='md:text-lg flex items-center gap-3 mt-20 my-3'><MdLibraryBooks />Detail Pemesanan</span>
        <div className='md:flex items-start'>
          <div className='w-1/3 mb-3 text-sm'>
            <ListTitleCategory className='' />
          </div>
          <div className='text-sm w-full'>
            <input
              id="fullName"
              name="fullName"
              type="fullName"
              autoComplete="off"
              required
              className="w-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary rounded-md sm:text-sm focus:ring-1" placeholder="Fullname"
            // onChange={(e) => setEmail(e.target.value)}
            // value={fullName}
            // aria-invalid={validEmail ? 'false' : 'true'}
            // aria-describedby="emailidnote"
            // onFocus={() => setEmailFocus(true)}
            // onBlur={() => setEmailFocus(false)}
            />
            <span className='pl-2 font-sans text-xs font-extralight'>Isi sesuai KTP/Pasport/SIM tanpa tanda baca dan gelar!</span>
          </div>

        </div>
        <div className=''>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            required
            className=" w-full mt-2 block px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary rounded-md sm:text-sm focus:ring-1" placeholder="Email"
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
          // aria-invalid={validEmail ? 'false' : 'true'}
          // aria-describedby="emailidnote"
          // onFocus={() => setEmailFocus(true)}
          // onBlur={() => setEmailFocus(false)}
          />
          <span className='pl-1 text-xs font-thin'>Email</span>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="phoneNumber"
            autoComplete="off"
            required
            className="w-full mt-2 block px-3 py-2 bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:border-primary rounded-md sm:text-sm focus:ring-1" placeholder="Phone Number"
          // onChange={(e) => setEmail(e.target.value)}
          // value={phoneNumber}
          // aria-invalid={validEmail ? 'false' : 'true'}
          // aria-describedby="emailidnote"
          // onFocus={() => setEmailFocus(true)}
          // onBlur={() => setEmailFocus(false)}
          />
          <span className='pl-1 text-xs font-thin'>Nomor Telepon</span>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}
