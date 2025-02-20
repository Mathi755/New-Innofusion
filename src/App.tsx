import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Coordinator {
  name: string;
  phone: string;
  image: string;
  link : string;
}

interface Convenor {
  name: string;
  phone: string;
  image: string;
  link : string;
}


interface coConvenor {
  name: string;
  phone: string;
  image: string;
  link : string;
}

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-02-22T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const Convenors: Convenor[] = [
  {
    name: "Dr. Kavitha V",
    phone: "kavithav2@srmist.edu.in",
    image: "https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/kavitha.jpg",
    link : "https://www.srmist.edu.in/faculty/dr-v-kavitha/"
  }
    
];

const coConvenors: coConvenor[] = [
  { 
    name: "Dr. T. Karthick", 
    phone: "karthict@srmist.edu.in", 
    image: "https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/karthik.jpg",
    link: "https://www.linkedin.com/in/dr-karthick-t-41b77a34/" 
  },
  { 
    name: "Dr.J.Jeba Sonia", 
    phone: "jebas@srmist.edu.in", 
    image: "https://raw.githubusercontent.com/Mathi755/New-Innofusion/main/src/assets/jeba.jpg",
    link: "https://www.linkedin.com/in/dr-jeba-sonia-669855184/" 
  },
  { 
    name: "Dr. Jayaraj R", 
    phone: "jayarajr1@srmist.edu.in", 
    image: "https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/jeyaraj.jpg",
    link: "https://www.srmist.edu.in/faculty/dr-r-jayaraj/" 
  },
  { 
    name: "Dr. R.Anita Jasmine", 
    phone: "anitajar1@srmist.edu.in", 
    image: "https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/anita.jpg",
    link: "https://www.linkedin.com/in/anita-jasmine-r-37264472/" 
  }
];




  
const coordinators: Coordinator[] = [
  {
    name: "Riduvarshini M",
    phone: "90423 98725",
    image: "https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/Ridu2.jpg",
    link: "https://www.linkedin.com/in/riduvarshini-m-956b19337/"
  },
  {
    name: "Gomathi Nayagam S R",
    phone: "8610016966",
    image: "https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/Mathi.jpg",
    link: "https://www.linkedin.com/in/gomathi--nayagam/"
  },
  {
    name: "Guru Prasaath D",
    phone: "63699 51331",
    image: "https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/GP2.jpg",
    link: "https://www.linkedin.com/in/guru-prasaath-d-3b16722b6/"
  },
  {
    name: "Jonesh Linso",
    phone: "93456 68119",
    image: "https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/jonesh.jpg",
    link: "https://www.linkedin.com/in/jonesh-linso-361a69288/"
  }
];

    



  const problemStatements: string[] = [
    "Developing an advanced early warning system for a variety of natural disasters",
    "Enhancing CAPTCHA security using artificial intelligence models for improved bot resistance",
    "Implementing AI-driven chatbots or generative solutions for personalized assistance to elderly individuals",
    "Using IoT technology for real-time health monitoring of electric vehicles",
    "Managing railway wagons efficiently with smart IoT-based systems",
    "Identifying end users involved in social media scams through blockchain solutions",
    "Utilizing technology to track and monitor the movements of ex-convicts effectively",
    "Voice-Controlled Gaming Tools for Enhanced Learning in the Skill Ecosystem",
    "Smart Automation",
    "Smart education",
    "Smart Irrigation",
    "Precision Agriculture",
    "Smart Electricity",
    "Open problem statements in SDG Goals"
  ];

  

  return (
    <div className="min-h-screen bg-yellow-400">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="ml-auto flex space-x-4">
      <a href="https://dsbsstudentassociation.vercel.app/" className="text-lg font-bold">Home</a>
      
    </div>
  </div>
</nav>
      
      {/* Header with Logos */}
     <div className="py-0 flex justify-center">
  <div className="bg-white p-2 shadow-lg inline-block">
    <img
      src="https://raw.githubusercontent.com/Mathi755/InnoFuison/main/src/assets/header.png"
      alt="SRM Logo"
      className="w-full h-auto"
    />
  </div>
</div>





      {/* Hero Section with Timer */}
<div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
  <div className="max-w-full mx-auto py-8 px-8 sm:max-w-screen-xl sm:px-12 lg:px-16 text-center">  
<h5 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
  SRM INSTITUTE OF SCIENCE AND TECHNOLOGY <br />
  SCHOOL OF COMPUTING <br />
  DEPARTMENT OF DATA SCIENCE AND BUSINESS SYSTEMS
</h5>
<p className="mt-6 text-xl max-w-2xl mx-auto">
      In association with 
    </p>
  <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ">
  DSBS STUDENT ASSOCIATION
</h5>


    <br/>
<div className="flex flex-col items-center justify-center h-[10vh] py-4 px-4 text-center gap-y-2">

  <h1 className="title-font text-2xl font-extrabold tracking-widest sm:text-6xl lg:text-8xl leading-tight">     
    <span className="text-yellow-400">INNOFUSION </span>       
    <span className="text-white">'</span>     
    <span className="text-red-600">25</span>   
  </h1> 
</div>

    <div className="mt-8 grid grid-cols-1 gap-4 max-w-2xl mx-auto">
  <p className="font-bold">Registration ends by</p>
</div>


    {/* Countdown Timer */}
    {/* Countdown Timer */}
<div className="mt-12 grid grid-cols-4 gap-4 max-w-2xl mx-auto">
  
  <div className="bg-blue-800 p-4 rounded-lg">
    <div className="text-4xl sm:text-2xl font-bold">{timeLeft.days}</div>
    <div className="text-sm sm:text-xs">Days</div>
  </div>
  <div className="bg-blue-800 p-4 rounded-lg">
    <div className="text-4xl sm:text-2xl font-bold">{timeLeft.hours}</div>
    <div className="text-sm sm:text-xs">Hours</div>
  </div>
  <div className="bg-blue-800 p-4 rounded-lg">
    <div className="text-4xl sm:text-2xl font-bold">{timeLeft.minutes}</div>
    <div className="text-sm sm:text-xs">Minutes</div>
  </div>
  <div className="bg-blue-800 p-4 rounded-lg">
    <div className="text-4xl sm:text-2xl font-bold">{timeLeft.seconds}</div>
    <div className="text-sm sm:text-xs">Seconds</div>
  </div>
</div>



    <div className="mt-8 flex justify-center space-x-8">
      <div className="text-center">
        <p className="text-4xl font-bold">February</p>
        <p className="text-2xl">24th, 2025</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">Venue</p>
        <p className="text-2xl">UB - 704,705</p>
      </div>
    </div>

   
     {/* Registration Section */}
     

        <div className="text-center mb-0">
       
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSffXFC6idN8cEcx-KoEj4vJgkOvKLA5PRc2ghzpyxd6sAFMDA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Register Now
          </a>
          
        </div>

      
  </div>
</div>


      {/* Event Poster */}
 {/*     <div className="max-w-4xl mx-auto py-16 px-4">
       <img
  src="https://github.com/Mathi755/InnoFuison/raw/main/src/assets/2.png"
  alt="INNOFUSION '25 Poster"
  className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
/>


      </div>
 */}
      {/* Objective Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 bg-white rounded-lg shadow-lg my-16">
        <h2 className="title-font text-3xl font-extrabold text-blue-900 text-center mb-8">
          Objective
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          To foster innovation and creativity in Artificial Intelligence among Engineering
          students by solving real-world problems within a competitive yet collaborative
          environment.
        </p>
      </div>

      {/* Problem Statements */}
<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div className="text-center">
    <h2 className="title-font text-4xl font-extrabold tracking-tight mb-8">
      Problem Statements
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {problemStatements.map((problem, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-blue-500 cursor-pointer"
        >
          <p className="text-lg text-gray-800">{problem}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Rules and Guidelines */}
      <div className="max-w-7xl mx-auto py-16 px-4 bg-white rounded-lg shadow-lg my-16">
        <h2 className="title-font text-3xl font-extrabold text-blue-900 text-center mb-8">
          Rules and Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Team Composition</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Each team can have 2 to 4 members</li>
              <li>All team members must be enrolled in an UG or PG engineering program</li>
              <li>Interdisciplinary teams are encouraged, but not mandatory</li>
              <li>Teams must register by 9:00 AM on the event date</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Judging Criteria</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Innovation and Creativity: Originality of the solution</li>
              <li>Technical Complexity: Difficulty of the problem solved</li>
              <li>Impact: Potential impact of the solution on real-world problems</li>
              <li>Presentation: Clarity and effectiveness of the presentation</li>
              <li>Code Quality: Readability, documentation, and adherence to coding standards</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="title-font text-3xl font-bold text-center mb-8">Prizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">I PRIZE</h3>
              <p className="text-3xl font-bold text-yellow-400">₹10,000</p>
            </div>
            <div className="text-center p-6 bg-blue-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">II PRIZE</h3>
              <p className="text-3xl font-bold text-yellow-400">₹7,000</p>
            </div>
            <div className="text-center p-6 bg-blue-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">III PRIZE</h3>
              <p className="text-3xl font-bold text-yellow-400">₹5,000</p>
            </div>
          </div>
        </div>
      </div>

{/* Convenors */}
<div className="max-w-7xl mx-auto py-16 px-4 flex flex-col items-center">
  <h2 className="title-font text-3xl font-bold text-center text-blue-900 mb-12">
    Convenor
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8 justify-center">
    {Convenors.map((Convenor, index) => (
      <div key={index} className="text-center group flex flex-col items-center">
        <a href="https://www.srmist.edu.in/faculty/dr-v-kavitha/" target="_blank" rel="noopener noreferrer">
          <div className="w-32 h-32 rounded-full mb-4 overflow-hidden transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-2xl">
            <img
              src={Convenor.image}
              alt={Convenor.name}
              className="w-full h-full object-cover"
            />
          </div>
        </a>
        <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">
          {Convenor.name}
        </h3>
        <p className="text-gray-600">{Convenor.phone}</p>
      </div>
    ))}
  </div>
</div>

{/* Co-Convenors */}
<div className="max-w-7xl mx-auto py-16 px-4 flex flex-col items-center">
  <h2 className="title-font text-3xl font-bold text-center text-blue-900 mb-12">
    Co-Convenors
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
    {coConvenors.map((coConvenor, index) => (
      <div key={index} className="text-center group flex flex-col items-center">
        <a href={coConvenor.link} target="_blank" rel="noopener noreferrer">
          <div className="w-32 h-32 rounded-full mb-4 overflow-hidden transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-2xl">
            <img
              src={coConvenor.image}
              alt={coConvenor.name}
              className="w-full h-full object-cover"
            />
          </div>
        </a>
        <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">
          {coConvenor.name}
        </h3>
        <p className="text-gray-600">{coConvenor.phone}</p>
      </div>
    ))}
  </div>
</div>



      {/* Event Coordinators */}
<div id="Contact" className="max-w-7xl mx-auto py-16 px-4">
  <h2 className="title-font text-3xl font-bold text-center text-blue-900 mb-12">
    Event Coordinators
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {coordinators.map((coordinator, index) => (
      <div key={index} className="text-center group">
        <a href={coordinator.link} target="_blank" rel="noopener noreferrer">
          <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-2xl">
            <img
              src={coordinator.image}
              alt={coordinator.name}
              className="w-full h-full object-cover"
            />
          </div>
        </a>
        <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">
          {coordinator.name}
        </h3>
        <p className="text-gray-600">{coordinator.phone}</p>
      </div>
    ))}
  </div>
</div>

      
{/* Registration Section */}
<div id="register" className="max-w-sm mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
  <div className="text-center mb-3">
    <h2 className="title-font text-3xl font-extrabold text-blue-900 sm:text-4xl">
      Register Now
    </h2>
    <p className="mt-4 text-sm sm:text-lg text-gray-600 mb-6">
      Register your team for INNOFUSION &apos;25
    </p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSffXFC6idN8cEcx-KoEj4vJgkOvKLA5PRc2ghzpyxd6sAFMDA/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
    >
      Register Now
    </a>
  </div>
</div>





      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">Department of Data Science and Business Systems</p>
            <p className="text-sm">SRM Institute of Science and Technology</p>
            <p className="mt-4 text-gray-400">
              © 2025 DSBS Student Association. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
