import { FunctionComponent } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { errorMsg, successMsg } from "../services/feedbackService";
import NavbarB from "./NavbarB";
import { addCard } from "../services/CardsService";

interface AddCardProps {}

const AddCard: FunctionComponent<AddCardProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      description: "",
      phone: "",
      image: "",
     
    },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      address: yup.string().required().min(0),
      description: yup.string().required().min(2),
      phone: yup.string().required().min(8),
      image: yup.string().required().min(2),
    }),
    onSubmit: (values) => {
      addCard(values)
        // .then((result) => console.log(result.data))
        .then((result) => {
          console.log(result.data);
          successMsg("Card was successfully added !"); // still needs html
          navigate("/allcards");
        })
        .catch((error) => {
          console.log(error);
          errorMsg("OOPS... something went wrong");
        });
    },
  });
  return (
    <div className="container-fluid">
      <NavbarB />
      <div className="row m-2">
        <div className="col-md-8 text-center">
        <img src="/images/img3.jpg" alt="img" width="600px" height ="580px"/>
        </div>
       
        <form className="me-1 col-md-3 " onSubmit={formik.handleSubmit}>
          <h3 className="display-5 text-center">Add New Card</h3>
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
            <label htmlFor="inputName">Business Name</label>
          </div>
          {formik.touched.name && formik.errors.name ? (
            <p className="text-danger">{formik.errors.name}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Address"
            />
            <label htmlFor="inputAddress">Business address</label>
          </div>
          {formik.touched.address && formik.errors.address ? (
            <p className="text-danger">{formik.errors.address}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputDesc"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Category"
            />
            <label htmlFor="inputDesc">Business Description</label>
          </div>
          {formik.touched.description && formik.errors.description ? (
            <p className="text-danger">{formik.errors.description}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputphone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="phone"
            />
            <label htmlFor="inputPassword">Business Phone</label>
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-danger">{formik.errors.phone}</p>
          ) : null}
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="inputImage"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Image"
            />
            <label htmlFor="inputImage">Business Image </label>
          </div>
          {formik.touched.image && formik.errors.image ? (
            <p className="text-danger">{formik.errors.image}</p>
          ) : null}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-50 mb-3"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
