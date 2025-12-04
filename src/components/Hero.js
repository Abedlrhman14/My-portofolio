import React from 'react';
import content from '../assets/i18n';
import img from '../assets/WhatsApp Image 2025-06-12 at 04.26.48_ed6e1f13.jpg'
const Hero = ({ lang }) => {
  const t = content[lang].hero;

  return (
    <div className="text-center py-5">
      <img
        src={img}
        alt="Abdelrahman Ahmed"
        className="img-fluid rounded-circle mb-3"
        style={{ width: "200px", height: "200px", objectFit: "cover", border: "4px solid #DDA853" }}
      />
      <h1>{t.name}</h1>
      <h4 className="text-warning">{t.title}</h4>
      <p>{t.subtitle}</p>
      <a href="Abdelrahman Ahmed CV[2].docx" className="btn btn-warning mt-3" download>
        {t.cv}
      </a>
    </div>
  );
};

export default Hero;
