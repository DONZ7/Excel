import React, { useState } from "react";
import * as XLSX from "xlsx";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import Contenido from "../organisms/Content/Contenido";
import "../../App.css";

const Principal = () => {
  const [datos, setdatos] = useState([]);
  const [images, setimages] = useState([]);

  const handleUpload = (e) => {
    setimages(e.target.files);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    let hojas = [];
    if (name === "file") {
      let reader = new FileReader();
      reader.readAsArrayBuffer(target.files[0]);
      reader.onloadend = (e) => {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: "array" });

        workbook.SheetNames.forEach(function (sheetName) {
          // Here is your object
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetName]
          );
          hojas.push({
            data: XL_row_object,
            sheetName,
          });
        });
        setdatos(hojas[0].data);
      };
    }
  };
  
  console.log(datos, images);
  return (
    <div className="App">
      <header>
        <Header handleInputChange={handleInputChange} handleUpload={handleUpload} />
      </header>
      <footer>
        <Footer />
      </footer>
      <content className="App-header">
        <Contenido estado={datos} />
      </content>
    </div>
  );
};

export default Principal;
