import React from "react";

const Excel = ({ handleInputChange }) => {
  return (
    <input
      required
      type="file"
      name="file"
      id="file"
      onChange={handleInputChange}
      placeholder="Archivo de excel"
    />
  );
};

export default Excel;
