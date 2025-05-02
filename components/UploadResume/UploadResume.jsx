import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import heroImage2 from "../../assets/CoverLeftBG.svg";
import CompanyLogo from '../../assets/companylogo1.svg'; 
import Footer from '../LandingPage/Footer';


const UploadResume = () => {
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    // Handle URL submission logic here
    console.log('URL submitted:', url);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProgress(i);
    }
    setUploading(false);
    // Add your actual file upload logic here
  };

  return (
    <><section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
      {/* Background Image - Left Side */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-left opacity-40 -z-10"
        style={{ backgroundImage: `url(${heroImage2})` }} />

      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-blue-600 group-hover:scale-110 transition-transform">★</span>
            <span className="text-sm font-medium">Resume Checker</span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Is Your{' '}
          <span className="text-blue-600 relative inline-block">
            Resume
          </span>{' '}
          Good Enough?
          <span className="inline-block ml-2 animate-pulse">📝</span>
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          A free and fast AI resume checker doing 16 crucial checks to ensure your resume is ready to perform and get you interview callbacks.

        </motion.p>

        <motion.button
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <span>Download Our App</span>
        </motion.button>

        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          className="mt-8"
        >
          <p className="text-gray-600 mb-4">Some Of Our Clients</p>
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
        </motion.div>

      </div>

      {/* Right Column - Upload Section */}
      <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="bg-white p-6 rounded-xl shadow-lg">
          {/* File Upload Section */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Upload Resume
            </label>
            <p className="text-sm text-gray-600 mb-2">
              Add your documents here, and you can upload up to 5 files max
            </p>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                accept=".pdf,.jpg,.zip"
                multiple />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-gray-500">
                  <i className="fas fa-cloud-upload-alt text-3xl mb-2"></i>
                  <p>Drag and drop files here or click to browse</p>
                </div>
              </label>
            </div>
            <p className="text-xs text-amber-600 mb-2 items-center flex justify-center py-2">
              Only support .pdf, .jpg and zip files
            </p>
          </div>

          {/* URL Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Or Enter Resume URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="https://example.com/resume.pdf" />
              <button
                onClick={handleUrlSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mb-6">
              <h3 className="text-gray-700 font-bold mb-2">Selected Files:</h3>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li key={index} className="text-sm text-gray-600 flex justify-between items-center">
                    {file.name}
                    <button
                      onClick={() => setFiles(files.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Upload Progress */}
          {uploading && (
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Uploading... {progress}%
              </p>
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={files.length === 0 || uploading}
            className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg 
              ${files.length === 0 || uploading
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-blue-700'}`}
          >
            {uploading ? 'Uploading...' : 'Upload Files'}
          </button>
          <p className="text-sm text-gray-500 mb-4 flex items-center justify-center py-4">
            <span className="mr-1">🔒</span> Privacy guaranteed
          </p>
        </div>
      </motion.div>
    </section><Footer /></>
  
  );
};



export default UploadResume;