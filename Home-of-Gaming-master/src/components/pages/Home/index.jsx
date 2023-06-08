import { useEffect, useState } from "react";
import Book from "./Book";
import Landing from "./Landing";
import Loader from "../../Loader";
import Materiels from "./materiels/materiel";
import Photogames from "./Photogame";
import Hbc from "./homebc";
import Posts from "./Posts";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Landing />
      <Posts />
      <Book />
      <Materiels />
      <Photogames />
      <Hbc />
    </>
  );
};

export default Home;
