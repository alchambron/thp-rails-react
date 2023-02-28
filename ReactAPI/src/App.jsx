import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/User/Forms/SignIn";
import SignUp from "./components/User/Forms/SignUp";
import User from "./components/User/User";

export default function App() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="sign_in" element={<SignIn />} />
          <Route path="sign_up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}
