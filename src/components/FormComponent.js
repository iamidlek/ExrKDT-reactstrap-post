import { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  Col,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";
import { connect } from "react-redux";
import { addPost } from "../redux/postitems/action";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [url, setUrl] = useState("https://picsum.photos/256/186");
  const [text, setText] = useState("");
  useEffect(() => {
    if (props.isClicked) {
      const payload = {
        title,
        subtitle,
        url,
        text,
      };
      props.setIsClicked(false);
      props.addPost(payload);
    }
  }, [props.isClicked]);

  return (
    <div className="pt-3 px-2">
      {url.length >= 29 && (
        <Card>
          <CardImg alt="Card image cap" src={url} />
        </Card>
      )}
      <FormGroup row className="border border-ligth p-3 pb-5">
        <Col>
          <Label htmlFor="Title" className="font-weight-bold" sm={2}>
            Title
          </Label>
          <Input
            id="Title"
            name="Title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Label htmlFor="url" className="text-muted" sm={2}>
            Subtitle
          </Label>
          <Input
            id="Subtitle"
            name="Subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => {
              setSubtitle(e.target.value);
            }}
          />
          <Label htmlFor="Subtitle" sm={2}>
            FileURL
          </Label>
          <Input
            id="url"
            name="url"
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <FormText>
            Please, enter the URL. (ex: https://picsum.photos/256/186)
          </FormText>
          <Label className="d-block mt-2" for="exampleText">
            Text Area
          </Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </Col>
      </FormGroup>
    </div>
  );
};

const mapDispatchToProps = {
  addPost: (payload) => addPost(payload),
};

export default connect(null, mapDispatchToProps)(FormComponent);
