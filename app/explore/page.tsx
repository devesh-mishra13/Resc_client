import React from "react";

const Page: React.FC = () => {
  const styles = {
    container: {
      display: "flex",
      height:'100vh',
      justifyContent: "center",
      backgroundColor:'black',
      alignItems: "center",
      flexWrap: "wrap" as "wrap",
      gap: "20px",
      padding: "20px",
    },
    codeEditor: {
      maxWidth: "300px",
      backgroundColor: "#1d1e22",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
      borderRadius: "8px",
      padding: "2px",
      color: "white",
      fontFamily: "Lato, sans-serif",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "10px",
    },
    title: {
      fontWeight: 900,
      fontSize: "14px",
      letterSpacing: "1.57px",
      color: "rgb(212 212 212)",
    },
    icon: {
      width: "20px",
      transition: "0.2s ease",
      cursor: "pointer",
      borderRadius: "50px",
      backgroundColor: "#6e7281",
    },
    editorContent: {
      margin: "0 10px 10px",
    },
    property: {
      marginLeft: "30px",
    },
    color0: { color: "rgb(86 156 214)" },
    color1: { color: "rgb(182 206 168)" },
    color2: { color: "rgb(156 220 254)" },
    color3: { color: "rgb(207 146 120)" },
    colorPreview1: {
      height: "8px",
      width: "8px",
      border: "1px solid #fff",
      display: "inline-block",
      marginRight: "3px",
      backgroundColor: "#1d1e22",
    },
    colorPreview2: {
      height: "8px",
      width: "8px",
      border: "1px solid #fff",
      display: "inline-block",
      marginRight: "3px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    exploreButton: {
      display: "block",
      width: "90%",
      margin: "10px auto",
      padding: "8px 12px",
      backgroundColor: "black",
      color: "white",
      textAlign: "center" as "center",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      border: "none",
    },
  };
  const links = ["/searchpage", "/audiopage", "/bookpage"];
  return (
    <div style={styles.container}>
      {["Article Summarizer", "Audio Summarizer", "Book Summarizer"].map((title, index) => (
        <div key={index} style={styles.codeEditor}>
          <div style={styles.header}>
            <span style={styles.title}>{title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              style={styles.icon}
            >
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#4C4F5A"
                  d="M6 6L18 18"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#4C4F5A"
                  d="M18 6L6 18"
                ></path>
              </g>
            </svg>
          </div>
          <div style={styles.editorContent}>
            <code>
              <p>
                <span style={styles.color0}>.code-editor </span> <span>{"{"}</span>
              </p>
              <p style={styles.property}>
                <span style={styles.color2}>max-width</span>:{" "}
                <span style={styles.color1}>300px</span>;
              </p>
              <p style={styles.property}>
                <span style={styles.color2}>background-color</span>:{" "}
                <span style={styles.colorPreview1}></span>
                <span>#1d1e22</span>;
              </p>
              <p style={styles.property}>
                <span style={styles.color2}>box-shadow</span>:{" "}
                <span style={styles.color1}>
                  0px 4px 30px{" "}
                  <span style={styles.colorPreview2}></span>
                  <span style={styles.color3}>rgba(0, 0, 0, 0.5)</span>
                </span>
                ;
              </p>
              <p style={styles.property}>
                <span style={styles.color2}>border-radius</span>:{" "}
                <span style={styles.color1}>8px</span>;
              </p>
              <span>{"}"}</span>
            </code>
          </div>
          <div>
            <a href={links[index]} style={styles.exploreButton}>
              Explore
            </a>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Page;
