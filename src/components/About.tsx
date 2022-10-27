import { FunctionComponent } from "react";
import AboutContent from "./AboutContent";
import Navbar from "./Navbar";

interface AboutProps {
    
}
 
const About: FunctionComponent<AboutProps> = () => {
    return ( <>
       <Navbar/>
       <AboutContent/>
    </> );
}
 
export default About;