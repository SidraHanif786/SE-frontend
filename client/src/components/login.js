import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
     <section className="" >
  <div className="container mx-auto sm:px-4 py-5 ">
    <div className="flex flex-wrap mt-[12%] justify-center items-center ">
      <div className="xl:w-4/5 pr-4 pl-4">
        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 rounded-3 text-black">
          <div className="flex flex-wrap  g-0">
            <div className="lg:w-1/2 pr-4 pl-4">
              <div className="flex-auto p-6 md:p-12 md:mx-6">
                <div>
                  <h1 className="text-4xl mt-1 mb-5 pb-1">Log In To Your Account</h1>
                </div>
                <form>
                  <p>Check your order status, update your billing info, and reveiw past purchase</p>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example11">Email*</label>
                    <input type="email" id="form2Example11" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      placeholder="Phone number or email address" />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example22">Password*</label>
                    <input type="password" id="form2Example22" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" />
                  </div>
                  <div className="pt-1 mb-5 pb-1">
                  <a className="text-gray-700" href="#!">Forgot password?</a><br />
                    <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-900 text-white hover:bg-gray-900  mb-3 mt-5" type="button">Log
                      in</button>
                  </div>

                  <div className="flex items-center justify-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <a className="text-blue-400 hover:text-blue-600 hover:border-b" ><Link to='signup'>Sign Up</Link></a>
                  </div>

                </form>

              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 ">
              <div>
                <img src='Chair.jpg' alt="Chair" width="100%" height="auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Login;