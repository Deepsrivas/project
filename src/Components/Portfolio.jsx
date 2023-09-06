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
    title: "Frequency divider circuit (100 MHz to 1 Hz)",
    description:
      "In this project, I have made schematic circuit by using TFF as a frequency circuit to achieve 100 MHz to 1 Hz on Xilinx ISE.",
    
  },
  {
    title: "Design of 4-bit signed calculator with reset on Xilinx ISE",
    description:
      "I have designed 4-bit signed calculator schematic using combinational and sequential circuits on Xilinx ISE. The calculator can perform signed arithmetic operations.",
    
  },
  {
    title: "Bidirectional Transmission of WDM-based XGPON System with SRM and a Post DCF",
    description:
      "We reduced the BER and dispersion in XGPON bidirectional fiber system by designing an SRM on MatLab and with an additional Dispersion Compensation fiber at OLT.",
    
  },
  {
    title: "	Designed an Unbiased Digital Electronic Dice Using CD4017 IC",
    description:
      "The project involved building a digital electronic dice on a Printed Circuit Board (PCB) utilizing a counter decade 4017 IC.",
    url: "https://drive.google.com/file/d/1ep_9xXakdlq_P-4PO4SQPkSftoOPc7Qc/view?usp=drive_link",
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
