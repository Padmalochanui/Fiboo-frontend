import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [signupform, setsignupform] = useState({ name: '', email: '', password: '', password2: '', tc: true });
  const handleChange = (e) => {
    var name = e.target.name
    var value = e.target.value
    setsignupform({ ...signupform, [name]: value })
    console.log(signupform)
  }
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (signupform.name === '' || signupform.email === '' || signupform.password === '' || signupform.password2 === '') {
      alert("Please fill all the field ")
    } else if (signupform.name && signupform.email && signupform.password && signupform.password2) {
      const newSignupform = { id: new Date().getTime().toString(), ...signupform };
      setUsers([...users, newSignupform]);
      setsignupform({ name: '', email: '', password: '', password2: '', tc: true });
      console.log(signupform)
    }
    var requestOptions = {

      method: "POST",
      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupform),
      redirect: 'follow'

    };

    fetch("http://127.0.0.1:8000/api/user/register/", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result?.errors) {
          setError(result.errors?.email[0])
          console.log('email checking ', result.errors?.email[0]);
        }
        localStorage.setItem('access_token', result.token.access)
        // if(otpPhone){
        //   storePhone(result.token.access)
        // }
        navigate("/login/")
      })
      .catch(error => setError(error.message));

  }
  return (
    <div className="container mt-4 w-50" >
      <h1 className='bg-primary text-center text-white py-1 rounded'><p>SignUp</p> </h1>
      <div className="form">
        <div className="form-body">
          <div className="username my-4">
            <label htmlFor="firstName"> <b>Name : &nbsp;</b> </label>
            <input className="form-control" type="text" name="name" onChange={handleChange} id="name" placeholder="Full Name" />
          </div>
          <div className="email my-4">
            <label htmlFor="email"> <b>Email : &nbsp;</b> </label>
            <input type="email" id="email" name="email" onChange={handleChange} className="form-control" placeholder="Email" />
          </div>
          <div className="password my-4">
            <label htmlFor="password"> <b>Password : &nbsp;</b>  </label>
            <input className="form-control" type="password" id="password" name="password" onChange={handleChange} placeholder="Password" />
          </div>
          <div className="confirm-password my-4">
            <label htmlFor="confirmPassword"> <b>Confirm Password : &nbsp;</b>  </label>
            <input className="form-control" type="password" id="password2" name="password2" onChange={handleChange} placeholder="Confirm Password" />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" onClick={() => handleSubmit()} className="btn-primary btn-lg rounded">Register</button>
        </div>
      </div>
    </div>
  );
};


export default Signup