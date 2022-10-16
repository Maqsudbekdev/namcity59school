import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import APP from "../../firebase/firebase";
// import IMG from "../../images/image/sign.svg";
import "./css/signin.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Signin = () => {
  const Auth = getAuth(APP);
  const provider = new GoogleAuthProvider();

  // Google |
  const SingInWithGoogle = () => {
    signInWithPopup(Auth, provider)
      .then((res) => {
        console.log(res?.user?.displayName);
        localStorage.setItem("Name", res.user.displayName);
        localStorage.setItem("Email", res.user.email);
        localStorage.setItem("Photo", res.user.photoURL);
      })
      .catch((error) => console.log(error));
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Email Login
  // const navigate = useNavigate();
  const Login = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        Auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
    // navigate("/");
  };

  return (
    <div className="login">
      <Navbar />
      <div className="sign-in">
        <h1 className="Sign_in_text">Sign In</h1>

        <form>
          <input
            className="email"
            type="email"
            placeholder="Email poshcta"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            className="password"
            type="password"
            placeholder="Parol"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button onClick={Login} className="login_email">
            Ro'yxatdan o'tish
          </button>
          <div onClick={SingInWithGoogle} className="Sign_in_with_google">
            <FcGoogle /> Google orqali ro'yxatdan o'tish
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
