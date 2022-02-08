import React from "react";
import TextField from "@mui/material/TextField";
import { db } from "../firebase_config";
import { collection, addDoc } from "firebase/firestore";
import { getDocs, onSnapshot } from "firebase/firestore";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import { Logout } from "./Logout";
import { query, where } from "firebase/firestore";

const InputTodo = ({ user }) => {
  const [input, setInput] = useState("");
  const [view, setView] = useState([]);
  const userid = user.uid;

  const add = async (e) => {
    console.log("what are you trying todo");
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: input,
        inprogress: true,
        userid: userid,
        timestamp: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setInput("");
  };

  useEffect(() => {
    getTodo();
  }, []);

  // const getTodo = async () => {
  //   const q = query(collection(db, "todos"), where("userid", "==", userid));
  //   const querySnapshot = await getDocs(q);
  //   setView(
  //     querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       todo: doc.data().todo,
  //       inprogress: doc.data().inprogress,
  //       timestamp: doc.data().timestamp,
  //     }))
  //   );
  // };

  const getTodo = () => {
    const q = query(collection(db, "todos"), where("userid", "==", userid));
    onSnapshot(q, (querySnapshot) => {
      setView(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  //   try {
  //     setView(
  //       querySnapshot.map((doc) => ({
  //         id: doc.id,
  //         todo: doc.data().todo,
  //         iprogress: doc.data().iprogress

  //       }))
  //     )
  //   } catch (e) {
  //     console.error("Error getting document: ", e);
  //   }
  // }
  // //

  // {
  //   console.log(`${doc.id} => ${doc.data()}`); }

  return (
    <div>
      <Logout />
      <form style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="standard-basic"
          label="Todo"
          variant="standard"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            console.log("asad is my name");
          }}
        />
        <Button
          type="submit"
          style={{ marginTop: "10px", marginLeft: "20px" }}
          onClick={add}
          variant="contained"
        >
          Add
        </Button>
      </form>
      {view.map((element) => (
        <AddTodo
          todo={element.todo}
          key={element.id}
          id={element.id}
          inprogress={element.inprogress}
          timestamp={element.timestamp}
        />
      ))}
    </div>
  );
};

export default InputTodo;

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 3, 5);
//     }
//   }
// }
