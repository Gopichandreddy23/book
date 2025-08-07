import React from 'react';
import styled from 'styled-components';

const Services = () => {
  const services = [
    {
      title: "Business",
      description: "Streamline your operations and unlock growth potential with our comprehensive business solutions. From strategy development to implementation, we offer tailored services to optimize efficiency and drive success.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Advertisement",
      description: "Capture attention and drive engagement with our dynamic advertising solutions. From strategic planning to creative execution, we deliver targeted campaigns that resonate with your audience and elevate your brand.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Financial",
      description: "Secure your financial future with our trusted advisory services. Whether you're planning for retirement, managing investments, or seeking financing, our expert team offers tailored solutions to help you achieve your goals.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Legal",
      description: "Navigate complex legal landscapes with confidence. Our team of experienced professionals provides expert guidance and personalized solutions to protect your interests and ensure compliance with regulations.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <ServicesSection>
      <h2>OUR SERVICES</h2>
      <ServicesIntro>
        Experience seamless efficiency and unparalleled convenience with our suite of integrated services, 
        tailored to meet your every need.
      </ServicesIntro>
      
      <ServicesContainer>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <CardImage>
              <img src={service.image} alt={service.title} />
            </CardImage>
            <CardContent>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </CardContent>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </ServicesSection>
  );
};

// Styled components
const ServicesSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const ServicesIntro = styled.p`
  margin-bottom: 3rem;
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const ServiceCard = styled.div`
  flex: 1 1 calc(50% - 2rem);
  max-width: calc(50% - 2rem);
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const CardImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: left;

  h3 {
    margin-top: 0;
    color: #333;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

export default Services;