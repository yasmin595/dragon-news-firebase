import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser} = use(AuthContext);
const handleRegister=(e)=>{
e.preventDefault();
const form = e.target;
const name = form.name.value;
const photo = form.photo.value;
const email = form.email.value;
const password = form.password.value;
console.log({name, photo, email, password});
createUser(email, password)
.then(result=>{
    const user =result.user;
  setUser(user)
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
    console.log(errorCode);
  });

}

    return (
        < div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='font-semibold text-2xl text-center py-4'>Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Name" required />
            {/* photo url */}
            <label className="label">Photo URl</label>
            <input name='photo' type="text" className="input" placeholder="Photo URl"  required />
            {/* email */}
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />
            {/* password */}
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />
            <div><a className="link link-hover">Forgot password?</a></div>
          
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
            <p className='font-semibold text-center py-4'>Already Have An Account ? <Link className='text-secondary ' to='/auth/login'>Login</Link> </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;