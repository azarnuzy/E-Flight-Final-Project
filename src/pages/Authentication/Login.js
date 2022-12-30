import React, { useEffect, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiConfig from '../../api/apiConfig';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { setisLogin } from '../../features/user/userSlice';
import text from '../../assets/text.png';
import image from '../../assets/image.png';
import logo from '../../assets/logo-full.png';
import Swal from 'sweetalert2';

export const Login = () => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const location = useLocation();

  let from = location.state?.from?.pathname + '?' || '';
  const searchParams = location.state?.params;

  searchParams?.forEach(([value, key]) => {
    from += `${key}=${value}&`;
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiConfig.baseUrl}auth/sign-in`, {
        email,
        password: pwd,
      });
      localStorage.setItem('user-info', JSON.stringify(response?.data.data));
      localStorage.setItem('email', JSON.stringify(response?.data.data.email));
      setCredentials(response?.data.data);
      dispatch(setisLogin(true));

      // console.log(from);
      if (from.indexOf('undefined') === 0) {
        navigate('/');
      } else {
        navigate(from, { replace: true });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email atau Password Salah!',
      });
      //   if (!err?.response) {
      //     setErrMsg('No Server Response');
      // } else if (err.response?.status === 400) {
      //     setErrMsg('Missing Username or Password');
      // } else if (err.response?.status === 401) {
      //     setErrMsg('Unauthorized');
      // } else {
      //     setErrMsg('Login Failed');
      // }
    }
  };

  useEffect(() => {
    const EMAIL_REGEX =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  return (
    <div className="flex lg:flex-row flex-col lg:h-screen bg-primary min-h-screen">
      <div className="lg:w-1/2 lg:p-10 lg:ml-10 p-5">
        <img
          className="lg:w-36 w-20 mx-auto lg:-mx-12 lg:-mt-2 cursor-pointer"
          onClick={() => navigate(`/`)}
          src={logo}
          alt="Gambar"
        ></img>
        <img
          className="lg:w-60 w-[150px] mx-auto lg:m-12 mt-10"
          src={text}
          alt="Gambar"
        ></img>
        <img
          className="lg:w-fit w-[260px] lg:mb-5 lg:-mt-2 mt-5 mx-auto"
          src={image}
          alt="Gambar"
        ></img>
      </div>
      <div className="w-full lg:w-1/2 lg:p-12 px-3 py-0 justify-center">
        <div className="w-full max-w-md space-y-4 lg:mx-auto lg:mt-[150px] lg:my-10">
          <div className="bg-white lg:p-6 px-6 py-3 rounded-md">
            <h4 className="lg:mt-4 mt-2 text-center lg:text-xl text-lg font-bold tracking-tight">
              LOGIN
            </h4>
            <p className="text-sm font-normal font-sans lg:mt-5 mt-3">
              Login to start your exploration.
            </p>
            <form className="space-y-4" onSubmit={handleSubmitLogin}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md">
                <div
                  className={
                    emailFocus && email && !validEmail
                      ? `px-3 py-2 border text-slate-50 border-red-500 border-solid rounded-md flex justify-between`
                      : `px-3 py-2 border border-gray-300  rounded-md flex justify-between`
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
                  data-testid="emailidnote"
                  className={
                    emailFocus && email && !validEmail
                      ? 'lg:text-sm text-xs relative rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none -mx-1 mt-1.5 text-red-500 pl-3 flex gap-1 items-center'
                      : 'offscreen'
                  }
                >
                  <FaInfoCircle />
                  The email is not a valid email address
                </p>
                <div
                  className={
                    pwdFocus && pwd && !validPwd
                      ? `px-3 py-2 border text-slate-50 border-red-500 border-solid rounded-md flex justify-between mt-3`
                      : `px-3 py-2 border border-gray-300  rounded-md flex justify-between mt-3`
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
                    {visiblePass ? (
                      <AiFillEye className="text-xl text-gray-500 cursor-pointer" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-xl text-gray-500 cursor-pointer" />
                    )}
                  </label>
                </div>
                <div
                  id="pwdnote"
                  data-testId="passwordidnote"
                  className={
                    pwdFocus && pwd && !validPwd
                      ? 'lg:text-sm text-xs relative rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none -mx-1 mt-1.5 text-red-500 pl-3 gap-1 items-center'
                      : 'offscreen'
                  }
                >
                  <p className="flex gap-2">
                    <FaInfoCircle className="lg:text-2xl text-4xl" />8 to 24
                    characters. Must include uppercase and lowercase letters, a
                    number and a special character.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                // onClick={() => handleSubmitLogin()}
                className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white lg:bg-primary lg:hover:bg-thirdly bg-primary hover:bg-thirdly"
              >
                LOGIN
              </button>
              <div className="flex gap-1 justify-center">
                <p className="lg:text-sm text-xs font-normal text-center font-sans lg:mt-2 mt-0">
                  Don't have any account in Flyket?
                </p>
                <Link
                  to={'/signup'}
                  className="lg:text-sm text-xs font-normal text-center font-sans lg:mt-2 mt-0 text-primary"
                >
                  Register
                </Link>
              </div>
              {/* <p className='text-sm font-extralight text-center font-sans mt-4'>Or</p>
                            <div
                                className="flex gap-3 z-0 w-full p-3 mt-5 cursor-pointer rounded rounded-md border border-gray-300 justify-center"
                                onClick={signInWithGoogle}
                            >
                                <FcGoogle className="text-2xl" />
                                <p className="font-normal text-base">Continue with Google</p>
                            </div> */}
              {/* <div
                                className="flex gap-3 z-0 w-full p-3 mt-5 mb-4 cursor-pointer rounded rounded-md border border-gray-300 justify-center"
                            >
                                <GrFacebook className="text-blue-900 text-2xl" />
                                <p className="font-normal text-base">Continue with Google</p>
                            </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
