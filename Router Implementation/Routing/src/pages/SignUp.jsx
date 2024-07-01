import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index.jsx";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (value) => {
        console.log(value);
      },
    });

  return (
    <div className="min-h-screen bg-slate-400 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="mb-6 text-3xl font-bold text-center">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              type="text"
              placeholder="First Name"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.first_name && touched.first_name ? (
              <p className="form-error text-red-800">{errors.first_name}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              placeholder="Last Name"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.last_name && touched.last_name ? (
              <p className="form-error text-red-800">{errors.last_name}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Email"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error text-red-800">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error text-red-800">{errors.password}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm Password"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error text-red-800">
                {errors.confirm_password}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 text-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
