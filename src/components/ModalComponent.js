import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormComponent from "./FormComponent";
import { useEffect, useState } from "react";

export default function ModalComponent(props) {
  const [isClicked, setIsClicked] = useState(false);
  const submit = () => {
    setIsClicked(true);
  };
  const cancel = () => {
    props.modalHandler(false);
  };
  useEffect(() => {
    props.modalHandler(false);
  }, [isClicked]);

  return (
    <Modal centered className="mt-0" isOpen={props.isOpen}>
      <ModalHeader>오늘 어떠셨어요?</ModalHeader>
      <ModalBody className="pb-0">
        <FormComponent isClicked={isClicked} setIsClicked={setIsClicked} />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submit}>
          올리기
        </Button>
        <Button onClick={cancel}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}
