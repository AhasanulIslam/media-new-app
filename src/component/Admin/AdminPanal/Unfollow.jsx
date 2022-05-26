import React, { useEffect, useState } from "react";
import Navber from "../../Navber";
import axios from "axios";
import {  Table } from "antd";
import "antd/dist/antd.css";
import { Button, Tooltip } from "antd";
import "../../../App.css"

const Unfollow = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState();
  const [ following_user, setFollowing_user] = useState(1);


  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://soapp-nodejs.herokuapp.com/users/view-following-userlist",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
      }
    )
      .then((res) => {
        console.log("HELLO", res);
        setDataSource(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isEditing]);

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  const approve = async (id)  => {
    console.log("Unfollow id", id);

    try {
      const followUser = { following_user }
      console.log(followUser);
      const ggwp1 = await axios.post(
        `https://soapp-nodejs.herokuapp.com/users/unfollow`,{
          following_user : id
      },
        {
          headers: {

            Authorization: `Bearer ${localStorage.getItem("user-info")}`,
          },
        }
      );
      console.log("ggwp",ggwp1)

      setIsEditing(!isEditing)
      console.log("zxcjvxc", ggwp1);

    } catch (error) {
      console.log(error);
    }
  }
  
  const columns = [
   
    {
      key: "1",
      title: "Name",
      dataIndex: "first_name",
    },
    {
      key: "2",
      
      dataIndex: "last_name",
    },
    {
      key: "3",
      title: "Gender",
      dataIndex: "gender",
    },
    {},
    {
      key: "4",
      title: "Actions",
      render: (info) => {
        
        return (
          <>
          <Tooltip placement="topLeft" title="Unfollow this user">
              <Button
              // className="submit"
              onClick={() => approve(info.id)}
              type="primary" shape="round"
            >
              {/* <CheckCircleOutlined  style={{ color: "black", marginLeft: 12 }} /> */}
              Unfollow
            </Button>
            </Tooltip>

    </>
      
    )
    }
   }
 
  ];

  
  return (
    <div className="App">
          <Navber />
          
      <header className="App-header">
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
};
export default Unfollow;

 // await axios
    //   .get(`http://localhost:4000/users/reject/${id}`, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("user-info")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  

  //   async function reject(id) {
  //     try {
  //       const token = localStorage.getItem("user-info");
  //       console.log(token);
  //       const config = {
  //         headers: { Authorization: `Bearer ${token}` },
  //       };
  //       console.log(id);

  //       const result = await axios.patch(
  //         `http://localhost:4000/users/reject/${id}`
  //       );
  //       refreshPage();
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }