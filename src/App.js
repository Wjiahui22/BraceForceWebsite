import React, { useState } from 'react';
import { Shield, Users, FileText, GraduationCap, Video, Mail } from 'lucide-react';

const BraceForceWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { id: 'home', label: 'Home', icon: Shield },
    { id: 'project', label: 'Our Project', icon: FileText }, // <-- Add this line
    { id: 'appendices', label: 'Appendices', icon: FileText },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'engineers', label: 'Engineers', icon: Users },
    { id: 'showcase', label: 'Final Showcase', icon: Video }
  ];

  const engineers = [
    {
      name: "Julie Huang",
      graduationYear: "2028",
      major: "Industrial Engineering", 
      email: "juliehuang2028@u.northwestern.edu",
      funFact: "I like designing products that make a difference",
      image: "/images/JulieHuang.jpg"
    },
    {
      name: "Elijah Brickman",
      graduationYear: "2028",
      major: "Mechanical Engineering",
      email: "elijahbrickman2028@northwestern.edu",
      funFact: "I like building things and exploring new technologies",
      image: "/images/elijahbrickman.jpeg"
    },
    {
      name: "Winnie Chen",
      graduationYear: "2028", 
      major: "Mechanical Engineering",
      email: "jhwinniec@northwestern.edu",
      funFact: "I like capybaras and designing efficient systems",
      image: "/images/Jiahui(Winnie)_Chen_Microelectronics.png"
    },
    {
      name: "Mateo Liguori",
      graduationYear: "2028",
      major: "Mechanical Engineering",
      email: "mateoliguori2028@northwestern.edu", 
      funFact: "I like coconut water and engineering cars",
      image: "/images/mateoliguori.JPG"
    }
  ];

  const HomePage = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-600 text-white rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            BraceForce
          </h1>
          <p className="text-2xl mb-8 opacity-90">Revolutionary Self-Defense Innovation</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <img 
              src="/images/dji_mimo_20250606_142114_20250606122113_1749238078398_photo.jpg" 
              alt="BraceForce Product" 
              className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Project Definition Section */}
      <section className="flex items-center gap-12 bg-white rounded-2xl p-8 shadow-2xl border-4 border-gradient-to-r from-blue-400 via-amber-400 to-pink-400 relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none rounded-2xl border-4 border-transparent bg-gradient-to-r from-blue-100/40 via-amber-100/40 to-pink-100/40" />
  <div className="flex-1 relative z-10">
    <h2 className="text-4xl font-extrabold text-blue-700 mb-6 flex items-center gap-3">
      <Shield className="text-amber-500" size={36} />
      Our Mission
    </h2>
    <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50 rounded-lg p-8 min-h-[200px] flex items-center justify-center shadow-lg border border-blue-100">
      <p className="text-gray-700 text-left text-lg font-medium">
        BraceForce is a bracelet that enhances personal safety, educates the user on how to protect themselves from physical attacks, and reduces the anxiety users feel when they leave the safety of their homes. We want to help those who feel targeted, discriminated against, stressed, or unsafe.
      </p>
    </div>
  </div>
</section>
    </div>
  );

  const ProjectPage = () => (
  <div className="space-y-12">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Project</h1>

    {/* Introduction Section */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Introduction
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <iframe
            src="/pdfs/Introduction.pdf"
            title="Introduction PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>

    {/* Executive Summary Section */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Executive Summary
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <iframe
            src="/pdfs/ExecutiveSummary.pdf"
            title="Executive Summary PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>

    {/* Users and Requirements */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Users and Requirements
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <iframe
            src="/pdfs/Usersandrequirements.pdf"
            title="Users and Requirements PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>

    {/* Design Concept and Rationale Section */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Design Concept and Rationale
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <iframe
            src="/pdfs/dcandr.pdf"
            title="Design Concept and Rationale PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>

    {/* Future Development Section */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Future Development
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <iframe
            src="/pdfs/futuredevelopments.pdf"
            title="Future Development PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>

    {/* Conclusion Section */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Conclusion
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <iframe
            src="/pdfs/conclusion.pdf"
            title="Conclusion PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>

    {/* References Section */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          References
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[100px] flex items-center justify-center">
          <iframe
            src="/pdfs/references.pdf"
            title="References PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>
  </div>
);

  const AppendicesPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Appendices</h1>

      {/* Ideation Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span> Ideation
        </h2>
        <div className="grid gap-6">

  {/* Patent Research as PDF Section */}
  <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Patent Research
      </h2>
      <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
        <iframe
          src="/pdfs/C.pdf"
          title="Patent Research PDF"
          className="w-full h-[600px] rounded-lg border"
        />
      </div>
    </div>
  </section>

  {/* Competitive Benchmarking as PDF Section */}
  <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Competitive Benchmarking Research Summary
      </h2>
      <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
        <iframe
          src="/pdfs/B.pdf"
          title="Competitive Benchmarking Research PDF"
          className="w-full h-[600px] rounded-lg border"
        />
      </div>
    </div>
  </section>

  {/* Need-Finding as PDF Section */}
  <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Need Finding Research Summary
      </h2>
      <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
        <iframe
          src="/pdfs/A.pdf"
          title="Need Finding Research PDF"
          className="w-full h-[600px] rounded-lg border"
        />
      </div>
    </div>
  </section>

  {/* Design Review Summary as PDF Section */}
  <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Design Review Summary
      </h2>
      <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
        <iframe
          src="/pdfs/D.pdf"
          title="Design Review Summary PDF"
          className="w-full h-[600px] rounded-lg border"
        />
      </div>
    </div>
  </section>
        </div>
      </section>

      {/* Project Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-3xl">🔧</span> Project
        </h2>
        <div className="grid gap-6">

          {/* Project Definition as PDF Section */}
          <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                Project Definition
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                <iframe
                  src="/pdfs/E.pdf"
                  title="Project Definition PDF"
                  className="w-full h-[600px] rounded-lg border"
                />
              </div>
            </div>
          </section>

          {/* Bill of Material as PDF Section */}
          <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                Bill of Materials
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                <iframe
                  src="/pdfs/G.pdf"
                  title="Bill of Materials PDF"
                  className="w-full h-[600px] rounded-lg border"
                />
              </div>
            </div>
          </section>

          {/* Ethical Consideration as PDF Section */}
          <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                Ethical Considerations
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                <iframe
                  src="/pdfs/F.pdf"
                  title="Ethical Considerations PDF"
                  className="w-full h-[600px] rounded-lg border"
                />
              </div>
            </div>
          </section>

          {/* Testing Summary as PDF Section */}
          <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                Testing Summary
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                <iframe
                  src="/pdfs/Testing Summary.pdf"
                  title="Testing Summary PDF"
                  className="w-full h-[600px] rounded-lg border"
                />
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* Final Product Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
    <span className="text-3xl">🏆</span> Instructions
  </h2>
  <div className="grid gap-6">

    {/* Instructions for Construction as PDF Section */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Instructions for Construction
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <iframe
            src="/pdfs/I.pdf"
            title="Instructions for Construction PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>

    {/* Instruction for Use as PDF Section */}
    <section className="flex items-center gap-12 flex-row-reverse bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Instruction for Use
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <iframe
            src="/pdfs/J.pdf"
            title="Instruction for Use PDF"
            className="w-full h-[600px] rounded-lg border"
          />
        </div>
      </div>
    </section>

  </div>
</section>
    </div>
  );

  const EducationPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Education & Resources</h1>
      
      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Shield className="text-blue-600" />
          INSTRUCTION FOR USE - How to Use BraceForce:
        </h2>
        <div className="bg-blue-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <p className="text-gray-600 text-center">
          <ul className="list-disc list-inside text-gray-600 mb-4 text-left max-w-xl mx-auto">
  <li className="mb-4">
    <strong>Wear It:</strong>
    <ul className="list-disc list-inside ml-6">
      <li>Hold the sleeve in your hand.</li>
      <li>Wrap the metal piece around your wrist a couple of times.</li>
      <li>Slide the end into place and adjust the slider for a secure fit.</li>
    </ul>
  </li>
  <li>
    <strong>To Defend Yourself:</strong>
    <ul className="list-disc list-inside ml-6">
      <li>Remove the bracelet from your wrist.</li>
      <li>Unravel the metal piece from the sleeve.</li>
      <li>Hold the sleeve end in your hand.</li>
      <li>Swing it around like a flail to keep distance between you and the threat.</li>
      <li>
        <span className="italic">
          Remember: you don’t need to swing it hard, just use it to intimidate or defend.
        </span>
      </li>
    </ul>
  </li>
</ul>
        </p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📣 Why is self defense important?</h2>
        <div className="bg-amber-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <p className="text-gray-600 text-center">As stated on Asian Defense Alliance, self-defense empowers vulnerable communities, especially youth and elderly, against hate crimes and racial attacks. During times like the COVID-19 surge in anti-Asian incidents, many felt unsafe simply being out in public. Self-defense provides not just physical techniques, but also the confidence and mental preparedness to respond to aggression or hate, helping people feel safe to live their daily lives.</p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🧐 How can you better protect yourself?</h2>
        <div className="bg-green-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          <p className="text-gray-600 text-center">To better protect yourself, you can join organizations like Asian Defense Alliance which offer self-defense or martial arts training programs tailored to vulnerable groups. These programs often focus on realistic scenarios like verbal aggression or attempted assault for youth and seniors. It's important to develop situational awareness by understanding your surroundings, recognizing potential risks, trusting your instincts, and having an escape plan. Cultivating mental readiness is also essential. Self-defense starts before a confrontation so build confidence, assertiveness, and quick decision-making skills. Learning basic techniques such as breaking a grab, blocking an incoming strike, or creating space can make a significant difference. Practicing verbal de-escalation with clear and calm communication can help diffuse tension before it escalates into physical conflict.</p>
        </div>
      </section>

<section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Video className="text-red-600" />
          Educational Video
        </h2>
        <div className="flex justify-center overflow-x-auto">
          <div className="bg-gray-50 rounded-lg p-8 inline-block">
            <div className="relative group cursor-pointer" style={{width: '405px', height: '720px'}}>
              <img 
                src="/images/Screenshot 2025-06-07 at 6.13.11 PM.png"
                alt="Educational video thumbnail"
                className="w-full h-full object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Video size={32} className="text-gray-800" />
                </div>
              </div>
              <video 
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 hover:opacity-100 transition-opacity"
                controls
                preload="metadata"
              >
                <source src="/videos/Product review video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <br></br>
            <h3 className="font-semibold text-gray-800 mb-2 text-center text-xl">How to Use BraceForce</h3>
            <p className="text-gray-600 text-center">Click thumbnail to play video</p>
          </div>
        </div>
      </section>
    </div>
  );

  const EngineersPage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Engineers Behind the Scene</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {engineers.map((engineer) => (
          <div key={engineer.name} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <img 
                src={engineer.image} 
                alt={engineer.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{engineer.name}</h3>
              <p className="text-blue-600 font-semibold mb-1">Class of {engineer.graduationYear}</p>
              <p className="text-gray-600 mb-4">{engineer.major}</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail size={16} className="text-gray-500" />
                <a href={`mailto:${engineer.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                  {engineer.email}
                </a>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="text-sm text-gray-700"><strong>Fun Fact:</strong> {engineer.funFact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Special Thanks</h2>
        <p className="text-lg text-gray-700">
          We extend our heartfelt gratitude to <strong>Professor Zachary Berent</strong> and <strong>Professor Brendan O'Kelly </strong> 
          for their invaluable guidance, support, and mentorship throughout this project. Their expertise in Design Thinking and 
          Communication has been instrumental in bringing BraceForce to life.
        </p>
        <br></br>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Submitted by:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">

              Section 33, Team 1<br/>
              Design Thinking and Communication<br/>
              McCormick School of Engineering and Applied Science<br/>
              Northwestern University<br/>
              Evanston, IL 60208
            </p>
      </section>
    </div>
  );

  const ShowcasePage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Final Showcase</h1>
      
      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Final Presentation Gallery</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { src: "/images/problemandaudience.png", alt: "Problem and Audience" },
            { src: "/images/finaldesign.png", alt: "Final Design" },
            { src: "/images/majorfeatures.png", alt: "Major Features" },
            { src: "/images/performancetesting.png", alt: "Performance Testing" }
          ].map((img, i) => (
            <div key={i} className="relative group">
              <img 
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-contain bg-gray-100 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-xl flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Video className="text-red-600" />
          Project Videos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Product Demo Video", file: "Teaser video.mp4", thumbnail: "Screenshot 2025-06-07 at 5.54.42 PM.png", aspect: "h-48" }, // 16:9
            { title: "Fruit Ninja", file: "TikTok Fruit Ninja.mp4", thumbnail: "Screenshot 2025-06-07 at 6.21.14 PM.png", aspect: "h-[28rem]" }, // 9:16
            { title: "Percentages", file: "percentages.mp4", thumbnail: "Screenshot 2025-06-07 at 6.24.06 PM.png", aspect: "h-[28rem]" } // 9:16
          ].map((video, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6">
              <div className="relative group cursor-pointer">
                <img 
                  src={`/images/${video.thumbnail}`}
                  alt={`${video.title} thumbnail`}
                  className={`w-full ${video.aspect} object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Video size={24} className="text-gray-800" />
                  </div>
                </div>
                <video 
                  className={`absolute inset-0 w-full ${video.aspect} object-cover rounded-lg opacity-0 hover:opacity-100 transition-opacity`}
                  controls
                  preload="metadata"
                >
                  <source src={`/videos/${video.file}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-center">{video.title}</h3>
              <p className="text-sm text-gray-600 text-center">Click thumbnail to play video</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'project': return <ProjectPage />;
      case 'appendices': return <AppendicesPage />;
      case 'education': return <EducationPage />;
      case 'engineers': return <EngineersPage />;
      case 'showcase': return <ShowcasePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Shield className="text-blue-600" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                BraceForce
              </span>
            </div>
            <div className="flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      currentPage === item.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-blue-400" size={24} />
            <span className="text-xl font-bold">BraceForce</span>
          </div>
          <p className="text-gray-300 mb-2">
            Northwestern University | McCormick School of Engineering
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 BraceForce Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BraceForceWebsite;