import { NavLink } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

function Home() {
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [hide3, setHide3] = useState(true);

  const togglehide1 = () => {
    setHide1(!hide1);
  };

  const togglehide2 = () => {
    setHide2(!hide2);
  };

  const togglehide3 = () => {
    setHide3(!hide3);
  };

  return (
    <>
      <Header />
      <div className="about-container" id="about">
        <div className="about-left">
          <h3 className="textyellow">about us</h3>
          <p className="p1 kollektif-italic">
            "My favorite time with my dog is when I can drop him off somewhere
            else."
          </p>
          <p className="p1">
            – Said no dog owner ever. <br />
            <br />
            What every dog owner can relate too though, is how challenging it
            can be at times to make every day life work smoothly with a furry
            friend. Most times before you actually get to plan something, like a
            night out with friends, a nice dinner at a restaurant, a weekend
            away or even just some drinks in a bar, the first question that
            comes to your mind is "but what about the dog?". Our goal is to make
            it easier for you to spend as much time with your doggo as possible.
            If you want to find the nearest bar, restaurant, hotel or shop that
            is dogfriendly, need to find someone trustworthy who can look after
            your pupper or if you just want to connect with likeminded people
            – dogGo's got your back! This is a platform made by the community,
            for the community. Sign in, find new friends and pin dogfriendly
            places you know of. dogGo – so you can go places together.
          </p>
          <NavLink to="/dogfriendlyplaces">
            <button className="p3">find dogfriendly places</button>
          </NavLink>
        </div>
        <div className="about-right"></div>
      </div>
      <div className="faq-container">
        <div className="faq-left">
          <h2 className="textwhite">faq</h2>
        </div>
        <div className="faq-right">
          <div className="numbers-container"></div>
          <div className="faq-text">
            <div id="question">
              <h5 className="faq-numbers">1</h5>
              <p className="p1 kollektif textwhite" onClick={togglehide1}>
                how much does it cost?
              </p>
            </div>
            <div id="answer1" className={hide1 ? "hide" : ""}>
              <p className="p2">
                dogGo is a completely free service! Be part of the community and
                help others finding dogfriendly places in pinning those places
                to our map. Beyond that, you will find people on dogGo, who will
                gladly take care of your dog, in case there is no way for you to
                take him with. Return the favor and build a network of dog
                lovers in your area!
              </p>
            </div>
            <div id="question">
              <h5 className="faq-numbers">2</h5>
              <p className="p1 kollektif textwhite" onClick={togglehide2}>
                how do I know my dog is safe?
              </p>
            </div>
            <div id="answer2" className={hide2 ? "hide" : ""}>
              <p className="p2">
                Community members who want to offer free dog sitting need to
                provide personal data and go through a process of
                authentication. In addition to that, you are more than welcome
                to meet your new friends and get to know them, before you drop
                off your furry friend with them.
              </p>
            </div>
            <div id="question">
              <h5 className="faq-numbers">3</h5>
              <p className="p1 kollektif textwhite" onClick={togglehide3}>
                how do I pin a new location?
              </p>
            </div>
            <div id="answer3" className={hide3 ? "hide" : ""}>
              <p className="p2">
                Check out the <a>dogfriendly places</a> and click on the button
                "pin new place". You will be asked to add some basic information
                about the place. After that your pin will appear on the map for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
