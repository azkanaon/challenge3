import { Row, Col, Container, InputGroup, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";
const FormSearch = ({ filterSearch, sendData }) => {
  const [search, setSearch] = useState("");
  // ketika search dipencet, maka filter berjalan
  const clickSearch = (e) => {
    e.preventDefault();
    filterSearch(search);
    // setSearch menjadi "" untuk mereset isi search
    setSearch("");
  };
  const navigate = useNavigate();
  // pindah ke halaman addUpdate dengan membawa data sendData (data utuh dari Home)
  const goToAdd = () => {
    navigate("/addUpdate", { state: { sendData } });
  };
  return (
    <>
      <Container>
        <h2 className="text-center fw-bold">TodoSearch</h2>
        <Row className="border rounded p-3">
          <Col className="col-7">
            <Form onSubmit={clickSearch}>
              <InputGroup className="mb-3">
                <InputGroup.Text className="search-logo">
                  <BiSearch />
                </InputGroup.Text>
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  className="custom-input"
                  placeholder="Search Todo"
                  aria-label="search"
                />
              </InputGroup>
              <Button type="submit" className="custom-button">
                Search
              </Button>
            </Form>
          </Col>
          <Col className="d-flex flex-column justify-content-end align-items-end">
            <Button onClick={goToAdd} className="custom-button-add">
              Add new Task
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

FormSearch.propTypes = {
  filterSearch: PropTypes.func,
  sendData: PropTypes.array,
};

export default FormSearch;
