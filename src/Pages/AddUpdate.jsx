import ContainerForm from "../components/ContainerForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const AddUpdate = () => {
  // ambil data dari navigate yg mengarah ke /addUpdate
  const location = useLocation();
  const [data] = useState(
    // kalau misal Add New Task dipencet, maka data diambil darisana
    // kalau logo edit yang dipencet, maka data diambil dari dataState
    location.state.sendData ? location.state.sendData : location.state.dataState
  );
  // editOne bakal memiliki nilai ketika tombol edit dipencet
  const editOne = location.state.id;
  return <ContainerForm dataFromHome={data} edit={editOne} />;
};

export default AddUpdate;
