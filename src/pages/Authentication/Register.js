import React, {useEffect, useState} from 'react'
import { FcGoogle} from 'react-icons/fc';
import { FaInfoCircle } from 'react-icons/fa';
import { GrFacebook } from 'react-icons/gr';
import { AiFillEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom"

export const Register = () => {
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

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd]);

  return (
    <div className='flex lg:flex-row flex-col' style={{backgroundColor: '#02929A'}}>
        <div className='lg:w-1/2 lg:p-10 lg:ml-10 p-6'>
            <img className='lg:w-36 w-24 mx-auto lg:-mx-12 lg:-mt-2 cursor-pointer'  onClick={() => navigate(`/`)} src='https://drive.google.com/uc?export=view&id=1iVUQZ8UqrM6wLna3oJKcGrj4yBZm_thO' alt='Image'></img>
            <img className='lg:w-60 w-56 mx-auto lg:m-16 mt-10' src='https://drive.google.com/uc?export=view&id=1rWRgF-zzYTu61iGbr7T1pHFdO2JheT9s' alt='Image'></img>
            <img className='lg:w-fit w-full lg:mb-5 lg:-mt-2 mt-10' src='https://drive.google.com/uc?export=view&id=10U4uiFObsfOlZpUjxr1yI6fRr-29rOf-' alt='Image'></img>
        </div>
        <div className='w-full lg:w-1/2 lg:p-12 p-4 justify-center'>
            <div className="w-full max-w-md space-y-8 lg:m-12 lg:my-14 my-10">
                <div className='bg-white p-6 rounded rounded-md'>
                <h4 className="mt-4 text-center text-xl font-bold tracking-tight">
                    REGISTER
                </h4>
                <p className='text-sm font-normal font-sans mt-5'>Register to start your exploration.</p>
                <form className="space-y-4" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md">
                            <div className={
                                    emailFocus && email && !validEmail
                                    ? `px-3 py-2 border text-slate-50 border-red-500 border-solid rounded-md flex justify-between`
                                    : `px-3 py-2 border border-gray-300 rounded rounded-md flex justify-between`
                                }
                            >
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    required
                                    className="relative block w-full appearance-none text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email or phone number"
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
                                    {visiblePass ? <AiFillEye className='text-xl text-gray-500'/> : <AiOutlineEyeInvisible className='text-xl text-gray-500'/>}
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
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                style={{backgroundColor: '#02929A'}}
                            >
                                REGISTER
                            </button>
                            <div className='flex gap-1 justify-center'>
                                <p className='lg:text-sm text-xs font-normal text-center font-sans mt-4'>Already have an account in Flyket?</p>
                                <Link to={'/login'} className='lg:text-sm text-xs font-normal text-center font-sans mt-4' style={{color: '#02929A'}}>Login</Link>
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
