import React from "react";

const FileUpload = ({ uploadValue, picture, handleUpload }) => {
  return (
    <div>
      <progress value={uploadValue ? uploadValue : 0} max="100"></progress>
      <br />
      <input
        type="file"
        id="filepicker"
        name="fileList"
        onChange={handleUpload}
        webkitdirectory="true"
        multiple
      />
      <br />
      <img width="320" src={picture} alt="" />
    </div>
  );
};

export default FileUpload;
