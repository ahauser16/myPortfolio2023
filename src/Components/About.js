import React from "react";
import introPicLeft from "../images/laylaTwo.jpg";
import introPicRight from "../images/charlieFour.jpg";
import aboutMePic from "../images/scubaOne.jpg";

export const About = () => {
  return (
    <>
      <section className="introCont">
        <div className="introLeft">
          <img src={introPicLeft} alt="hounds running" />
        </div>
        <div className="introMiddle">
          <h2>Making it happen</h2>
          <p>
            Lorem ipsum Anim officia irure est aliquip exercitation magna
            deserunt do amet ut pariatur proident dolore dolore. Quis labore
            ipsum irure exercitation eiusmod officia aliqua do. Ullamco aliquip
            aute consectetur eiusmod reprehenderit do laborum id laborum veniam
            ea sit consectetur eu. Incididunt qui sunt reprehenderit sunt qui
            qui laborum culpa pariatur amet. Reprehenderit laborum eiusmod
            cillum minim officia nisi veniam sunt ea esse ad.
          </p>
          <p>
            Lorem ipsum Anim officia irure est aliquip exercitation magna
            deserunt do amet ut pariatur proident dolore dolore. Quis labore
            ipsum irure exercitation eiusmod officia aliqua do. Ullamco aliquip
            aute consectetur eiusmod reprehenderit do laborum id laborum veniam
            ea sit consectetur eu. Incididunt qui sunt reprehenderit sunt qui
            qui laborum culpa pariatur amet. Reprehenderit laborum eiusmod
            cillum minim officia nisi veniam sunt ea esse ad.
          </p>
        </div>
        <div className="introRight">
          <img src={introPicRight} alt="treeing walker coonhound running" />
        </div>
      </section>
      <section className="aboutMe" id="about">
        <img className="aboutImg" src={aboutMePic} alt="arthur on a boat" />
        <h1 className="aboutTitle">Arthur John Hauser</h1>
        <h2 className="aboutSubtitle">MERN Stack Developer</h2>
        <div className="aboutText">
          <p>
            Laboris do amet veniam voluptate nulla nostrud labore sint. Ea et
            duis eiusmod deserunt reprehenderit proident. Voluptate ad enim
            proident commodo nisi reprehenderit ad veniam ex nostrud aliqua.
          </p>
          <p>
            Laboris do amet veniam voluptate nulla nostrud labore sint. Ea et
            duis eiusmod deserunt reprehenderit proident. Voluptate ad enim
            proident commodo nisi reprehenderit ad veniam ex nostrud aliqua.
          </p>
        </div>
      </section>
    </>
  );
};
