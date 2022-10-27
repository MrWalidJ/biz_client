import { FunctionComponent } from "react";

interface AboutContentProps {}

const AboutContent: FunctionComponent<AboutContentProps> = () => {
  return (
    <div>
      <h1 className="text-center"> About Us</h1>
      <div className="row m-2">
        <div className="col-md-6 text-center">
          <img src="/images/about-img.jpg" alt="img" width="600px" height="580px" />
        </div>
        <div className="col-md-6 text-center">
          <p className="about_txt">
            Business cards are cards bearing business information about a
            company or individual. They are shared during formal introductions
            as a convenience and a memory aid. A business card typically
            includes the giver's name, company or business affiliation (usually
            with a logo) and contact information such as street addresses,
            telephone number(s), fax number, e-mail addresses and website.
            Before the advent of electronic communication business cards might
            also include telex details. Now they may include social media
            addresses such as Facebook, LinkedIn and Twitter. Traditionally,
            many cards were simple black text on white stock, and the
            distinctive look and feel of cards printed from an engraved plate
            was a desirable sign of professionalism. In the late 20th century,
            technological advances drove changes in style, and today a
            professional business card will often include one or more aspects of
            striking visual design. <br /> Our "Biz" platform is for creating
            and publishing business cards. Here other users will be able to see
            your business through your card displayed in this site and contact
            you through the details you prodide in yourbusiness card <br />
            Register now and start your journey !
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
