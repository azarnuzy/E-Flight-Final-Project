import React, {useEffect, useState, Fragment} from 'react'
import { FcGoogle} from 'react-icons/fc';
import { FaInfoCircle } from 'react-icons/fa';
import { GrFacebook } from 'react-icons/gr';
import { AiFillEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom"
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
const title = [
    { name: 'Mr.' },
    { name: 'Ms.' },
    { name: 'Miss.' },
    { name: 'Mrs.' },
]

export const Register = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    
    const [visiblePass, setVisiblePass] = useState(false)
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const navigate = useNavigate()

    const EMAIL_REGEX = /^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const [selected, setSelected] = useState(title[0])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd]);

  return (
    <div className='flex lg:flex-row flex-col lg:h-screen lg:w-screen bg-primary'>
        <div className='lg:w-1/2 lg:p-10 lg:ml-10 p-6'>
            <img className='lg:w-36 w-24 mx-auto lg:-mx-12 lg:-mt-2 cursor-pointer'  onClick={() => navigate(`/`)} src='https://drive.google.com/uc?export=view&id=1iVUQZ8UqrM6wLna3oJKcGrj4yBZm_thO' alt='Gambar'></img>
            <img className='lg:w-60 w-56 mx-auto lg:m-16 mt-10' src='https://drive.google.com/uc?export=view&id=1rWRgF-zzYTu61iGbr7T1pHFdO2JheT9s' alt='Gambar'></img>
            <img className='lg:w-fit w-full lg:mb-5 lg:-mt-2 mt-10' src='https://drive.google.com/uc?export=view&id=10U4uiFObsfOlZpUjxr1yI6fRr-29rOf-' alt='Gambar'></img>
        </div>
        <div className='w-full lg:w-1/2 lg:p-12 p-3 justify-center'>
            <div className="w-full max-w-md space-y-8 lg:mx-12 lg:my-auto my-10">
                <div className='bg-white p-6 rounded rounded-md'>
                <h4 className="mt-3 text-center text-xl font-bold tracking-tight">
                    REGISTER
                </h4>
                <p className='text-sm font-normal font-sans mt-5'>Register to start your exploration.</p>
                <form className="space-y-4" action="#" method="POST">
                    <div className="rounded-md">
                        <div className="mt-4 w-full">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-left sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {title.map((person, personIdx) => (
                                                <Listbox.Option
                                                    key={personIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                        active ? 'bg-primarylight text-white' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                    >
                                                    {({ selected }) => (
                                                        <>
                                                        <span
                                                            className={`block truncate ${
                                                            selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <div>
                            <input
                                id="firstname"
                                name="firstname"
                                type="firstname"
                                autoComplete="off"
                                className="relative block w-full appearance-none px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded rounded-md mt-4 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="First Name"
                                onChange={(e) => setFirstname(e.target.value)}
                                value={firstname}
                                required
                            />
                        </div>
                        <div>
                            <input
                                id="lastname"
                                name="lastname"
                                type="lastname"
                                autoComplete="off"
                                className="relative block w-full appearance-none px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded rounded-md mt-4 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Last Name"
                                onChange={(e) => setLastname(e.target.value)}
                                value={lastname}
                                required
                            />
                        </div>
                            <div className={
                                    emailFocus && email && !validEmail
                                    ? `px-3 py-2 border text-slate-50 border-red-500 border-solid rounded-md flex justify-between`
                                    : `px-3 py-2 border border-gray-300 rounded rounded-md flex justify-between mt-3`
                                }
                            >
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    required
                                    className="relative block w-full appearance-none text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    aria-invalid={validEmail ? 'false' : 'true'}
                                    aria-describedby="emailidnote"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                />
                            </div>
                            <p
                                id="emailidnote"
                                className={
                                    emailFocus && email && !validEmail
                                    ? 'lg:text-sm text-xs relative rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none -mx-1 mt-1.5 text-red-500 pl-3 flex gap-1 items-center'
                                    : 'offscreen'
                                }
                            >
                                <FaInfoCircle />
                                The email is not a valid email address
                            </p>
                            <div className={
                                    pwdFocus && pwd && !validPwd
                                    ? `px-3 py-2 border text-slate-50 border-red-500 border-solid rounded-md flex justify-between mt-3`
                                    : `px-3 py-2 border border-gray-300 rounded rounded-md flex justify-between mt-3`
                                }
                            >
                                <input
                                    id="password"
                                    name="password"
                                    type={visiblePass ? 'text' : 'password'}
                                    autoComplete="off"
                                    required
                                    className="relative block w-full appearance-none text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    aria-invalid={validPwd ? 'false' : 'true'}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <label
                                    onClick={() => {
                                    setVisiblePass(!visiblePass);
                                    }}
                                >
                                    {visiblePass ? <AiFillEye className='text-xl text-gray-500 cursor-pointer'/> : <AiOutlineEyeInvisible className='text-xl text-gray-500 cursor-pointer'/>}
                                </label>
                            </div>
                            <div
                                id="pwdnote"
                                className={
                                    pwdFocus && pwd && !validPwd
                                    ? 'lg:text-sm text-xs relative rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none -mx-1 mt-1.5 text-red-500 pl-3 gap-1 items-center'
                                    : 'offscreen'
                                }
                                >
                                <p className='flex gap-2'>
                                    <FaInfoCircle className='lg:text-2xl text-4xl'/>
                                    8 to 24 characters. Must include uppercase and
                                    lowercase letters, a number and a special character.
                                </p>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white lg:bg-primary lg:hover:bg-thirdly bg-primary hover:bg-thirdly"
                            >
                                REGISTER
                            </button>
                            <div className='flex gap-1 justify-center'>
                                <p className='lg:text-sm text-xs font-normal text-center font-sans mt-4'>Already have an account in Flyket?</p>
                                <Link to={'/login'} className='lg:text-sm text-xs font-normal text-center font-sans mt-4 text-primary'>Login</Link>
                            </div>
                            <p className='text-sm font-extralight text-center font-sans mt-4'>Or</p>
                            <div
                                className="flex gap-3 z-0 w-full p-3 mt-5 cursor-pointer rounded rounded-md border border-gray-300 justify-center"
                            >
                                <FcGoogle className="text-2xl" />
                                <p className="font-normal text-base">Continue with Google</p>
                            </div>
                            <div
                                className="flex gap-3 z-0 w-full p-3 mt-5 mb-4 cursor-pointer rounded rounded-md border border-gray-300 justify-center"
                            >
                                <GrFacebook className="text-blue-900 text-2xl" />
                                <p className="font-normal text-base">Continue with Google</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
