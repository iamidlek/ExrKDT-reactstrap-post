import {
  Container,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
} from "reactstrap";
import Write from "../components/Write";
import { useSelector, useDispatch } from "react-redux";
import { removePost } from "../redux/postitems/action";

const Main = () => {
  const postItems = useSelector((state) => state.postItem);
  const dispatch = useDispatch();
  const delItem = (title) => {
    dispatch(removePost(title));
  };
  return (
    <div>
      <Write />
      <Container className="mt-4">
        <CardGroup className="d-flex flex-wrap border border-ligth container-sm flex-column flex-md-row">
          {postItems.map((item) => (
            <Card key={item.title} className="">
              <Col>
                <CardImg className="" alt="Card image cap" src={item.url} />
              </Col>
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {item.subtitle}
                </CardSubtitle>
                <CardText>{item.text}</CardText>
                <Button onClick={() => delItem(item.title)}>Button</Button>
              </CardBody>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </div>
  );
};

export default Main;
