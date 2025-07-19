import React from 'react';
import content from '../assets/i18n';

const Projects = ({ lang }) => {
  const title = content[lang].projectsTitle;

  const projects = [
    {
      title: lang === 'ar' ? "نظام إدارة الفواتير" : "Invoice Management System",
      tech: "Laravel + React.js + MySQL",
      desc: lang === 'ar'
        ? "نظام فواتير متكامل بواجهة تفاعلية، دعم للضرائب، الخصومات، وتخزين البيانات."
        : "Full invoice system with UI, tax/discount logic, and database storage.",
      link: "https://invoice-flax-six.vercel.app/"
    },
    {
      title: lang === 'ar' ? "منصة تجارة إلكترونية" : "E-Commerce Platform",
      tech: "Laravel + AdminLTE",
      desc: lang === 'ar'
        ? "نظام بيع وشراء مع لوحة تحكم وإدارة المنتجات والمستخدمين."
        : "Commerce system with dashboard, product and user management.",
    },
    {
      title: lang === 'ar' ? "API لإدارة المدارس" : "School Management API",
      tech: "Laravel + Passport",
      desc: lang === 'ar'
        ? "واجهة برمجية لإدارة المدارس، الصلاحيات، الطلاب، المعلمين، والمهام."
        : "RESTful API for school with user roles, student/class/task management.",
      link: "https://github.com/Abedlrhman14/School_Mangment"
    },
    {
      title: lang === 'ar' ? "صفحة هبوط لمحل صرافة" : "Currency Exchange Landing Page",
      tech: "HTML + CSS + Bootstrap",
      desc: lang === 'ar'
        ? "صفحة هبوط عصرية ومتجاوبة تم تصميمها لمحل صرافة لعرض الخدمات ومعلومات التواصل."
        : "Modern, responsive landing page built for a currency exchange business.",
      link: "https://el-helal.vercel.app/"
    }
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
