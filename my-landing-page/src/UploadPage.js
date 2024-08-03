import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
  const [authCode, setAuthCode] = useState('');
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (files.length === 0) {
      setUploadStatus('Please select file(s) to upload.');
      return;
    }

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${authCode}`);

    setUploadStatus('Uploading...');

    try {
      const response = await fetch('https://20sg8n61-25248.use.devtunnels.ms/upload', {
        method: 'POST',
        body: formData,
        headers: headers
      });

      if (!response.ok) {
        if (response.status === 403) {
          setUploadStatus('Invalid authorization code.');
          return;
        } else {
          setUploadStatus('Failed to upload file(s). Please try again later.');
          return;
        }
      }

      const result = await response.json();
      console.log(result);
      setUploadStatus('File(s) uploaded successfully.');
    } catch (error) {
      setUploadStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-200 font-sansation background">
      <header className="py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src="/favicon.ico" alt="Icon" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold text-white">Jailbreak Trade Base</h1>
          </a>
          <nav>
            <ul className="flex space-x-4">
            <li><a href="https://status.jbtradebase.xyz" className="text-gray-300 hover:text-mint-400">Status</a></li>
              <li><a href="/" className="text-gray-300 hover:text-mint-400">Home</a></li>
              <li><a href="/#/custominvite" className="text-gray-300 hover:text-mint-400">Custom Invite</a></li>
              <li><a href="/#/upload" className="text-gray-300 hover:text-mint-400">Upload Proof</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">Upload File</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="authCode" className="block text-sm font-medium text-gray-400">Authorization Code</label>
              <input
                type="text"
                id="authCode"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
                className="mt-1 block w-full border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-mint-600"
                placeholder="Enter your authorization code"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Upload File</label>
              <div className="mt-1">
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleFileChange}
                  className="hidden"
                  multiple
                  required
                />
                <label
                  htmlFor="fileUpload"
                  className="flex items-center justify-center w-full border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm p-2 cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring focus:ring-mint-600"
                >
                  <span className="mr-2 text-mint-600">Browse Files</span>
                </label>
                {files.length > 0 && (
                  <p className="text-sm text-gray-400 mt-2">{files.length} file(s) selected</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-mint-500 text-white font-semibold py-2 rounded-md hover:bg-mint-300 hover:text-white transition"
            >
              Upload
            </button>
          </form>
          {uploadStatus && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">{uploadStatus}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
