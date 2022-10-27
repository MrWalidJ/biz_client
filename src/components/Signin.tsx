import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { errorMsg, successMsg } from "../services/feedbackService";
import { checkUser } from "../services/usersService";
import Navbar from "./Navbar";

interface SigninProps {}

const Signin: FunctionComponent<SigninProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    }),
    onSubmit: (values) => {
      checkUser(values)
        // .then((result) => console.log(result.data))
        .then((result) => {
          // console.log(result.data);
          sessionStorage.setItem("token", result.data.token); // save the token in session storage
          successMsg("successfully signed in !"); // still needs html
          navigate("/homein");
        })
        .catch((error) => {
          console.log(error);
          errorMsg("OOPS... something went wrong");
        });
    },
  });
  return (
    <>
      <Navbar />
      <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
        <h3 className="display-5 text-center"> SIGN IN </h3>
        <div className="mb-3 form-floating">
          <input
            type="email"
            className="form-control"
            id="inputEmailSignin"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email"
          />
          <label htmlFor="inputEmailSignin">Email address</label>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p className="text-danger">{formik.errors.email} </p>
        ) : null}
        <div className="mb-3 form-floating">
          <input
            type="password"
            className=" form-control"
            id="inputPasswordSignin"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
          <label htmlFor="inputPasswordSignin">Password</label>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <p className="text-danger">{formik.errors.password}</p>
        ) : null}
        <div>
          <button
            type="submit"
            className="btn btn-secondary w-100"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Submit
          </button>
          <p className="text-center mt-3">
            <Link to="/signup">New user? register here</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Signin;
