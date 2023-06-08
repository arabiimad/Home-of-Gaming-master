import React, { useEffect, useState } from "react";
import firebase from "../../../../firebase";
import ConsoleImage from "./ConsoleImage";
import PcImage from "./PcImage";
import UnderPosts from "../../../../img/UnderPosts.svg";
import "./index.scss"; // Import a CSS file for styling

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Subscribe to real-time updates
    const unsubscribe = firebase
      .firestore()
      .collection("posts")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
      });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  const consolePosts = posts.slice(0, 2); // Get the first two data objects for ConsoleImage components
  const pcPosts = posts.slice(2); // Get the remaining data objects for PcImage components

  // Sort the pcPosts array by the numeric portion of the id
  pcPosts.sort((a, b) => {
    const idA = parseInt(a.id.split(" ")[1]);
    const idB = parseInt(b.id.split(" ")[1]);
    return idA - idB;
  });

  return (
    <>
      <h1 className="text-center fw-bolder m-5">
        Suivi du status en temps réel *
      </h1>
      <div className="d-flex align-items-center justify-content-center gap-5 w-50 mx-auto">
        {consolePosts.map((post) => (
          <ConsoleImage key={post.id} reserved={post.isReserved} />
        ))}
      </div>
      <div className="row mt-5 justify-content-center">
        {pcPosts.map((post, index) => (
          <div className="col-5 p-md-4 p-1 text-center" key={post.id}>
            <PcImage
              pcId={post.id}
              reserved={post.isReserved}
              isLeftColumn={index % 2 === 0}
              games={post.Games}
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <img src={UnderPosts} alt="Description" className="Underposts" />
      </div>
    </>
  );
};

export default Posts;