import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, deleteUser } from "../features/users/usersSlice";

export default function UserPage() {
  const { userId } = useParams()

  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => user.id === Number(userId));
  console.log(user)
  console.log(userId)
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      id: user.id,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value.length === 0? user.password: passwordRef.current.value,
    };

    dispatch(updateUser(updatedUser));
  };

  const handleClick = () => {
    dispatch(deleteUser(user.id));
    navigate("/");
  }

  useEffect(() => {
    nameRef.current.value = user.name;
    emailRef.current.value = user.email;
    phoneRef.current.value = user.phone;
    passwordRef.current.value = "";
  }, [user]);

  return (
    <div>
      <h1>Redux CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" ref={nameRef} />
        <input type="email" name="email" ref={emailRef} />
        <input type="text" name="phone"  ref={phoneRef} />
        <input type="password" name="password" placeholder="New Password" ref={passwordRef} />
        <button type="submit" className="update-button">Update</button>
      </form>
      <button onClick={handleClick} className="delete-button">Delete</button>
      <button onClick={() => navigate("/")}>Logout</button>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
