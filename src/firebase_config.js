// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// const firebaseConfig = {

//   };
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);

//   async function get(db) {
//     const todosCol = collection(db, 'todos');
//     const tododoc = await getDocs( todosCol);
//     const todoList = tododoc.docs.map(doc => doc.data());
//     return todoList ;
//   }
 
//     export default get;

    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";  
    import { getFirestore } from "firebase/firestore";
 

    const firebaseConfig = initializeApp({
      apiKey: "AIzaSyDzWQ2_UHPqtqtEDvF_LhGFZiIyjB5jxUU",
      authDomain: "todo-list-34048.firebaseapp.com",
      projectId: "todo-list-34048",
      storageBucket: "todo-list-34048.appspot.com",
      messagingSenderId: "669731905824",
      appId: "1:669731905824:web:59eb95b45f00013e91f745"
      
    });
     
    
    // const firebase = initializeApp(firebaseConfig);
    const db = getFirestore( firebaseConfig );
   const auth =  getAuth(firebaseConfig)

    export {db,auth};

