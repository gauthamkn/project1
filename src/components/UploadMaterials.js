
import React, { useState } from 'react';
import './UploadMaterials.css';

const UploadMaterials = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Logic to upload file
    alert(`File ${file.name} uploaded!`);
  };

  return (
    <div>
      <h2>Upload Course Materials</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadMaterials;