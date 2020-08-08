import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Spin, message } from "antd";
import {
  setStorage,
  getCountries,
  getLastPosition,
} from "../../hooks/firebase";
import { setProductos } from "../../hooks/api";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import Contenido from "../organisms/Content/Contenido";
import "../../App.css";

const Principal = () => {
  const [data, setdata] = useState([]);
  const [images, setimages] = useState([]);
  const [dataBuild, setdataBuild] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [countries, setcountries] = useState([]);
  const [country, setcountry] = useState("");
  const [disabledSelect, setdisabledSelect] = useState(false);

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
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetName]
          );
          hojas.push({
            data: XL_row_object,
            sheetName,
          });
        });
        setdata(hojas[0].data);
      };
    }
  };

  const build = async () => {
    setisLoading(true);
    let temp = [];
    let lastPosition = await getLastPosition("products", country);
    lastPosition = lastPosition.length > 0 ? lastPosition[0] : 0;
    for (let i in data) {
      if (data[i].images) {
        let str = data[i].images.toString();
        let array = str.split(",");
        let img = [];
        for (let j in images) {
          for (let k in array) {
            let position = parseInt(k, 10);
            if (images[j].name) {
              let m = images[j].name.toLowerCase();
              let name = m.replace(".jpg", "");
              if (array[k] === name) {
                let imgRef = await setStorage(
                  images[j],
                  `${country}/${data[i].type}/products/${data[i].name}-${data[i].code}/`
                );
                if (imgRef.success) {
                  let imageRef = await imgRef.imageRef;
                  let downloadURL = await imageRef.ref.getDownloadURL();
                  img.push({ position: position + 1, url: downloadURL });
                }
              }
            }
          }
        }
        temp.push({
          ...data[i],
          images: img,
          priceDetail: data[i].priceDetail === "N/A" ? "" : data[i].priceDetail,
          hidden: data[i].state ? false : true,
          position: lastPosition + 1,
          available: true,
          timesSold: 0,
          type: "product",
        });
        lastPosition = lastPosition + 1;
      }
    }
    setdataBuild(temp);
    setisLoading(false);
  };

  const exportData = async () => {
    setisLoading(true);
    let response = await setProductos(dataBuild, country);
    if (response.success) {
      message.success(response.message);
      setdata([]);
      setimages([]);
      setdataBuild([]);
      setcountries([]);
      setdisabledSelect(false);
      setcountry("");
    } else {
      message.error("Error al subir los productos.");
    }
    setisLoading(false);
  };

  const onChange = (value) => {
    setcountry(value);
    setdisabledSelect(true);
  };

  const getData = async () => {
    let temp = await getCountries();
    setcountries(temp);
    setisLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <div className="App">
        <header>
          <Header
            handleInputChange={handleInputChange}
            handleUpload={handleUpload}
          />
        </header>
        <footer>
          <Footer
            build={build}
            exportData={exportData}
            disbledExport={dataBuild.length === 0}
            disabledBuild={
              data.length !== 0 &&
              images.length !== 0 &&
              country.length !== 0 &&
              dataBuild.length === 0
                ? false
                : true
            }
            disabledSelect={disabledSelect}
            options={countries}
            onChange={onChange}
          />
        </footer>
        <content className="App-header">
          <Contenido estado={dataBuild} />
        </content>
      </div>
    </Spin>
  );
};

export default Principal;
