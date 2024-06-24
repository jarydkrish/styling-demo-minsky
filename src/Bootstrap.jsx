import React, { useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Dropdown,
  Form,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  InputGroup,
  Card,
  Row,
  Col,
  Alert,
  Spinner,
  ProgressBar,
  Modal,
  ListGroup,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const DemoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [dropdownValue, setDropdownValue] = useState('Dropdown');
  const [showAlert, setShowAlert] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Navbar.Brand href="#">
          React-Bootstrap Demo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {dropdownValue}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setDropdownValue('Action')}>Action</Dropdown.Item>
                <Dropdown.Item onClick={() => setDropdownValue('Another action')}>Another action</Dropdown.Item>
                <Dropdown.Item onClick={() => setDropdownValue('Something else')}>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {showAlert && (
        <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
          This is a warning alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
        </Alert>
      )}

      <Row className="mb-4">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Text Input</Card.Title>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter text"
                  aria-label="Enter text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button variant="outline-secondary">Button</Button>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Toggle Buttons</Card.Title>
              <ToggleButtonGroup type="radio" name="options" value={radioValue} onChange={setRadioValue}>
                <ToggleButton id="tbg-radio-1" value="1">
                  Option 1
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value="2">
                  Option 2
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value="3">
                  Option 3
                </ToggleButton>
              </ToggleButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Checkbox</Card.Title>
              <Form.Check
                type="checkbox"
                id="custom-checkbox"
                label="Check this custom checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Progress</Card.Title>
              <ProgressBar now={60} label={`${60}%`} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Modal Demo</Card.Title>
              <Card.Text>
                Click the button below to launch a demo modal.
              </Card.Text>
              <Card.Link>
                <Button variant="primary" onClick={handleModalShow}>
                  Launch demo modal
                </Button>
              </Card.Link>

              <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleModalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleModalClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Spinner</Card.Title>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>List Group</Card.Title>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DemoPage;
