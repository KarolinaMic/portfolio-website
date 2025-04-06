import { useState } from "react";
import { Col, Row, Alert, Modal, Button } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Submitting...');
    setTimeout(() => {
      setModalMessage('Thank you for reaching out, but this is just a test form. Please contact me through GitHub or LinkedIn :)');
      setShowModal(true);
      setButtonText('Submit');
    }, 2000);
  };

  const clearFields = () => {
    setEmail('');
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Stay updated on my latest projects and subscribe <br></br></h3>
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">{buttonText}</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Subscription Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-body-text">{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
