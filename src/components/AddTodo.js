import { ListItem, ListItemText, Button } from "@mui/material";
import { db } from "../firebase_config";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import React from "react";

export const AddTodo = ({ todo, id, inprogress, timestamp }) => {
  const update = async () => {
    const ids = doc(db, "todos", id);
    await updateDoc(ids, {
      inprogress: !inprogress,
    });
   
  };

  const deleted = async () => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div style={{ display: "flex", width: "20%", margin: "0 auto" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "Inprogress" : "completed"}
        />
      </ListItem>
      <Button onClick={update}>{inprogress ? "Done" : "Undone"}</Button>
      <Button onClick={deleted}>X</Button>
    </div>
  );
};

export default AddTodo;
