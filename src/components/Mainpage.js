import { Button } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
const Mainpage = () => {
  return (
    <>
      <div className="container my-4" >
        <div> <h1 className='bg-primary text-white py-2 rounded'> Fibonacci Series Login Page</h1></div>
        <div className='d-flex'>
          <Link to="/signup/">
            <Button type="primary" className=" btn-primary rounded btn-block m-2" >
              SignUp
            </Button>
            {/* <button className='btn btn-primary'>Signup</button> */}
          </Link>
          <Link to="/login/">
            <Button type="primary" className=" btn-primary rounded m-2" >
              Login
            </Button>
            {/* <button className='btn btn-primary'>Login</button> */}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Mainpage