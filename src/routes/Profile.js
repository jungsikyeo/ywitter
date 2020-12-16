import React, { useEffect } from "react";
import { authService, dbService } from "../fbase";
import { useHistory } from "react-router-dom";

export default ({userObj}) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setNewDisplayName(value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const getMyYweets = async() => {
    const yweets = await dbService.collection("yweets").where("creatorId", "==", userObj.uid).orderBy("createdAt", "desc").get();
  };
  return (
    <>
    <form onSubmit="yy">
      <input type="text" placeholder="Display name" />
      <input type="submit" value="Update Profile" />
    </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
