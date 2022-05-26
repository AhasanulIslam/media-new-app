import axios from "axios";
import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import Navber from "../../../Navber";
import { Button, Card, Menu } from 'antd'
import {
  EditOutlined
} from "@ant-design/icons";


const { Panel } = Collapse;


const Profile = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://soapp-nodejs.herokuapp.com/users/view-profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUserData(res.data.data);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="full_div" style={{ marginTop: 16 }}>
      <Navber/>
      

      {userData.length > 0 ? (
        userData.map(el => (



          
        //   <div className="Data_Show" key={el.id}>
        //   <h4 className="">First Name : {el.first_name}</h4>
        //   <h4 className="">Last Name : {el.last_name}</h4>
        //   <h4 className="">Email : {el.email}</h4>
        //   <h4 className="">Date of Birth : {el.date_of_birth}</h4>
        //   <h4 className="">Gender : {el.gender}</h4>
        //   {/* <h4 className="">Profile Picture : {el.picture}</h4> */}
        //   <div className="user-profile__left">
        // <img src={el.picture} alt={el.first_name}/>
      // </div>




        


        //   <br />
        //   <br />
         
        // </div>

        <div className="container emp-profile">
          <from method="">
            <div className="row">
              <div className="col-md-3">
                <img src={el.picture} alt={el.first_name} />
              </div>
              <div className="col-md-7">
                <div className="profile-head">
                  <h5>Name</h5>
                  <h5> {el.first_name + " " + el.last_name}</h5>
                  <br/>
                  <h5>Email </h5>
                  <h5>{el.email}</h5>
                  <h5>Gender : {el.gender}</h5>
                  <h5>Birth Date : {el.date_of_birth}</h5>
                </div>
              </div>
            </div>

          </from>
          <Button
        type="primary"
        shape="round"
        icon={<EditOutlined />}
        size='large'
      >
        <a href="/editprofile">
        Update Info
        </a>
      </Button>
        </div>


        ))
      ): <h1>Data not found</h1>}
    </div>
)
}

export default Profile