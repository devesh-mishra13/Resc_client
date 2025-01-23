'use client';
import React, { useState, ChangeEvent, useEffect } from 'react';
import axios from 'axios';
import fetchData from './FetchData';
import './custom.css';

const Page = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };
  
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = 'auto'; // Reset height to calculate actual scrollHeight
    event.target.style.height = `${event.target.scrollHeight}px`; // Dynamically adjust height
    setQuery(event.target.value);
  };
  

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const generateMessageLineByLine = (fullMessage: string) => {
    let currentMessage = '';
    const lines = fullMessage.split('\n');
    let index = 0;

    const interval = setInterval(() => {
      if (index < lines.length) {
        currentMessage += `${lines[index]}\n`;
        setGeneratedMessage(currentMessage);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 350);
  };

  const handleExtractText = async () => {
    if (!image) {
      alert('Please upload an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('https://ff9a-104-196-233-164.ngrok-free.app/extract-text', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      setQuery(response.data.extracted_text);
    } catch (error) {
      console.error('Error extracting text:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const data = await fetchData(query);
      generateMessageLineByLine(data);
      setResponse(data);
      setShowResults(true);
    } catch (error) {
      setShowResults(true);
    }
  };

  const quickQueries = [
    'Omicron-Targeted COVID Boosters',
    'ರಷ್ಯಾದ ಯುದ್ಧವನ್ನು ಬಾಡಿ ಚಾರ್ಟರ್ಗೆ ಅವಮಾನ ಎಂದು ಕರೆದ ಬೈಡನ್',
    'जीवाश्म ईंधन का पहला सार्वजनिक वैश्विक डेटाबेस लॉन्च',
  ];

  const handleQuickQueryClick = (quickQuery: string) => {
    setQuery(quickQuery);
  };

  return (
    <main
      style={{
        backgroundImage: "url('back1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(3px)',
        }}
      />

      <a
        href="/"
        style={{
          position: 'absolute',
          top: '35px',
          right: '65px',
          color: 'black',
          textDecoration: 'none',
          fontSize: '25px',
        }}
      >
        Home
      </a>

      {!showResults && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: 'black',
          }}
        >
          <textarea
          placeholder="Type to Search"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          style={{
            padding: '20px',
            fontSize: '35px',
            position: 'relative',
            border: '2px solid black',
            background: 'transparent',
            outline: 'none',
            color: 'black',
            overflowY: 'scroll', // Ensures scrolling functionality
            width: '1000px',
            maxHeight: '350px', // Limits the height
            minHeight: '50px',  // Minimum height
            resize: 'none',     // Prevents manual resizing
            lineHeight: '1',
            textAlign: 'center',
            scrollbarWidth: 'none', // For Firefox
            msOverflowStyle: 'none', // For IE and Edge
          }}
          className="custom-input no-scrollbar"
        />
          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{
                padding: '10px',
                fontSize: '16px',
                color: '#fff',
                backgroundColor: 'black',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                zIndex:'100'
              }}
            />
            <button
              onClick={handleExtractText}
              style={{
                padding: '10px 15px',
                fontSize: '16px',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '8px',
                zIndex:'100'
              }}
            >
              Extract Text
            </button>
            {quickQueries.map((quickQuery, index) => (
              <button
                key={index}
                onClick={() => handleQuickQueryClick(quickQuery)}
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  zIndex:'100'
                }}
              >
                {quickQuery}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            style={{
              marginTop: '20px',
              padding: '15px 30px',
              fontSize: '18px',
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px',
              zIndex:'100'
            }}
          >
            Submit
          </button>
        </div>
      )}
      {showResults && (
        <div
          style={{
            marginTop: '20px',
            top: '10px',
            left: '25%',
            padding: '50px',
            fontSize: '18px',
            backgroundColor: '#f9f9f9',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            zIndex: '10000',
            borderRadius: '25px',
            display: 'flex',
            alignItems: 'flexStart',
            textAlign: 'justify',
            position: 'relative',
            wordBreak: 'break-word',
            maxWidth: '925px',
            width: '100%',
            overflowY: 'auto',
            maxHeight: '900px',
          }}
        >
          <pre
            style={{
              maxWidth: '100%',
              overflowWrap: 'break-word',
              whiteSpace: 'pre-wrap',
            }}
          >
            {response}
          </pre>
        </div>
      )}
    </main>
  );
};

export default Page;
