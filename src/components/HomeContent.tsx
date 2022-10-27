import { FunctionComponent } from "react";

interface HomecontentProps {}

const Homecontent: FunctionComponent<HomecontentProps> = () => {
  return (
    <div className="container-fluid">
      <h1 className="home-title text-center m-4 title"> Welcome to Biz</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-5 ">
          <img src="./images/home-1.jpg" className="home-img" />
        </div>
        <div className="col-md-5 ">
          <img src="./images/home-2.jpg" className="home-img" />
        </div>
      </div>
    </div>
  );
};

export default Homecontent;
