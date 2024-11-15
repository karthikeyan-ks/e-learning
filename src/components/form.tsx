import React from 'react';
import './form.css';

const Form = () => {
  return (
    <form className="custom-form">
      <div className="form-row">
        <input type="text" placeholder="First name" className="half-width" />
        <input type="text" placeholder="Last name" className="half-width" />
      </div>
      <div className="form-row">
        <input type="email" placeholder="Your email" className="large-width" />
        <input type="number" placeholder="Age" className="small-width" />
      </div>
      <div className="form-row">
        <input type="date" placeholder="Date Of Birth" className="half-width" />
        <input type="tel" placeholder="Phone number" className="half-width" />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Semester" className="small-width" />
        <input type="text" placeholder="Department" className="large-width" />
      </div>
      <div className="form-row full width">
        <input type="text" placeholder="College Name" className="large-width" />
      </div>
      <button type="submit">Submit</button>
      <p className="terms">
        By contacting us, you agree to our <a href="#">Terms of service</a> and <a href="#">Privacy Policy</a>
      </p>
    </form>
  );
};

export default Form;
