import { FunctionComponent } from "react";
import Homecontent from "./HomeContent";
import NavbarB from "./NavbarB";

// import Navbar from "./Navbar";

interface HomeBProps {}

const HomeB: FunctionComponent<HomeBProps> = () => {
  return (
    <>
      <NavbarB />
      <Homecontent />
    </>
  );
};

export default HomeB;
