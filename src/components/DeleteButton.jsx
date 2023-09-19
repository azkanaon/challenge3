import { Col, Button, Row, Container } from "react-bootstrap";
import PropTypes from "prop-types";

// menjalankan fungsi yang ada di Home (untuk delete data)
function DeleteButton({ resetData, resetDoneData }) {
  return (
    <Container>
      <Row className="align-items-center d-flex">
        <Col>
          <Button
            onClick={() => resetDoneData()}
            className="custom-button-red border"
          >
            Delete Done Tasks
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => resetData()}
            className="custom-button-red border"
          >
            Delete All Tasks
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

DeleteButton.propTypes = {
  resetData: PropTypes.func,
  resetDoneData: PropTypes.func,
};

export default DeleteButton;
