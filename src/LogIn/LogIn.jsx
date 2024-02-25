import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {logInUser,signInGoogle} = useContext(AuthContext);

    const handleLogIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        logInUser(email,password)
        .then(res => {
          console.log(res)
          Swal.fire({
            title: 'Success',
            text: 'LogIN Successfully',
            icon: 'Success',
            confirmButtonText: 'ok'
          })
          navigate(location?.state ? location.state : '/')
          form.reset()
        })
        .catch(error => {
          console.error(error)
        })
    }

    const handleGoogleLogIn = () => {
      signInGoogle()
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    }
    

  return (
    <div>
      <div className="hero min-h-screen bg-gray-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
      
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-300">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex justify-center items-center">
            <button onClick={handleGoogleLogIn} className="w-3/4 items-center bg-red-400 p-3 rounded-xl mb-5 text-white font-bold"> <span className="flex justify-center gap-4 items-center"><FaGoogle></FaGoogle>  <p>SignIn Google</p></span></button>
            </div>
            <p className="text-center mb-4 p-4"> You are new to this site Please <span className="text-red-700 font-bold"><Link to={'/createAccount'}>Register</Link></span></p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LogIn;
