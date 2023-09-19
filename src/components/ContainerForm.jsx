import { Row, Col, Container, InputGroup, Form, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ContainerForm = ({ dataFromHome, edit }) => {
  // unique menggunakan random data(asumsi saja bahwa random akan selalu unik padahal kenyataannya tidak)
  const uniqueId = Math.floor(Math.random() * 100000) + 1;

  const navigate = useNavigate();
  const [data, setData] = useState({
    id: 0,
    task: "",
    complete: false,
  });

  // set edited dengan data yang dipencet
  const [edited] = useState(
    edit
      ? dataFromHome.filter((data) => data.id === edit)
      : {
          id: 0,
          task: "",
          complete: false,
        }
  );
  // datainput nilainya tergantung pada apakah user ada melakukan edit atau tidak
  const [input, setInput] = useState(edit ? edited[0].task : "");
  // ambil data dari Home.jsx
  const [dataHome, setDataHome] = useState(dataFromHome);
  // update input sesuai dengan inputan user
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  // fungsi dijalankan ketika add data
  const addNewData = () => {
    setDataHome([...dataHome, { ...data, task: input }]);
    setData({
      id: 0,
      task: "",
      complete: false,
    });
    navigate("/", {
      state: {
        dataHome: [...dataHome, { ...data, id: uniqueId, task: input }],
      },
    });
  };

  // fungsi dijalankan ketika update data
  const updateData = () => {
    // untuk data yang id nya sama dengan yg diedit, maka task nya akan diubah sesuai dengan inputan
    const dataEdited = dataFromHome.map((data) => {
      if (data.id === edit) {
        return { ...data, task: input };
      }
      return data;
    });
    // arahkan ke halaman home
    navigate("/", {
      state: {
        dataHome: dataEdited,
      },
    });
  };

  const addOrUpdate = (e) => {
    e.preventDefault();
    // untuk menentukan melakukan update atau add tergantung dari nilai variabel edit
    if (edit) {
      updateData();
    } else {
      addNewData();
    }
  };
  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center fw-bold">Todo Input</h2>
        <Row className="border rounded p-3">
          <Col className="col-12">
            {/* add atau update dilakukan disini */}
            <Form onSubmit={addOrUpdate}>
              <InputGroup className="mb-3">
                <InputGroup.Text className="search-logo">
                  <BiSearch />
                </InputGroup.Text>
                <Form.Control
                  onChange={changeHandler}
                  className="custom-input"
                  placeholder="Add data"
                  aria-label="add"
                  value={input}
                />
              </InputGroup>
              <Button type="submit" className="custom-button">
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ContainerForm.propTypes = {
  dataFromHome: PropTypes.arrayOf(PropTypes.object),
  edit: PropTypes.number,
};

export default ContainerForm;
