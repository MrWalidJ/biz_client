import { FunctionComponent } from "react";
import Homecontent from "./HomeContent";
import Navbar from "./Navbar";

// import Navbar from "./Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Homecontent />
    </>
  );
};

export default Home;
