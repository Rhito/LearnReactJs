import React, { useEffect, useState } from "react";

export default function PreviewImg() {
  const [file, setFile] = useState();
  const handleFilePreview = (e) => {
    const fileObj = e.target.files[0];
    fileObj.previewImg = URL.createObjectURL(fileObj);

    setFile(fileObj);
  };

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file.previewImg);
      }
    };
  }, [file]);

  return (
    <div>
      <input type="file" onChange={handleFilePreview} />
      {file && <img src={file.previewImg} width="400px" />}
    </div>
  );
}
