import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    number: "",
    email: "",
    msg: ""
  });
  const InputEvent = (event) => {
    const { name, value } = event.target
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    if (data.fullName != "" && data.email != "" && data.number != "" && data.msg != "") {
      alert(`your Name is ${data.fullName} phone number is  ${data.number} email id ${data.email} and your comment is ${data.msg}`)
    } else {
      alert("plz Input your data")
    }
    setData({
      fullName: "",
      number: "",
      email: "",
      msg: ""
    })
  }
  return (
    <>
      <div className='my-5 text-center'>
        <h1>Contact Us</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row' >
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='fullName'
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='number'
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Enter Your Phone Number"

                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com" />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name='msg'
                  value={data.msg}
                  onChange={InputEvent}>

                </textarea>
              </div>
              <div class="mb-3 text-center">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
