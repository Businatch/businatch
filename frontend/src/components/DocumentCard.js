// DocumentCard.js
import React, { useState } from 'react';

function DocumentCard({ documentUrl }) {
  const [loading, setLoading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileUpload = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (!file) {
      setUploadMessage("No file selected!");
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/documents', {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (response.ok) {
        setUploadMessage(data.message);
      } else {
        setUploadMessage(data.detail);
      }
    } catch (error) {
      setUploadMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type='file' onChange={handleFileUpload} disabled={loading} />
      {loading ? <p>Loading...</p> : <p>{uploadMessage}</p>}
      {documentUrl && <a href={documentUrl}>Download Document</a>}
    </div>
  );
}

export default DocumentCard;