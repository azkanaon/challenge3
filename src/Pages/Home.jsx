import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormSearch from "../components/FormSearch";
import FilterButton from "../components/FilterButton";
import DeleteButton from "../components/DeleteButton";
import List from "../components/List";

import dataJSON from "../assets/data/[KM 5] CH 3 Challenge - data.json";

const Home = () => {
  const data = dataJSON;
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOutput, setSearchOutput] = useState("");
  const [dataState, setDataState] = useState(
    location.state === null ? data : location.state.dataHome
  );
  const [flag, setFlag] = useState(0);

  // ambil data dari inputan searching
  const filterSearch = (searchData) => {
    setSearchOutput(searchData);
  };

  // proses membandingkan antara inputan dengan data yang ada
  const filterData = (search, data) => {
    if (!search) {
      return data;
    } else {
      return data.filter((obj) => obj.task.toLowerCase().includes(search));
    }
  };

  // set flag dari filterButton
  const flagCheck = (passingData) => {
    setFlag(passingData);
  };

  // nilai dari file FilterButton diarahkan ke sini
  // tergantung apa yang dipencet,
  // kalau all maka tampilin semua data
  // kalau Done maka tampilin yang Done aja
  // kalau Todo maka tampilin yang belum terceklis
  const filterDataButton = (dataFilter) => {
    if (flag === 0) {
      return dataFilter;
    } else if (flag === 1) {
      return dataFilter.filter((obj) => obj.complete === true);
    } else {
      return dataFilter.filter((obj) => obj.complete === false);
    }
  };

  const cekUpdate = (id, newStatus) => {
    setDataState((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, complete: newStatus } : item
      )
    );
  };

  // funsgi berjalan ketika tombol Delete All Task dipencet
  // menghapus semua data
  const resetData = () => {
    setDataState([]);
  };

  // fungsi yang berjalan ketika tombol Delete Done Task dipencet
  // menghapus data yang sudah beres saja
  const resetDoneData = () => {
    setDataState((prevData) =>
      prevData.filter((item) => item.complete === false)
    );
  };

  // delete sesuai data yang dipencet
  const deleteOneData = (deleteOne) => {
    setDataState((prev) => prev.filter((item) => item.id !== deleteOne));
  };

  // ambil id untuk diedit kemudian pindah ke /addUpdate untuk melakukan updateData
  const editOneData = (editOne) => {
    navigate("/addUpdate", { state: { dataState, id: editOne } });
  };

  // eksekusi data
  const filteredData = filterData(searchOutput, dataState);
  const filteredData2 = filterDataButton(filteredData);
  return (
    <>
      <FormSearch filterSearch={filterSearch} sendData={dataState} />
      <FilterButton checkClick={flagCheck} />
      <Container className="my-4">
        {filteredData2.length === 0 ? (
          <p className="text-center"> Data tidak tersedia </p>
        ) : (
          <Row className="d-flex flex-column">
            {filteredData2.map((item) => (
              <List
                key={item.id}
                id={item.id}
                title={item.task}
                status={item.complete}
                cekUpdate={cekUpdate}
                deleteOneData={deleteOneData}
                editOneData={editOneData}
              />
            ))}
          </Row>
        )}
      </Container>
      <DeleteButton resetData={resetData} resetDoneData={resetDoneData} />
    </>
  );
};

export default Home;
