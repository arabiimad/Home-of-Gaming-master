import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./index.scss";
import Loader from "../../Loader";

firebase.initializeApp({
  apiKey: "AIzaSyD6gZzIF-TSalOE3DKcpx0GdAMfg-O5xpc",
  authDomain: "h-o-g-979a0.firebaseapp.com",
  projectId: "h-o-g-979a0",
  storageBucket: "h-o-g-979a0.appspot.com",
  messagingSenderId: "477544623255",
  appId: "1:477544623255:web:e30d00d09712e559b00dd2",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const Admin = () => {
  // Start Loading  animation code
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }
  // End Loading animation code

  // Start firebase code
  const [user] = useAuthState(auth);
  // End firebase code
  return (
    <div className="pt-5">
      {/* if you removed the <div className="pt-5">, the text would be under the navbar */}
      {/* <h1 className="text-center mt-5 text-white">Admin</h1> */}
      {user ? <Controllers /> : <SignIn />}
    </div>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <h1
        className="btn btn-lg btn-primary m-5 d-block"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </h1>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </button>
    )
  );
}

function Controllers() {
  const messageRef = firestore.collection("posts");
  const query = messageRef.orderBy("createdAt").limit(25);

  const [message] = useCollectionData(query, { idField: "id" });

  return (
    <>
      <div style={{ height: "100vh" }}>
        {message &&
          message.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  return (
    <div className="m-5">
      <h1 className="text-white">{text}</h1>
    </div>
  );
}

export default Admin;
