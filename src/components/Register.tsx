import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbackService";
import { addUser } from "../services/usersService";
import Navbar from "./Navbar";

interface RegisterProps {
  Biz: boolean;
  text: string;
  image: string;
}

const Register: FunctionComponent<RegisterProps> = ({ Biz, text, image }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: yup.object({
      name: yup.string().min(2).required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    }),
    onSubmit: (values) => {
      let user: User = { ...values, biz: Biz };
      addUser(user)
        
        .then((result) => {
          //console.log(result.data);
          sessionStorage.setItem("token", result.data.token); // save the token in session storage
          successMsg("successfully registered !"); // still needs html
          navigate("/signin");
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
      <div className="row m-3">
        <form className="mx-2 w-25 col-md-4" onSubmit={formik.handleSubmit}>
          <h3 className="display-5 text-center">SIGN UP</h3>
          <h5> {text} </h5>
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="name"  
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Name"
            />
            <label htmlFor="inputName">Name</label>
          </div>
          {formik.touched.name && formik.errors.name ? (
            <p className="text-danger">{formik.errors.name}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success w-50"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
            <p className="text-center mt-3">
              <Link to="/">Already a user? click here </Link>
            </p>
          </div>
        </form>
        <div className="col-md-8">
          <img src={image} alt="" className="w-100" />
        </div>
      </div>
    </>
  );
};

export default Register;
