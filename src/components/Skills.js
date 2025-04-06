import photoshop from "../assets/img/photoshop.png";
import illustrator from "../assets/img/illustrator.png";
import indesign from "../assets/img/indesign.png";
import react from "../assets/img/react.png";
import javascript from "../assets/img/javascript.png";
import html from "../assets/img/html.png";
import figma from "../assets/img/figma.png";
import chatgpt from "../assets/img/chatgpt.png";
import aftereffect from "../assets/img/aftereffect.png";
import lightroom from "../assets/img/lightroom.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                       <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>FIGMA</h5>
                            </div>
                            <div className="item">
                                <img src={chatgpt} alt="Image" />
                                <h5>ChatGPT</h5>
                            </div>
                            <div className="item">
                                <img src={photoshop} alt="Image" />
                                <h5>Adobe Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={illustrator} alt="Image" />
                                <h5>Adobe Illustrator</h5>
                            </div>
                            <div className="item">
                                <img src={indesign} alt="Image" />
                                <h5>Adobe InDesign</h5>
                            </div>
                            <div className="item">
                                <img src={aftereffect} alt="Image" />
                                <h5>Adobe AfterEffect</h5>
                            </div>
                            <div className="item">
                                <img src={lightroom} alt="Image" />
                                <h5>Adobe Lightroom</h5>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}