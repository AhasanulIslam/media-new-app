import { Button, Card, Menu } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import axios from 'axios'

import {  Dropdown, message, Space, Tooltip } from "antd";
import { AppstoreAddOutlined, UserOutlined } from "@ant-design/icons";

const PostCard = ({postInfo}) => {
    const [values, setValues] = useState({
        content: "",
        index: "",
      });

      const [data, NewData] = useState({
        content: ""
      })

      const refContainer = useRef();
  const [dimensions, setDimensions] = 
    useState({ width: 0, height: 0 });
  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);
    // const [post_id, setPost_id] = useState({});
  const [cls, setCls] = useState({color: "green"});


    const [errors, setErrors] = useState({});

    useEffect(() => {
      NewData(values)
    }, [])
    
    const handleChange1 = (event) => {
      NewData({
          ...data,
          [event.target.name]: event.target.value, 
      })
      console.log("xczx12", event.target.value);
  }
    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
        console.log("xcv", event.target.value);
      };
    
      function handleButtonClick(e) {
        message.info("Click on left button.");
        console.log("click left button", e);
      }
    
      function handleMenuClick(e) {
        message.info("Click on menu item.");
        console.log("click", e);
      }
    
      const handleFromSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        axios
          .post(`https://soapp-nodejs.herokuapp.com/post/create-post`, values, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user-info")}`,
            },
          })
          .then((res) => console.log(res.data))
          .catch((e) => console.log(e));
    
        // navigate("/login")
      };

      const postComment = (postInfo, id, content) => {
        const body = {
          post_id: id, 
          content: values.content
      }
      console.log(body);
      console.log("xczxcxc",values);
        axios
        .post(`https://soapp-nodejs.herokuapp.com/post/create-comment`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-info")}`,
          },
        })
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e));
        console.log(postInfo)
        console.log(values)
      }
      
  
      const Like_Change = () => {
        cls.color === 'green' ? setCls({color: 'red'}) : setCls({color: 'green'})
      }

      const Like_Count = (id) => {
        const body = {
          post_id: id
        }
        console.log(body);
        axios
          .post(`https://soapp-nodejs.herokuapp.com/post/like-unlike`, body, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user-info")}`,
            },
          })
          .then((res) => console.log(res.data))
          .catch((e) => console.log(e));
      }




      const updateComment = (postInfo, id) => {
        const body = {
          content:  data.content
      }
      console.log(body);
        axios
        .post(`https://soapp-nodejs.herokuapp.com/post/update-comment/${id}`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-info")}`,
          },
        })
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e));
        console.log(postInfo)
        console.log(values)
      }
     

      

    const menu = (
        <Menu
          onClick={handleMenuClick}
          items={[
            {
              label: "1st menu item",
              key: "1",
              icon: <UserOutlined />,
            },
            {
              label: "2nd menu item",
              key: "2",
              icon: <UserOutlined />,
            },
            {
              label: "3rd menu item",
              key: "3",
              icon: <UserOutlined />,
            },
          ]}
        />
      );
    
  return (
    <Card
    title={postInfo.first_name}
    extra={
      <a href="#">
        <Dropdown.Button
          overlay={menu}
          placement="bottom"
          icon={<AppstoreAddOutlined />}
        >
          More
        </Dropdown.Button>
      </a>
    }
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      backgroundColor: '#fafafa',
      margin: '20px',
    }}

    ref={refContainer}>

  
    <div className="Data_Show" key={postInfo.id}>
      <h4 className=""> {postInfo.content}</h4>
      <h4 className="">{postInfo.picture}</h4>


        <div>

        <style>{`
        .red {color: red}
        .green {color: green}
      `}</style>
      <Button
        type="primary"
        shape="round"
        icon={<LikeOutlined />}
        size='large'
        style={cls}
        // className={cls}
        onClick= {() => {Like_Change(); Like_Count(postInfo.id)}}
        // {() => cls.color === 'green' ? setCls({color: 'red'}) : setCls({color: 'green'}) like() }
      >
        Like
      </Button>

      
          <Button
            type="primary"
            shape="round"
            icon={<CommentOutlined />}
            size='large'
            onClick={() => postComment(postInfo, postInfo.id, postInfo.content)}
          >
            Comment
          </Button>
              
    
      </div>
    </div>
  </Card>
  )
}


export default PostCard