import React from 'react';

const AdvanceJavaPDFViewer = () => {
  const driveLink = "https://drive.google.com/file/d/1-paDHN1MyaCrO7dmJSuwx1Z3M3S0EnTx/view?usp=sharing";
  const pdfUrl = driveLink.replace('/view', '/preview');

  // Example Google image URL (replace with your own)
  const bgImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <style>
        {`
          @keyframes borderMove {
            0% {
              background-image: linear-gradient(white, white),
                linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
            }
            100% {
              background-image: linear-gradient(white, white),
                linear-gradient(450deg, red, orange, yellow, green, blue, indigo, violet);
            }
          }

          .animated-border {
            border: 5px solid transparent;
            border-radius: 10px;
            background-image: linear-gradient(white, white),
              linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
            background-origin: border-box;
            background-clip: content-box, border-box;
            animation: borderMove 3s linear infinite;
          }
        `}
      </style>

      <iframe
        src={pdfUrl}
        width="40%"
        height="100%"
        className="animated-border"
        title="PDF Viewer"
      />
    </div>
  );
};

export default AdvanceJavaPDFViewer;
