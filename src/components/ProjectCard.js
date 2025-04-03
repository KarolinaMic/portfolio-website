import { Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Col xs={12} sm={4} lg={4}> {/* Zmiana w szerokości kolumny */}
        <div className="proj-imgbx" onClick={handleShow}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Tutaj możesz umieścić pełny opis projektu lub inne informacje */}
          <img src={imgUrl} alt={title} style={{ width: "100%" }} />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
