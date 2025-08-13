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
// import React from 'react';

// const SpringPDFViewer = () => {
//   const driveLink = "https://drive.google.com/file/d/1-paDHN1MyaCrO7dmJSuwx1Z3M3S0EnTx/view?usp=sharing";
//   const pdfUrl = driveLink.replace('/view', '/preview');

//   // Example Google image URL (replace with your own)
//   const bgImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

//   return (
//     <div style={{
//       width: '100vw',
//       height: '100vh',
//       backgroundImage: `url(${bgImage})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//       boxSizing: 'border-box'
//     }}>
//       <style>
//         {`
//           @keyframes borderMove {
//             0% {
//               background-image: linear-gradient(white, white),
//                 linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
//             }
//             100% {
//               background-image: linear-gradient(white, white),
//                 linear-gradient(450deg, red, orange, yellow, green, blue, indigo, violet);
//             }
//           }
//         `}
//       </style>

//       <iframe
//         src={pdfUrl}
//         width="40%"
//         height="100%"
//         className="animated-border"
//         title="PDF Viewer"
//       />
//     </div>
//   );
// };

// export default SpringPDFViewer;
