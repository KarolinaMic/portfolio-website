import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import product from "../assets/img/product.png";
import ecommerce from "../assets/img/ecommerce.png";
import ecommerce2 from "../assets/img/ecommerce2.png";
import ecommerce3 from "../assets/img/cs.png";
import abstract from "../assets/img/abstract.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = {
    website: [
      {
        title: "E-commerce Website",
        imgUrl: ecommerce,
        link: "https://wearly-shop-project-ecommerce.vercel.app/",
      },
      {
        title: "Food Recipe App",
        imgUrl: ecommerce2,
        link: "https://youtu.be/b_CE7UVeOlM",
      },
            {
        title: "Memory Game",
        imgUrl: ecommerce3,
        link: "https://card-memory-game-app.vercel.app/",
      },
    ],
    
    graphicDesign: [
      {
        title: "Product Design",
        imgUrl: product,
      },
      {
        title: "Abstract Art",
        imgUrl: abstract,
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
                        <Nav.Link eventKey="website">React Projects</Nav.Link>
                      </Nav.Item>
                    
                      <Nav.Item>
                        <Nav.Link eventKey="graphicDesign">Graphic Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="website">
                      <Row className="justify-content-center">
                          {/* Mapowanie projektów dla zakładki Website */}
                          {
                            projects.website.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  title={project.title}
                                  imgUrl={project.imgUrl}
                                  link={project.link}
                                
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
 
                      <Tab.Pane eventKey="graphicDesign">
                      <Row className="justify-content-center">
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
