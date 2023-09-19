import { Col, Button, Row, Container } from "react-bootstrap";
import PropTypes from "prop-types";

// checkClick berasal dari Home, gunanya hanya untuk tanda saja mana fungsi yang mau dijalankan
const FilterButton = ({ checkClick }) => {
  return (
    <Container>
      <h2 className="text-center my-3">Todo List</h2>
      <Row>
        <Col>
          <Button onClick={() => checkClick(0)} className="custom-button">
            All
          </Button>
        </Col>
        <Col>
          <Button onClick={() => checkClick(1)} className="custom-button">
            Done
          </Button>
        </Col>
        <Col>
          <Button onClick={() => checkClick(2)} className="custom-button">
            Todo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

FilterButton.propTypes = {
  checkClick: PropTypes.func,
};

export default FilterButton;
