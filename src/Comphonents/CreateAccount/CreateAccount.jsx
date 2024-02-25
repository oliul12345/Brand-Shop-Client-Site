import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const {createUser,updateProfileImage} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo)

        createUser(email,password)
        .then(res => {
          console.log(res.user)
         
          Swal.fire({
            title: 'Success',
            text: 'Create User Successfully',
            icon: 'Success',
            confirmButtonText: 'ok'
          })
          form.reset()
          updateProfileImage(name,photo)
          .then(res => {
            console.log(res.user)
          })
          .catch(error => {
            console.error(error)
          })
        })
        .catch(error => {
          console.error(error)
        })
    }
  return (
    <div>
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register Now</h1>
            <p className="py-6">
              Fill Up the Input values and submit required Information
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
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
                <button className="btn btn-primary">Register Now</button>
              </div>
            </form>
            <p className="text-center mb-4">Already sign Please <span className="text-red-700 font-bold"><Link to={'/logIn'}>LogIn</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
