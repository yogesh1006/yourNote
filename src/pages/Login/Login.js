import { React,useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/AuthContext";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Loader from "react-loader-spinner";
import "./login.css"

export function Login() {
  const { authDispatch } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setLoading(true)
      axios
        .post(`${process.env.REACT_APP_BACKEND}/auth/login`, values)
        .then((response) => {

          let data = response.data.data;
          localStorage?.setItem(
            "login",
            JSON.stringify({ isUserLoggedIn: true, token: data.token })
          );
          toast.success(response.data.message);
          authDispatch({ type: "LOGIN", payload: data.token });
          setLoading(false)
          history.push("/");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="login-page">
        <div>
          <h1>Signin</h1>
        </div>
        <div className="input">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="input-field"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            size={35}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{color:"red"}}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="input-field"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            size={35}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{color:"red"}}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-dark">
          Login
        </button>
        <div className="signup-link">
          <p>
            Don't have an Account?<NavLink to="/register"><span style={{color:"InfoBackground"}}>Signup</span> </NavLink>
          </p>
        </div>
        {loading && (
        <div className="load">
          <Loader type="TailSpin" color="#ffffff" height={35} width={35} />
        </div>)
       }
      </form>
    </>
  );
}