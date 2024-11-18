import React from 'react';
import { ArrowRight } from 'lucide-react';
import './programcoun.css';

const ProgramCard = ({ title, image, description }) => (
  <div className="program-card">
    <div className="card-image-container">
      <img src={image} alt={title} className="card-image" />
    </div>
    <div className="card-overlay">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <ArrowRight className="card-arrow" />
      </div>
    </div>
  </div>
);

const Programcon = () => {
  const programs = [
    {
      title: "Workshops",
      image: "/images/workshops.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Tristique porta nisi felis tristique donec scelerisque."
    },
    {
      title: "Internships",
      image: "/images/internships.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Tristique porta nisi felis tristique donec scelerisque."
    },
    {
      title: "Campus Ambassadors",
      image: "/images/ambassadors.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Tristique porta nisi felis tristique donec scelerisque."
    },
    {
      title: "Events",
      image: "/images/events.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Tristique porta nisi felis tristique donec scelerisque."
    }
  ];

  return (
    <div className="programs-container">
      <div className="programs-wrapper">
       
        
        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              image={program.image}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programcon;