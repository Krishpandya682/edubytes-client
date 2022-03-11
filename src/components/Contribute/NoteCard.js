import React , {useEffect, useState}from "react";
import classes from "./contribute.module.css";
import { useNavigate } from "react-router-dom";

const NoteCard = (props) => {
  const [userinfo , setuserinfo] = useState({})
 


  const fetchUserInfo = async () => {

    const response = await fetch(
      `http://localhost:5000/api/auth/getusernoauth/${props.user}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setuserinfo(json)
  };
  console.log(userinfo)
  useEffect(() => {
  fetchUserInfo()
  }, [])
  

  return (
    <div>
      
      <div  className={classes.Notes}>
        <a style={{width: "100px"}} href={props.link} target="_blank">
          <p style={{ fontSize: "14px" ,  color: "#495057" , maxWidth: "200px" }}>
            {props.title.substring(0,28)}
          </p>
          <p style={{ fontSize: "12px", color: "#495057", margin: "0" , maxWidth: "200px"  }}>
            <span style={{fontSize: "10px"}}> By</span> {userinfo?.name}
          </p>
        </a>
      </div>
    </div>
  );
};

export default NoteCard;
