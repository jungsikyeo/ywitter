import React, { useState } from "react";
import { dbService, storageService } from "../fbase";

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
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onsubmit}>
                <input
                  type="text"
                  placeholder="Edit your yweet"
                  value={newYweet}
                  required
                  onChange={onChange}
                />
                <input type="submit" value="Update Yweet" onClick={onSubmit} />
              </form>
              <button onClick={toggleEditing}>Cancel</button>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{yweetObj.text}</h4>
          {yweetObj.attachmentUrl && (<img src={yweetObj.attachmentUrl} width="50px" height="50px" />)}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Yweet</button>
              <button onClick={toggleEditing}>Edit Yweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Yweet;
