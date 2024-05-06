import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        {/* education show garna ko lagi react-vertical-timeline-component package use gareko */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BIM</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kohalpur Model College,Np
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2074 - 2075"
            iconStyle={{ background: "#138781", color: "#fff" }}
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Twelve</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tribhuvan Secondary School
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
