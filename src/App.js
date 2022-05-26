import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./component/Admin/AdminPanal/Post";
import Follow from "./component/Admin/AdminPanal/Follow";
import Home from "./component/Admin/AdminPanal/Home";
import Unfollow from "./component/Admin/AdminPanal/Unfollow";
import From from "./component/SignUp/From";
import Login from "./component/Login/Login";
import Navber from "./component/Navber";
import Profile from "./component/Admin/AdminPanal/Profile/Profile.jsx";
import EditProfile from "./component/Admin/AdminPanal/EditProfile";

import "./App.css";
import CreatePost from "./component/Admin/AdminPanal/Post/CreatePost";
import ForgetPassword from "./component/Admin/AdminPanal/Forget Password/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <From /> */}
        {/* <Login /> */}
        <Routes>
          <Route path="/signup" element={<From />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/nav" element={<Navber />}></Route>
          <Route path="/follow" element={<Follow />}></Route>
          <Route path="/aprrove" element={<Post />}></Route>
          <Route path="/unfollow" element={<Unfollow />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path="/forget" element={<ForgetPassword />}></Route>





        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
