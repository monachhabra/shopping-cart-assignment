import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./RegisterForm.css";

const RegisterForm = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <div className="mainclass">
      <div className="left">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="right">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              id="firstName"
              className="form-input"
              placeholder="Enter your First Name"
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              id="lastName"
              className="form-input"
              placeholder="Enter your Last Name"
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter your Email"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter your Password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}
              id="confirmpassword"
              className="form-input"
              placeholder="Enter your Confirm Password"
            />
            {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
          </div>

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
