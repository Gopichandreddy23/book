import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for the hover effect
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.05); }
`;

// Styled components
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    padding: 15px;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1/1;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: ${scaleUp} 0.3s ease forwards;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 25px 20px;
  color: white;
  opacity: ${props => (props.isHovered ? 1 : 0)};
  transform: ${props => (props.isHovered ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: none;
`;

const ImageTitle = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.4s ease forwards;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ImageDescription = styled.p`
  margin: 8px 0 0;
  font-size: 0.9rem;
  opacity: 0.9;
  animation: ${fadeIn} 0.4s ease forwards 0.1s;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const GalleryDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  color: #555;
  line-height: 1.7;
  font-size: 1.1rem;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

// Main Gallery component
const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Gallery items data with descriptions
  const galleryItems = [
    { 
      id: 1, 
      title: 'SOFTWARE', 
      description: 'Custom software solutions for your business needs',
      imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 2, 
      title: 'ONLINE MARKETING', 
      description: 'Boost your online presence and reach',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 3, 
      title: 'BANKING SERVICES', 
      description: 'Comprehensive financial solutions',
      imageUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZyUyMHNlcnZpY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 4, 
      title: 'TALK', 
      description: 'Communication and collaboration tools',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udmVyc2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 5, 
      title: 'LIVE STREAM', 
      description: 'Professional streaming services',
      imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZSUyMHN0cmVhbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 6, 
      title: 'REGISTRATION SERVICE', 
      description: 'Business and legal registration assistance',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVnaXN0cmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 7, 
      title: 'GST SERVICE', 
      description: 'Complete GST filing and compliance',
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 8, 
      title: 'LEGAL', 
      description: 'Expert legal advice and services',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 9, 
      title: 'FINANCE', 
      description: 'Financial planning and investment services',
      imageUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' 
    },
    { 
      id: 10, 
      title: 'TAXATION SERVICE', 
      description: 'Tax planning and filing solutions',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' 
    },
  ];

  return (
    <div>
      <GalleryDescription>
        <h1>Gallery</h1>
        Step into our gallery and immerse yourself in a world of creativity and inspiration. From captivating artworks to stunning photography, explore a diverse collection that sparks imagination and evokes emotion. Discover beauty in every stroke, frame, and composition as you journey through our curated gallery experience.
      </GalleryDescription>
      
      <GalleryContainer>
        {galleryItems.map((item) => (
          <GalleryItem 
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <GalleryImage src={item.imageUrl} alt={item.title} />
            <ImageOverlay isHovered={hoveredItem === item.id}>
              <ImageTitle>{item.title}</ImageTitle>
              <ImageDescription>{item.description}</ImageDescription>
            </ImageOverlay>
          </GalleryItem>
        ))}
      </GalleryContainer>
    </div>
  );
};

export default Gallery;