import React from "react";
import Excel from "../../Atoms/Excel";
import FileUpload from '../../Atoms/FileUpload'
import { Row, Col } from "antd";

const Header = ({ handleInputChange,handleUpload }) => {
  return (
    <Row>
      <Col span={12}>
        <h1>Importar Excell</h1>
        <Excel handleInputChange={handleInputChange} />
      </Col>
      <Col span={12}>
        <h1>Importar fotos</h1>
        <FileUpload handleUpload={handleUpload} />
      </Col>
    </Row>
  );
};

export default Header;
