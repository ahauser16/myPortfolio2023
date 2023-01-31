import React from "react";
import portPicOne from "../images/icelandFourCropped.jpg";
import portPicTwo from "../images/icelandOneCropped.jpg";
import portPicFive from "../images/icelandSixCropped.jpg";
import portPicFour from "../images/icelandThreeCropped.jpg";
import portPicThree from "../images/icelandTwoCropped.jpg"; 

export const Portfolio = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1>My Work</h1>
        <div className="portfolioItems">
          {/* Portfolio Item1 */}
          <figure class="portfolioItem ">
            <img
              className="portfolioImg"
              src={portPicOne}
              alt="portfolio item"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>

          {/* Portfolio Item2 */}
          <figure class="portfolioItem featured">
            <img
              className="portfolioImg"
              src={portPicTwo}
              alt="a fjord in Iceland on a sunny day"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>

          {/* Portfolio Item3 */}
          <figure class="portfolioItem ">
            <img
              className="portfolioImg"
              src={portPicThree}
              alt="hot springs in Iceland"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>

          {/* Portfolio Item4 */}
          <figure class="portfolioItem ">
            <img
              className="portfolioImg"
              src={portPicFour}
              alt="giant fjord and a small house"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>

          {/* Portfolio Item5 */}
          <figure class="portfolioItem">
            <img
              className="portfolioImg"
              src={portPicFive}
              alt="greenland as seen from space"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};
