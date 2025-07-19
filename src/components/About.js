import React from 'react';
import content from '../assets/i18n';

const About = ({ lang }) => {
  const t = content[lang].about;

  return (
    <section className="container my-5">
      <h2 className="text-warning mb-3">{t.title}</h2>
      <p>{t.text}</p>
    </section>
  );
};

export default About;
