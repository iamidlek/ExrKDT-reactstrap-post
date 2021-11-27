import { useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import ModalComponent from "./ModalComponent";

export default function Write() {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => {
    setIsOpen((curr) => !curr);
  };
  return (
    <Container>
      <Row>
        <Col className="text-center mt-4">
          <Button className="w-75" color="secondary" onClick={modalHandler}>
            글쓰기
          </Button>
          <ModalComponent isOpen={isOpen} modalHandler={setIsOpen} />
        </Col>
      </Row>
    </Container>
  );
}
