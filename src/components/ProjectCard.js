import { Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      handleShow();
    }
  };

  return (
    <>
      <Col xs={12} sm={4} lg={4}>
        <div className="proj-imgbx" onClick={handleClick} style={{ cursor: "pointer" }}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {!link && (
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={imgUrl} alt={title} style={{ width: "100%" }} />
            <p>{description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
