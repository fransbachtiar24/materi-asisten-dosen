import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/css/style.css";
import Logo from "../assets/img/undraw_safe_re_kiil.svg";
import cy from "../assets/img/undraw_security_on_re_e491.svg";
import { register } from "../redux/actions/authActions";

function Register() {
  const dispatch = useDispatch();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nama === "") {
      toast.error("Nama Kosong");
      return;
    }
    if (email === "") {
      toast.error("Email Kosong");
      return;
    }
    if (password === "") {
      toast.error("Password Kosong");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
        nama,
      };
      dispatch(register(data));
      toast.success("Register Success !");
      navigate("/login");
    }
  };

  return (
    <React.Fragment>
      <section class="h-full gradient-form bg-gray-200 md:h-screen">
        <div class="container py-12 px-6 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="xl:w-10/12">
              <div class="block bg-white shadow-lg rounded-lg">
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="lg:w-6/12 px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div class="text-center">
                        <img class="mx-auto w-20" src={cy} alt="logo" />
                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                          Login
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div class="mb-4">
                          <input
                            type="text"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="name"
                            placeholder="Nama"
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            type="password"
                            value={password}
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                          />
                        </div>
                        <div class="text-center pt-1 mb-12 pb-1">
                          <button
                            class="inline-block px-6 py-2.5 text-white bg-red-700 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 yui"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Register
                          </button>
                          <a class="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div class="flex items-center justify-between pb-6">
                          <p class="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            class="inline-block px-6 py-2 border-2  text-white bg-red-700 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out yui"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/login");
                            }}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-red-700">
                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 class="text-xl font-semibold mb-6 italic text-center">
                        `yang terpenting itu bukan apa yang dapat diketahui
                        melainkan apa yang bersedia kita pelajari`
                      </h4>
                      <p class="text-sm">
                        <img src={Logo} alt="" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Register;
