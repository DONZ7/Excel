import React from "react";
import { Button, Space } from "antd";
import DinamicSelect from '../../molecules/DinamicSelect';

const Footer = ({ build, exportData, disbledExport, disabledBuild, disabledSelect ,options, onChange }) => {
  return (
    <Space>
      <DinamicSelect options={options} style={{width: 120}} onChange={onChange} disabled={disabledSelect} />
      <Button type="primary" onClick={build} disabled={disabledBuild}>
        Counstruir datos
      </Button>
      <Button type="primary" onClick={exportData} disabled={disbledExport}>
        Cargar datos
      </Button>
    </Space>
  );
};

export default Footer;
