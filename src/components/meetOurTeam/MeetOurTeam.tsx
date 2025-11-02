import "./meetOurTeam.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";

import pp1 from "../../assets/images/mockup/pp/1.webp";
import pp2 from "../../assets/images/mockup/pp/2.webp";
import pp3 from "../../assets/images/mockup/pp/3.webp";
import pp4 from "../../assets/images/mockup/pp/4.webp";
import pp5 from "../../assets/images/mockup/pp/5.webp";
import pp6 from "../../assets/images/mockup/pp/6.webp";

export default function MeetOurTeam(): ReactElement {
  const teamMembers = [
    {
      name: "Timothy Franey",
      position: "Co-Founder, ANTEL",
      image: pp1,
      imageAlt: "Timothy Franey portrait"
    },
    {
      name: "Carroll Keeling",
      position: "Co-Founder, ANTEL",
      image: pp2,
      imageAlt: "Carroll Keeling portrait"
    },
    {
      name: "Johanna Kassulke",
      position: "Co-Founder, ANTEL",
      image: pp3,
      imageAlt: "Johanna Kassulke portrait"
    },
    {
      name: "Leslie Willms",
      position: "Co-Founder, ANTEL",
      image: pp4,
      imageAlt: "Leslie Willms portrait"
    },
    {
      name: "Frances Smith",
      position: "Co-Founder, ANTEL",
      image: pp5,
      imageAlt: "Frances Smith portrait"
    },
    {
      name: "Roderick Gutgowski",
      position: "Co-Founder, ANTEL",
      image: pp6,
      imageAlt: "Roderick Gutgowski portrait"
    }
  ];

  return (
    <section id="meetOurTeamComponent" className="meetOurTeam container">
      <header className="meetOurTeamHeader">
        <h2 className="meetOurTeamTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Meet Our Team
        </h2>
        <p className="meetOurTeamSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          Our global team of experienced engineers, consultants, and project managers is the backbone of ANTEL. With a shared passion for problem-solving and innovation, we're dedicated to delivering exceptional results for every client.
        </p>
      </header>

      <div className="teamGrid">
        {teamMembers.map(function(member, index) {
          const delay = 600 + (index * 100);
          
          return (
            <article 
              key={index}
              className="teamMemberCard"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <div className="memberImageContainer">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  className="memberImage"
                  loading="lazy"
                />
              </div>
              
              <div className="memberContent">
                <h3 className="memberName">{member.name}</h3>
                <p className="memberPosition">{member.position}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="teamAction" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="1200">
        <Link to="/contact_us" className="joinTeamLink">
          <span className="linkText">Join our team</span>
          <span className="linkArrow">→</span>
        </Link>
      </div>
    </section>
  );
}