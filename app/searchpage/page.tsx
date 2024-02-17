'use client';
import React, { useState, ChangeEvent ,useEffect} from 'react';
import axios from 'axios';
import fetchData from './FetchData';
import './custom.css';

const Page = () => {
  
  const [query, setQuery] = useState('');
  const [n_words, setWords] = useState('');
  const [response, setResponse] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setWords(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const data = await fetchData(query,n_words);
      setResponse(data);
      console.log("data:"+data)
      setShowResults(true);
    } catch (error) {
      setShowResults(true);
    }
  };
  
  
  

  const quickQueries = ['Omicron-Targeted COVID Boosters', 'ರಷ್ಯಾದ ಯುದ್ಧವನ್ನು ಬಾಡಿ ಚಾರ್ಟರ್ಗೆ ಅವಮಾನ ಎಂದು ಕರೆದ ಬೈಡನ್', 'जीवाश्म ईंधन का पहला सार्वजनिक वैश्विक डेटाबेस लॉन्च'];

  const handleQuickQueryClick = (quickQuery: string) => {
    setQuery(quickQuery);
  };

  return (
    <main style={{ backgroundImage: "url('back1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', position: 'relative' }}>
      {/* Semi-transparent white overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(3px)',
      }} />

      {/* Home Button */}
      <a href={'/'} style={{ position: 'absolute', top: '35px', right: '65px', color: 'black', textDecoration: 'none', fontSize: '25px' }}>
        Home
      </a>

      {/* Search Input */}
      {!showResults&&(<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'black' }}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Type to Search"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          style={{
            padding: '20px', 
            fontSize: !isFocused?'100px':'50px',
            top: !isFocused?'30%':'35%',
            left: '30%',
            position: 'absolute',
            border: 'none',
            background: 'transparent',
            outline: 'none',
            color: 'black',
            overflowY: 'auto',
            width: '750px',
            maxHeight: '200px',
          }}
          className="custom-input"
        />

        {/* Two vertical lines */}
        <div style={{
          position: 'absolute',
          top: 'calc(30% + 60px)', 
          left: 'calc(28% - 25px)',
          width: '2px',
          height: '50px',
          background: 'black',
        }} />
        <div style={{
          position: 'absolute',
          top: 'calc(30% + 60px)',
          left: 'calc(28% + 20px)', 
          width: '4px', 
          height: '80px',
          background: 'black',
        }} />
        {/* Quick query buttons */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
        <input
        type="number"
        value={n_words}
        placeholder='Length of Summary'
        onChange={handleInputChange1}
        style={{
          padding: '10px',
          fontSize: '16px',
          color:'black',
          borderRadius: '5px',
          zIndex: '50000',
        }}
      />
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
                borderRadius: '5px',
                zIndex: '50000',
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
            position: 'absolute',
            top: '35%',
            left: '90%',
            padding: '15px',
            fontSize: '18px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            zIndex: '10000',
            borderRadius: '15%',
            width: '100px',
          }}
        >
          Submit
        </button>
      </div>)}
      {showResults && (
  <div style={{
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
    display: "flex",
    alignItems: "flexStart",
    textAlign: "justify",
    position: "relative",
    wordBreak:"break-word",
    maxWidth:"925px",
    width: "100%",
    overflowY:"auto",
    maxHeight:"900px"
  }}>
    <pre style={{
      maxWidth: '100%',
      overflowWrap: 'break-word', 
      whiteSpace: 'pre-wrap',
    }}>{response}</pre>
  </div>
)}
    </main>
  );
};

export default Page;
