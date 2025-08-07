import React from 'react'; // Only React is needed

const SpringPDFViewer = () => {
  const driveLink = "https://drive.google.com/file/d/1-paDHN1MyaCrO7dmJSuwx1Z3M3S0EnTx/view?usp=sharing";
  const pdfUrl = driveLink.replace('/file/d/', '/file/d/').replace('/view', '/preview');

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe 
        src={pdfUrl}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default SpringPDFViewer;