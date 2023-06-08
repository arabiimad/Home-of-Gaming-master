import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ConsoleImage from "./ConsoleImage";

const Posts = () => {
  return (
    <>
      <h1 className="text-center fw-bolder m-5">
        Suivi Du Status En Temps Réel
      </h1>
      <div className="d-flex align-items-center justify-content-center gap-5">
        <ConsoleImage reserved={false} />
        <ConsoleImage reserved={true} />
      </div>
    </>
  );
};

export default Posts;
