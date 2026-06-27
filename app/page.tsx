"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const [swiper, setSwiper] = useState<any>(null);
  const [isDark, setIsDark] = useState(true);

  // State untuk mengatasi error iframe kosong
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Daftar nama sertifikat kustom
  const certificateNames = [
    "Data Science",
    "Toefl",
    "AI Engineer",
    "LLM",
    "Pemograman Web"
  ];

  // Konfigurasi Tema
  const theme = {
    bg: isDark ? 'bg-[#111111]' : 'bg-[#f5f5f7]',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    mutedText: isDark ? 'text-gray-400' : 'text-gray-600',
    cardBg: isDark ? 'bg-[#1a1a1a]' : 'bg-white',
    cardBorder: isDark ? 'border-gray-800' : 'border-gray-200',
    inputBg: isDark ? 'bg-gray-800' : 'bg-gray-50',
    inputBorder: isDark ? 'border-gray-700' : 'border-gray-300',
    progressBg: isDark ? 'bg-gray-800' : 'bg-gray-200',
    navBg: isDark ? 'bg-[#111111]/90' : 'bg-white/90',
  };

  return (
    <main className={`${theme.bg} ${theme.text} font-sans selection:bg-blue-500 selection:text-white overflow-hidden h-screen w-screen relative transition-colors duration-500`}>

      {/* HEADER & NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 md:py-6 flex justify-between items-center backdrop-blur-md ${theme.navBg} border-b ${theme.cardBorder} transition-colors duration-500`}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-md flex-shrink-0">
            <img src="/FotoProfile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-xs md:text-sm font-bold tracking-widest uppercase hidden sm:block">
            KHALIS AL MUQARRABIN
          </div>
        </div>

        <div className="flex items-center gap-8">
          <ul className={`hidden lg:flex space-x-8 text-xs font-bold tracking-[0.15em] uppercase ${theme.mutedText}`}>
            <li onClick={() => swiper?.slideTo(0)} className="cursor-pointer hover:text-blue-500 transition-colors">Home</li>
            <li onClick={() => swiper?.slideTo(1)} className="cursor-pointer hover:text-blue-500 transition-colors">About Me</li>
            <li onClick={() => swiper?.slideTo(2)} className="cursor-pointer hover:text-blue-500 transition-colors">Experience</li>
            <li onClick={() => swiper?.slideTo(3)} className="cursor-pointer hover:text-blue-500 transition-colors">Certificates</li>
            <li onClick={() => swiper?.slideTo(4)} className="cursor-pointer hover:text-blue-500 transition-colors">Skill</li>
            <li onClick={() => swiper?.slideTo(5)} className="cursor-pointer hover:text-blue-500 transition-colors">Contact</li>
          </ul>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full border ${theme.cardBorder} hover:border-blue-500 transition-all`}
            title="Toggle Theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* SWIPER CONTAINER */}
      <Swiper
        onSwiper={setSwiper}
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        speed={800}
        modules={[Mousewheel, Keyboard, Pagination]}
        className="h-full w-full"
      >

        {/* FRAME 1: HERO SECTION */}
        <SwiperSlide>
          <section className="h-full w-full relative flex items-center justify-center overflow-hidden px-6 md:px-10">
            <h1 className={`absolute text-[22vw] md:text-[15vw] font-black tracking-tighter uppercase z-0 ${isDark ? 'text-white' : 'text-gray-900'} select-none whitespace-nowrap drop-shadow-lg transition-colors duration-500`}>
              PORTOFOLIO
            </h1>

            <div className="z-10 h-[60vh] md:h-[80vh] flex items-end mt-16 md:mt-0">
              <img src="/Foto-Home.png" alt="Khalis Hero" className="h-full object-contain drop-shadow-2xl" />
            </div>

            <h1 className={`absolute text-[22vw] md:text-[15vw] font-black tracking-tighter uppercase z-20 text-transparent select-none whitespace-nowrap pointer-events-none transition-colors duration-500 ${isDark ? '[-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white]' : '[-webkit-text-stroke:2px_#111111] md:[-webkit-text-stroke:3px_#111111]'}`}>
              PORTOFOLIO
            </h1>

            <div className="absolute bottom-12 md:bottom-20 left-6 md:left-20 z-30 bg-black/30 md:bg-transparent p-4 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none">
              <p className={`text-xs md:text-sm tracking-widest uppercase ${theme.mutedText} mb-2`}>Presented by</p>
              <div className="h-[2px] w-8 md:w-12 bg-blue-500 mb-2"></div>
              <p className="text-lg md:text-2xl font-bold tracking-wide uppercase text-white md:text-inherit">Khalis Al Muqarrabin</p>
              <p className={`text-xs md:text-sm mt-1 text-gray-300 md:${theme.mutedText}`}>Reliability Engineer</p>
            </div>

            <p className="absolute bottom-6 md:bottom-10 right-6 md:right-10 text-xs tracking-widest uppercase text-gray-500 animate-pulse block lg:hidden">
              Swipe ➡️
            </p>
          </section>
        </SwiperSlide>

        {/* FRAME 2: ABOUT ME */}
        <SwiperSlide>
          <section className="h-full w-full flex flex-col lg:flex-row items-center justify-start lg:justify-center px-6 md:px-32 pt-28 md:pt-32 pb-12 overflow-y-auto custom-scrollbar">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-8 tracking-tight">About Me</h2>
                <p className={`${theme.mutedText} leading-relaxed text-sm md:text-lg mb-6 text-justify`}>
                  I am a Master's student in Information Systems and a professional Reliability Data Evaluator. I possess an outstanding capability in analyzing complex operational data to extract strategic insights. My expertise extends to implementing Robotic Process Automation (UiPath) to streamline administrative workflows and optimize industrial efficiency.
                </p>
                <div className={`space-y-3 md:space-y-4 text-xs md:text-sm border-t ${theme.cardBorder} pt-4 md:pt-6`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="font-bold text-blue-500">Master of IT (M.Kom)</span>
                    <span className={theme.mutedText}>GPA: 4.00</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="font-bold text-blue-500">B.Sc. Informatics Engineering</span>
                    <span className={theme.mutedText}>GPA: 3.74</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className={`w-[250px] h-[300px] md:w-[350px] md:h-[450px] ${theme.cardBg} border ${theme.cardBorder} rounded-2xl overflow-hidden relative shadow-xl`}>
                  <img src="/Foto-About.jpeg" alt="About" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* FRAME 3: EXPERIENCE */}
        <SwiperSlide>
          <section className="h-full w-full flex flex-col justify-start lg:justify-center px-6 md:px-32 pt-28 md:pt-32 pb-12 overflow-y-auto custom-scrollbar">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-12 tracking-tight text-center lg:text-left">Professional Experience</h2>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
                <div className={`${theme.cardBg} p-6 md:p-10 rounded-2xl border ${theme.cardBorder} hover:border-blue-500 transition-colors shadow-lg`}>
                  <p className="text-blue-500 text-[10px] md:text-xs font-bold tracking-widest mb-2">OCT 2025 - PRESENT</p>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">Reliability Data Evaluator</h3>
                  <p className={`${theme.mutedText} text-xs md:text-sm mb-4 md:mb-6`}>PT Imara (Placement: PT Pupuk Iskandar Muda)</p>
                  <ul className={`${theme.mutedText} text-xs md:text-sm space-y-2 md:space-y-3 list-disc list-outside ml-4 leading-relaxed`}>
                    <li>Analyze 1,000+ rows of monthly operational data from SAP (PM & MM) utilizing Python and Advanced Excel.</li>
                    <li>Calculate critical plant reliability metrics (MTBF & MTTR) from equipment downtime logs.</li>
                    <li>Draft comprehensive Product Requirements Documents (PRD) for industrial reliability dashboards.</li>
                    <li>Deploy UiPath strictly to automate the extraction of routine operational data, maximizing time efficiency.</li>
                  </ul>
                </div>

                <div className={`${theme.cardBg} p-6 md:p-10 rounded-2xl border ${theme.cardBorder} hover:border-blue-500 transition-colors shadow-lg`}>
                  <p className="text-blue-500 text-[10px] md:text-xs font-bold tracking-widest mb-2">FEB 2024 - JUN 2024</p>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">Data Analyst Intern</h3>
                  <p className={`${theme.mutedText} text-xs md:text-sm mb-4 md:mb-6`}>PT. PLN (Persero)</p>
                  <ul className={`${theme.mutedText} text-xs md:text-sm space-y-2 md:space-y-3 list-disc list-outside ml-4 leading-relaxed`}>
                    <li>Validated customer meter data through the ACMT System, establishing a 95% billing accuracy rate.</li>
                    <li>Supplied over 50 validated weekly data sets to support cross-functional operational teams.</li>
                    <li>Initiated an early-stage UiPath automation script to compile billing records, reducing administrative workload.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* FRAME 4: CERTIFICATES (Nama Kustom Selesai Diperbarui) */}
        <SwiperSlide>
          <section className="h-full w-full flex flex-col justify-start px-6 md:px-24 pt-28 md:pt-32 pb-12 overflow-y-auto custom-scrollbar">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center lg:text-left">Licenses & Certifications</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10">
              {certificateNames.map((name, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedCert(`/certificate-${i + 1}.pdf`)}
                  className={`${theme.cardBg} border ${theme.cardBorder} rounded-2xl p-5 md:p-6 cursor-pointer hover:border-blue-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg group`}
                >
                  <div className={`w-full h-32 md:h-40 ${theme.progressBg} rounded-xl mb-4 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300`}>
                    📄
                  </div>
                  <h4 className="font-bold text-sm md:text-lg text-center group-hover:text-blue-500 transition-colors">{name}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Modal PDF Viewer */}
          {selectedCert && (
            <div
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedCert(null)}
            >
              <iframe
                src={selectedCert}
                className="w-full h-full max-w-5xl rounded-xl shadow-2xl border-4 border-gray-800"
                title="PDF Viewer"
              />
            </div>
          )}
        </SwiperSlide>

        {/* FRAME 5: SKILLS */}
        <SwiperSlide>
          <section className="h-full w-full flex flex-col justify-start lg:justify-center px-6 md:px-32 pt-28 md:pt-32 pb-12 overflow-y-auto custom-scrollbar">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
              <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 md:mb-6">Technical<br />Skills</h2>
                <p className={`${theme.mutedText} mb-6 md:mb-10 text-sm md:text-lg leading-relaxed`}>
                  A robust fusion of reliability engineering principles, enterprise data architecture, and workflow automation.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['Analytical Thinking', 'Problem Solving', 'Managerial Leadership'].map((skill) => (
                    <span key={skill} className={`px-4 py-2 ${theme.cardBg} border ${theme.cardBorder} rounded-full text-[10px] md:text-xs font-semibold tracking-wider ${theme.text}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                {[
                  { name: 'Python & Data Analytics', percent: '95%' },
                  { name: 'SAP (PM & MM) / Advanced Excel', percent: '90%' },
                  { name: 'Reliability Metrics (MTBF & MTTR)', percent: '95%' },
                  { name: 'UiPath (Repetitive Task Automation)', percent: '85%' },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 md:mb-3 text-xs md:text-sm font-bold tracking-wider uppercase">
                      <span>{skill.name}</span>
                      <span className="text-blue-500">{skill.percent}</span>
                    </div>
                    <div className={`h-1.5 rounded-full ${theme.progressBg}`}>
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: skill.percent }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* FRAME 6: CONTACT FORM */}
        <SwiperSlide>
          <section className="h-full w-full flex flex-col justify-start lg:justify-center px-6 md:px-32 pt-28 md:pt-32 pb-12 overflow-y-auto custom-scrollbar">
            <div className="w-full max-w-5xl mx-auto">

              <div className="text-center mb-6 lg:mb-10">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">Get In Touch</h2>
                <p className={`text-sm md:text-base ${theme.mutedText}`}>Want to know me better? Let's discuss data and reliability.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">

                {/* Left Side: Contact Info */}
                <div className="flex flex-col gap-4">
                  <div className={`${theme.cardBg} border ${theme.cardBorder} p-6 rounded-2xl flex-1 shadow-lg`}>
                    <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-lg">✉️</div>
                        <div>
                          <p className={`text-[10px] md:text-xs ${theme.mutedText}`}>Email</p>
                          <p className="font-bold text-sm">almuqarrabink@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-lg">📞</div>
                        <div>
                          <p className={`text-[10px] md:text-xs ${theme.mutedText}`}>Phone</p>
                          <p className="font-bold text-sm">(+62) 853 5951 1939</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-lg">📍</div>
                        <div>
                          <p className={`text-[10px] md:text-xs ${theme.mutedText}`}>Location</p>
                          <p className="font-bold text-sm">Lhokseumawe, Indonesia</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${theme.cardBg} border ${theme.cardBorder} p-5 rounded-2xl flex items-center gap-4 shadow-lg`}>
                    <h3 className="font-bold text-sm mr-2">Social Media</h3>

                    <a href="https://linkedin.com/in/khalis-abin" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-blue-600/10 hover:bg-blue-600 hover:text-white flex items-center justify-center text-blue-500 transition-colors" title="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>

                    <a href="https://instagram.com/khalis-abin" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-pink-500/10 hover:bg-pink-500 hover:text-white flex items-center justify-center text-pink-500 transition-colors" title="Instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </a>

                    <a href="https://tiktok.com/@khalis_abinn" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-500/10 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-500 transition-colors" title="TikTok">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.39-2.27 1.94-5.4 2.7-8.31 2.01-2.92-.68-5.38-2.61-6.6-5.33-1.2-2.64-1.15-5.78.11-8.39 1.19-2.51 3.52-4.46 6.31-5.11 1.34-.31 2.74-.35 4.1-.13v4.11c-1.12-.2-2.31-.05-3.31.5-1.1.6-1.95 1.57-2.41 2.72-.45 1.15-.47 2.44-.06 3.58.4 1.12 1.25 2.05 2.27 2.6 1.05.57 2.3.73 3.42.44 1.11-.27 2.08-.94 2.66-1.91.56-.93.8-2.03.77-3.12.04-4.83.02-9.67.04-14.5z" /></svg>
                    </a>
                  </div>
                </div>

                {/* Right Side: Message Form */}
                <div className={`${theme.cardBg} border ${theme.cardBorder} p-6 rounded-2xl shadow-lg`}>
                  <h3 className="text-lg font-bold mb-4">Send a Message</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className={`block text-[10px] md:text-xs font-bold mb-1.5 ${theme.mutedText}`}>Full Name</label>
                      <input type="text" placeholder="Type Here..." className={`w-full ${theme.inputBg} border ${theme.inputBorder} rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors`} />
                    </div>
                    <div>
                      <label className={`block text-[10px] md:text-xs font-bold mb-1.5 ${theme.mutedText}`}>Email</label>
                      <input type="email" placeholder="john@example.com" className={`w-full ${theme.inputBg} border ${theme.inputBorder} rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors`} />
                    </div>
                    <div>
                      <label className={`block text-[10px] md:text-xs font-bold mb-1.5 ${theme.mutedText}`}>Message</label>
                      <textarea rows={3} placeholder="Type Here..." className={`w-full ${theme.inputBg} border ${theme.inputBorder} rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none`}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
                      Send Message
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>
        </SwiperSlide>

      </Swiper>
    </main>
  );
}