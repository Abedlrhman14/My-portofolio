import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="bg-dark text-white">
      <div className="text-end p-3">
        <button className="btn btn-sm btn-outline-warning" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
          {lang === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
