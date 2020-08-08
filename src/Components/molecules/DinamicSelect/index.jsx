import React from "react";
import { Select } from "antd";

const {Option} = Select;

const DinamicSelect = ({ options, ...rest }) => {
  return (
    <Select {...rest}>
      {options.map((option, i) => (
        <Option key={i} value={option.value}>{option.text}</Option>
      ))}
    </Select>
  );
};

export default DinamicSelect;
