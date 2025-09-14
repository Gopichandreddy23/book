import React from 'react'; // Only React is needed

const JsPDFViewer = () => {
  const driveLink = "https://drive.google.com/file/d/1iMUmnB5H6AhCGTPbzalpv8DuxWdOzVFo/view?usp=drive_link";
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

export default JsPDFViewer;
