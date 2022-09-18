import React, { useState } from "react";

const Fibonacci = () => {
  const [terms, setTerms] = useState("");
  const [firstnumber, setFirstnumber] = useState("");
  const [secondnumber, setSecondnumber] = useState("");
  const [output, setOutput] = useState(null);
  const handleSubmit = (e) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB"
    );

    var formdata = new FormData();
    if (terms === '' && firstnumber === '' && secondnumber === '') {
      alert("Please Enter Some Value to perform task");
    } else {
      formdata.append("n", terms);
      formdata.append("firstnumber", firstnumber);
      formdata.append("secondnumber", secondnumber);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
      fetch("http://127.0.0.1:8000/api/fibo/fibonacci", requestOptions)
        .then((response) => response.text())
        .then((result) => setOutput(result))
        .catch((error) => console.log(error, "error"));
    }

  };

  return (
    <>
      <div className="container mt-4 w-50">
        <h1 className="text-center bg-primary rounded text-white py-2">Fibonacci Series</h1>
        <div className="">
          <h1> How many number you wants to show:</h1>
          <input
            className="form-control"
            type="number"
            onChange={(e) => {
              console.log("e.target.value", e.target.value);
              setTerms(e.target.value);
            }}
          />
        </div>
        <h1> Enter First Number :</h1>
        <input
          className="form-control"
          type="number"
          onChange={(e) => {
            console.log("e.target.value", e.target.value);
            setFirstnumber(e.target.value);
          }}
        />
        <h1> Enter Second Number : </h1>
        <input
          className="form-control"
          type="number"
          onChange={(e) => {
            console.log("e.target.value", e.target.value);
            setSecondnumber(e.target.value);
          }}
        />
        <div className="text-center">
          <button className="btn-primary btn-lg btn-block" onClick={handleSubmit} style={{ marginTop: "15px" }}>Submit</button>
        </div>
        <div> <h2>Your Result : {output} </h2></div>
      </div>
    </>
  );
};

export default Fibonacci;
