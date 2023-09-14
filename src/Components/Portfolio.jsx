/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "RecruitEase",
    description:
      "Digital Recruitment Solution: Designed and developed a seamless hiring platform, combining UI/UX design expertise with React JS development to streamline the hiring process for multiple MNCs.",
    url: "https://github.com/Ashu-kumar40/recruitment-solution",
  },
  {
    title: "MovieYaar",
    description:
      "Created MovieYaar, a visually stunning movie review website using ReactJS, and TMDB API, offering comprehensive movie information, upcoming releases, top-rated films, and popular movie lists",
    url: "https://github.com/Ashu-kumar40/MovieYaar",
  },
  {
    title: "Weather Web App",
    description:
      "Developed a responsive Weather Web App utilizing HTML, CSS, JavaScript, and the Open Weather Map API. Users can effortlessly search for weather conditions by city name or their current location, with visually appealing weather condition illustrations displayed accordingly.",
    url: "https://github.com/Ashu-kumar40/weather-webApp",
  },
  {
    title: "Martial Bistro",
    description:
      "Designed Martian Bistro, a visually stunning restaurant app UI/UX during a 24-hour Hackathon, showcasing a captivating Mars-themed design.",
    url: "https://www.figma.com/proto/ko0yuQRLWjvB7gugBc7XRs/Martial-bistro?node-id=3401%3A7796&scaling=scale-down&page-id=3304%3A6839",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
