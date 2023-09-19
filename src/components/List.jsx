import { Col } from "react-bootstrap";
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import PropTypes from "prop-types";

import "../assets/css/list.css";
import "../assets/css/icons.css";
import "../assets/css/input.css";

const List = ({ id, title, status, cekUpdate, deleteOneData, editOneData }) => {
  const [isTrue, setIsTrue] = useState(status);

  // mengubah nilai complete
  const changeHandlerChecked = () => {
    const newStatus = !isTrue;
    setIsTrue(newStatus);
    // ambil id dan newStatus untuk melakukan filtering All Done Todo
    cekUpdate(id, newStatus);
  };

  // mengambil id untuk didelete
  const deleteThisList = () => {
    deleteOneData(id);
  };

  // mengambil id untuk diupdate
  const editThisList = () => {
    editOneData(id);
  };

  return (
    <Col className="border border-2 rounded d-flex justify-content-between my-2 py-2">
      <div className=" ps-3">
        <p className={isTrue ? "m-auto complete" : "m-auto"}>{title}</p>
      </div>
      <div className="d-flex .width-custom">
        <input
          type="checkbox"
          className="m-auto input-checkbox"
          checked={isTrue}
          onChange={changeHandlerChecked}
        />
        <MdEdit onClick={editThisList} className="m-auto mx-2 fs-4 edit" />
        <BiSolidTrashAlt
          onClick={deleteThisList}
          className="m-auto fs-4 delete"
        />
      </div>
    </Col>
  );
};

List.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.bool,
  cekUpdate: PropTypes.func,
  deleteOneData: PropTypes.func,
  editOneData: PropTypes.func,
};

export default List;
