import React from 'react'; // Only React is needed

const NodePDFViewer = () => {
  const driveLink = "https://drive.google.com/file/d/16vzNrv0InxZt6U0n82akew35L5XZuoXQ/view?usp=drive_link";
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

export default NodePDFViewer;
