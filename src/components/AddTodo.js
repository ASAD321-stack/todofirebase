import { ListItem, ListItemText, Button } from "@mui/material";

import React from "react";

export const AddTodo = ({ todo, id, inprogress, timestamp,userId,deleted,update }) => {

  // const update = async () => {
  //   const ids = doc(db, "todos", id);
  //   await updateDoc(ids, {
  //     inprogress: !inprogress,
  //   });
  // };


 

  return (
    <div style={{ display: "flex", width: "20%", margin: "0 auto" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "Inprogress" : "completed"}
        />
      </ListItem>
      <Button onClick={()=>{update(id,inprogress)}}>{inprogress ? "Done" : "Undone"}</Button>
      <Button onClick={()=>deleted(id)}>X</Button>
    </div>
  );
};

export default AddTodo;
