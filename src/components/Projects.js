import React from 'react';
import content from '../assets/i18n';

const Projects = ({ lang }) => {
  const title = content[lang].projectsTitle;

  const projects = [
    {
      title: lang === 'ar' ? "المهران جروب" : "El Mahran-Group",
      tech: "Laravel + MySQL + Dashboard",
      desc: lang === 'ar'
        ? "اونلاين ستور"
        : "Online store",
      link: "https://almahrangroup.com/en"
    },
    {
      title: lang === 'ar' ? "فوكس ميديكال" : "Fox midical",
      tech: "Laravel + Admin Dashboard",
      desc: lang === 'ar'
        ? "اونلاين ستور لبيع المنتجات الصحية"
        : "Online store for selling health products",
          link: "https://fox-medical.com/demo/en"
    },

    {
      title: lang === 'ar' ? "شوكة وسكينة" : "Shshoka wskina",
      tech: "Laravel + Admin Dashboard",
      desc: lang === 'ar'
        ? "اونلاين ستور لبيع الاجهزة المنزلية"
        : "Online store for selling home appliances",
      link: "http://shokawskina.com/ar"
    },
    {
      title: lang === 'ar' ? "المصرية للافتات السترشادية" : "Egyptian Signage Company",
      tech: "Laravel + Admin Dashboard",
      desc: lang === 'ar'
        ? "ويب سايت تعريفي عن شركة المصرية لتجارة اللافتات الارشادية"
        : "Website introducing the Egyptian Company for Trading Directional Signs",
      link: "http://shokawskina.com/ar"
    },
    {
      title: lang === 'ar' ? "شركة ماسمب للاعمال المعمارية" : "Masmb Architectural Works Company",
      tech: "Laravel + Admin Dashboard",
      desc: lang === 'ar'
        ? "ويب سايت تعريفي عن شركة ماسمب للاعمال المعمالرية"
        : "Website introducing Masmab Construction Company",
      link: "https://masmep.com/en"
    },
    {
      title: lang === 'ar' ? "شركة بايك بلس" : "Pike Plus Company",
      tech: "Laravel + Admin Dashboard",
      desc: lang === 'ar'
        ? "ويب سايت تعريفي عن شركة بايك بلس للتوصيل"
        : "Website introducing the Pike Plus delivery company",
      link: "https://bikepluslogistic.com/en"
    },
    {
      title: lang === 'ar' ? "شركةالداساس" : "Dasas Company",
      tech: "Laravel + Admin Dashboard",
      desc: lang === 'ar'
        ? "ويب سايت تعريفي عن شركةالداساس لقطع غيار السيارات"
        : "Website introducing Al-Dasas Auto Parts Company",
      link: "https://dasasautoparts.com/en"
    },
    {
      title: lang === 'ar' ? "شركة باور تكنولوجي" : "Power Technology Company",
      tech: "Laravel + Admin Dashboard",
      desc: lang === 'ar'
        ? "ويب سايت تعريفي عن شركة باور تكنولوجي  لصيانة المواتير"
        : "Website introducing Power Technology Motor Maintenance Company",
      link: "https://power-technology-system.com/en"
    },
        {
      title: lang === 'ar' ? "API لإدارة المدارس" : "School Management API",
      tech: "Laravel + Passport",
      desc: lang === 'ar'
        ? "واجهة برمجية لإدارة المدارس، الصلاحيات، الطلاب، المعلمين، والمهام."
        : "RESTful API for school with user roles, student/class/task management.",
      link: "https://github.com/Abedlrhman14/School_Mangment"
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-warning mb-4">{title}</h2>
      <div className="row">
        {projects.map((proj, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card bg-secondary text-white h-100">
              <div className="card-body">
                <h5 className="card-title">{proj.title}</h5>
                <h6>{proj.tech}</h6>
                <p className="card-text">{proj.desc}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    className="btn btn-outline-warning btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live / GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
