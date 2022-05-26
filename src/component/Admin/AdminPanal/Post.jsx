import React, { useEffect, useState } from "react";
import Navber from "../../Navber";
import axios from "axios";
import { Table } from "antd";
import "antd/dist/antd.css";
import "../../../App.css";

const Post = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://soapp-nodejs.herokuapp.com/post/view-post", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
      })
      .then((res) => {
        console.log("HELLO", res);
        setDataSource(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Post",
      dataIndex: "content",
    },
    {
      key: "3",
      title: "Picture",
      dataIndex: "picture",
    },
    {},
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
export default Post;
