import { FunctionComponent } from "react";
import AboutContent from "./AboutContent";
import NavbarB from "./NavbarB";

interface AboutBProps {}

const AboutB: FunctionComponent<AboutBProps> = () => {
  return (
    <>
      <NavbarB />
      <AboutContent />
    </>
  );
};

export default AboutB;
