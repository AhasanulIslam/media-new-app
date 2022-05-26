import axios from "axios";
import React, { useEffect, useState } from "react";
import Navber from "../../Navber";
import { Button, Table, Tooltip } from "antd";
import "antd/dist/antd.css";
import "../../../App.css";

const Follow = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [following_user, setFollowing_user] = useState({});

  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://soapp-nodejs.herokuapp.com/users/view-userlist", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
      })
      .then((res) => {
        console.log("HELLO", res);
        setDataSource(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isEditing, following_user]);

  const follow = async (id) => {
    console.log("Approved id", id);
    console.log("follow id", following_user);
    try {
      const followUser = following_user;
      console.log("after follow", followUser);
      const ggwp1 = await axios.post(
        `https://soapp-nodejs.herokuapp.com/users/follow`,
        {
          following_user: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-info")}`,
          },
        }
      );
      console.log("ggwp", ggwp1);

      setIsEditing(!isEditing);
      console.log("zxcjvxc", ggwp1);
    } catch (error) {
      console.log(error);
    }
  };

  
  

  const columns = [
    {
      key: "2",
      title: "Name",
      dataIndex: "first_name",
    },
    {
      key: "3",
      dataIndex: "last_name",
    },
    {
      key: "4",
      title: "Gender",
      dataIndex: "gender",
    },
    {},

    {
      key: "5",
      title: "Actions",
      render: (info) => {
        return (
          <>
            <Tooltip placement="topLeft" title="Follow this user">
              <Button
                onClick={() => follow(info.id)}
                type="primary"
                shape="round"
              >
                Follow
              </Button>
            </Tooltip>

          </>
        );
      },
    },
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

export default Follow;
