import React, { useState } from "react";
import { dbService, storageService } from "../fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Yweet = ({ yweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newYweet, setNewYweet] = useState(yweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this yweet?");
    if (ok) {
      await dbService.doc(`yweets/${yweetObj.id}`).delete();
      await storageService.refFromURL(yweetObj.attachmentUrl).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`yweets/${yweetObj.id}`).update({
      text: newYweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewYweet(value);
  };
  return (
    <div className="yweet">
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onsubmit} className="container yweetEdit">
                <input
                  type="text"
                  placeholder="Edit your yweet"
                  value={newYweet}
                  required
                  autoFocus
                  onChange={onChange}
                  className="formInput"
                />
                <input
                  type="submit"
                  value="Update Yweet"
                  onClick={onSubmit}
                  className="formBtn"
                />
              </form>
              <span onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
              </span>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{yweetObj.text}</h4>
          {yweetObj.attachmentUrl && (
            <img src={yweetObj.attachmentUrl} alt="upload img" />
          )}
          {isOwner && (
            <div className="yweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Yweet;
