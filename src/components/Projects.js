import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = {
    website: [
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Website Redesign",
        description: "UI/UX & Development",
        imgUrl: projImg2,
      },
      {
        title: "E-commerce Platform",
        description: "Development & Design",
        imgUrl: projImg3,
      },
    ],
    uxDesign: [
      {
        title: "UX Redesign",
        description: "Research & Design",
        imgUrl: projImg1,
      },
      {
        title: "Mobile App UX",
        description: "Design & Testing",
        imgUrl: projImg2,
      },
      {
        title: "Website UX",
        description: "Research & Redesign",
        imgUrl: projImg3,
      },
    ],
    graphicDesign: [
      {
        title: "Logo Design",
        description: "Branding & Design",
        imgUrl: projImg1,
      },
      {
        title: "Poster Design",
        description: "Graphics & Layout",
        imgUrl: projImg2,
      },
      {
        title: "Business Cards",
        description: "Design & Printing",
        imgUrl: projImg3,
      },
    ],
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <br /><br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="website">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="website">Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="uxDesign">UX Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="graphicDesign">Graphic Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="website">
                        <Row>
                          {/* Mapowanie projektów dla zakładki Website */}
                          {
                            projects.website.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  title={project.title}
                                  description={project.description}
                                  imgUrl={project.imgUrl}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="uxDesign">
                        <Row>
                          {/* Mapowanie projektów dla zakładki UX Design */}
                          {
                            projects.uxDesign.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  title={project.title}
                                  description={project.description}
                                  imgUrl={project.imgUrl}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="graphicDesign">
                        <Row>
                          {/* Mapowanie projektów dla zakładki Graphic Design */}
                          {
                            projects.graphicDesign.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  title={project.title}
                                  description={project.description}
                                  imgUrl={project.imgUrl}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="background" />
    </section>
  );
};
