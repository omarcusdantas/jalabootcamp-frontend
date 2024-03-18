import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "./usersSlice";

export default function SignupPage() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
    };

    if (users.find((user) => user.email === newUser.email)) {
      alert("Email already registered");
      e.target.reset();
      return;
    }

    dispatch(createUser(newUser));
    navigate("/");
  };

  return (
    <div>
      <h1>Redux CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" required ref={nameRef} />
        <input type="email" name="email" placeholder="email" required ref={emailRef} />
        <input type="text" name="phone" placeholder="phone" required ref={phoneRef} />
        <input type="password" name="password" placeholder="password" required ref={passwordRef} />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/">Do you already have an account? Log in!</Link>
    </div>
  );
}
