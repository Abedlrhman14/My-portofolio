import React from 'react';
import { Container } from 'react-bootstrap';
import content from '../assets/i18n';

const Contact = ({ lang }) => {
  const t = content[lang].contact;

  return (
    <Container className="py-5 text-center text-white">
      <h2 className="text-warning mb-4">{t.title}</h2>
      <p>📧 dev.abdelrhmanahmed@gmail.com</p>
      <p>🔗 <a href="https://github.com/Abedlrhman14" className="text-white">{t.github}</a></p>
      <p>🔗 <a href="https://www.linkedin.com/in/abdelrhman-ahmed-0321752b5/" className="text-white">{t.linkedin}</a></p>
     <p>📱 <a href="https://wa.me/201065487826" className="text-white">WhatsApp</a></p> {/* ← هنا رقمك */}
    </Container>
  );
};

export default Contact;
