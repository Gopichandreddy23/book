import React from "react";

const About = () => {
  const youtubeVideoId = "yByfau1Q3zs";

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Video Section (Left Side - Centered) */}
        <div style={styles.videoContainer}>
          <div style={styles.videoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="About 24HR7s"
              style={styles.videoIframe}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Section (Right Side) */}
        <div style={styles.textSection}>
          <h1 style={styles.heading}>ABOUT US</h1>
          <p style={styles.paragraph}>
            24HR7s Application Services partners with business and IT leaders to industry solutions, 
            IPs and strategic partnerships with technology leaders is helping clients accelerate their 
            digital transformation journey to modernize their enterprise making them future ready. 
            24HR7 brings together applications, platforms and cloud solutions to enhance the experience 
            across all touchpoints, delivering superior business outcomes.
          </p>
          
          <h2 style={styles.subHeading}>Why Choose Us?</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featuresColumn}>
              <ul style={styles.featureList}>
                <li style={styles.listItem}>Dedicated Teams</li>
                <li style={styles.listItem}>Ready For Challenges</li>
                <li style={styles.listItem}>Positive Attitude</li>
                <li style={styles.listItem}>Quick Resolutions</li>
              </ul>
            </div>
            <div style={styles.featuresColumn}>
              <ul style={styles.featureList}>
                <li style={styles.listItem}>24/7 Support</li>
                <li style={styles.listItem}>High Quality</li>
                <li style={styles.listItem}>Cost Effective</li>
                <li style={styles.listItem}>Well Established</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Styles with Perfect Centering
const styles = {
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  content: {
    display: "flex",
    gap: "3rem",
    alignItems: "flex-start", // Align items at the top
    '@media (max-width: 768px)': {
      flexDirection: "column",
      gap: "2rem",
    },
  },
  videoContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center", // Horizontal centering
    alignItems: "center",    // Vertical centering
    minHeight: "600px",      // Minimum height to ensure centering
    position: "relative",
    '@media (max-width: 768px)': {
      minHeight: "500px",
      width: "100%",
    },
  },
  videoWrapper: {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    maxWidth: "560px", // Maximum width for larger screens
  },
  videoIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
  textSection: {
    flex: 1,
    padding: "0 1rem",
  },
  heading: {
    fontSize: "2.2rem",
    color: "#222",
    marginBottom: "1.5rem",
    fontWeight: "600",
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#444",
    marginBottom: "2rem",
  },
  subHeading: {
    fontSize: "1.6rem",
    color: "#222",
    margin: "2rem 0 1.5rem",
    fontWeight: "500",
  },
  featuresGrid: {
    display: "flex",
    gap: "2rem",
    margin: "1.5rem 0",
    '@media (max-width: 768px)': {
      flexDirection: "column",
      gap: "0.5rem",
    },
  },
  featuresColumn: {
    flex: 1,
  },
  featureList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "0.6rem 0",
    position: "relative",
    paddingLeft: "1.8rem",
    fontSize: "1rem",
    color: "#333",
    '&:before': {
      content: '"•"',
      color: "#0066cc",
      fontSize: "1.4rem",
      position: "absolute",
      left: "0.5rem",
      top: "0.4rem",
    },
  },
  industriesSection: {
    marginTop: "3rem",
    borderTop: "1px solid #eee",
    paddingTop: "1.5rem",
  },
  industryHeading: {
    fontSize: "1.3rem",
    color: "#555",
    margin: "1rem 0",
    fontWeight: "500",
  },
};

export default About;