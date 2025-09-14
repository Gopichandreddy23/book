import React from 'react'; // Only React is needed

const BootstrapPDFViewer = () => {
  const driveLink = "https://drive.google.com/file/d/1F_qzTtwjhmzjvN-9pGifo6fX81ID-76c/view?usp=drive_link";
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

export default BootstrapPDFViewer;
