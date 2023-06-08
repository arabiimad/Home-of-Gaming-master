import { useEffect, useState } from "react";
import firebase from "../../../firebase";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRef = firebase.firestore().collection("posts");

      try {
        const querySnapshot = await postsRef.get();
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
      } catch (error) {
        console.error("Error getting posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleChangeState = async (postId, newState) => {
    const postsRef = firebase.firestore().collection("posts");

    try {
      await postsRef.doc(postId).update({
        isReserved: newState,
      });

      // Update the state locally
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, isReserved: newState } : post
        )
      );
    } catch (error) {
      console.error("Error updating post state:", error);
    }
  };

  const consolePosts = posts.slice(0, 2); // Get the first two data objects for ConsoleImage components
  const pcPosts = posts.slice(2); // Get the remaining data objects for PcImage components

  // Sort the pcPosts array by the numeric portion of the id
  pcPosts.sort((a, b) => {
    const idA = parseInt(a.id.split(" ")[1]);
    const idB = parseInt(b.id.split(" ")[1]);
    return idA - idB;
  });

  return (
    <div>
      <h1 className="m-5 p-5 text-center">Admin</h1>
      <div className="row gap-3 container text-center">
        {consolePosts.map((post) => (
          <div
            className={`col rounded-4 border border-5 ${
              post.isReserved ? "border-danger" : "border-success"
            } p-5`}
            key={post.id}
          >
            <strong className="fs-3">{post.id}</strong>
            <br />
            <strong>isReserved:</strong> {post.isReserved.toString()}
            <br />
            <div
              className="mt-3 btn btn-primary adminbtn"
              onClick={() => handleChangeState(post.id, !post.isReserved)}
            >
              Change State
            </div>
          </div>
        ))}
        {pcPosts.map((post) => (
          <div
            className={`col rounded-4 border border-5 ${
              post.isReserved ? "border-danger" : "border-success"
            } p-5`}
            key={post.id}
          >
            <strong className="fs-3">{post.id}</strong>
            <br />
            <strong>isReserved:</strong> {post.isReserved.toString()}
            <br />
            <div
              className="mt-3 btn btn-primary adminbtn"
              onClick={() => handleChangeState(post.id, !post.isReserved)}
            >
              Change State
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;