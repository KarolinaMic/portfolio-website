import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ecommerce from "../assets/img/ecommerce.png";
import ecommerce2 from "../assets/img/ecommerce2.png";
import ecommerce3 from "../assets/img/cs.png";
import ecommerce4 from "../assets/img/dashboard.png";
import product from "../assets/img/product.png";
import abstract from "../assets/img/abstract.png";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

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
      {
        title: "Dashboard",
        imgUrl: ecommerce4,
        link: "https://dashboard-project-karolina.vercel.app/",
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
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br />

                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="website"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="website">
                          React Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="graphicDesign">
                          Graphic Design
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="website">
                        {/* g-4 = odstępy pion + poziom */}
                        <Row className="justify-content-center g-4">
                          {projects.website.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              imgUrl={project.imgUrl}
                              link={project.link}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="graphicDesign">
                        <Row className="justify-content-center g-4">
                          {projects.graphicDesign.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              imgUrl={project.imgUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
