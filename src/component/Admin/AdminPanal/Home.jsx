import { Collapse } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navber from "../../Navber";
import PostCard from "./Post/Card/PostCard";

const { Panel } = Collapse;

const Home = () => {
  const [values, setValues] = useState({
    content: "",
    index: "",
  });

  const [userData, setUserData] = useState({});



  console.log("gg", values);


 

  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://soapp-nodejs.herokuapp.com/post/view-post", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
        // console.log(
        //   "quiz",
        //   res.data.map((res) => {
        //     console.log(res.data)
        //   })
        // );
        // setUserData(res.data.quiz);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  // Like = () => {

  // }

  // console.log("check", userData.data.quiz)

  return (
    <div className="full_div" style={{ marginTop: 16 }}>
      <Navber />

      {userData && userData.length > 0 ? (
        userData.map((el, index) => (
          // <h1>{el.quiz_name}</h1>
            <PostCard postInfo={el} key={index} />
        
        ))
      ) : (
        <h1>Data not found</h1>
      )}
    </div>
  );
};

export default Home;
