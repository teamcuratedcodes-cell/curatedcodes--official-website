import './HomePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './Contact.jsx';
import location from '../images/loc.jpg';
import fusion from '../images/fc.jpg';
import digital from '../images/dg.jpg';
import lawful from '../images/lawful.png';
import osint from '../images/os.webp';
import bgImage from '../images/image10.webp';
import circleImage from '../images/CC.webp';
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import newBanner from "../images/newbanner.png";


const HomePage = () => {
  const industries = [
    { name: "Law Enforcement", color: "#000000", textColor: "#fff" },
    { name: "Telecom", color: "#000000", textColor: "#fff" },
    { name: "Defence", color: "#000000", textColor: "#fff" },
    { name: "National Security", color: "#141010ff", textColor: "#fff" },
  ];
  const services = [
    {
      title: "Open Source Intelligence",
      description:
        "We provide OSINT tools to gather public data securely from platforms like social media, news, and the dark web. Our platform uses sentiment analysis, NLP, and real-time alerts to support investigations and threat detection.",
      features: [
        "Social media monitoring",
        "Sentiment & keyword analysis",
        "Custom dashboards",
      ],
      icon: osint,

    },
    {
      title: "Lawful Interception",
      description:
        "Our solution enables agencies to monitor communications legally in real-time with encrypted storage, detailed logs, and support for VoIP, mobile, and messaging apps.",
      features: [
        "Real-time interception",
        "Secure data delivery",
        "Compliance with regulations",
      ],
      icon: lawful,
    },
    {
      title: "Location-Based Services",
      description:
        "Track people, vehicles, and assets with real-time maps, geo-fencing, and alert systems. Integrates GPS, satellite, and mobile signal data for reliable insights.",
      features: [
        "Geo-fencing & alerts",
        "Live tracking integration",
        "Mapping & route analysis",
      ],
      icon: location,
    },
    {
      title: "Fusion Centre",
      description:
        "Our platform merges intelligence from different sources into one dashboard, enabling real-time threat analysis, link detection, and secure data sharing across departments.",
      features: [
        "Data fusion architecture",
        "Real-time threat feeds",
        "Customizable access controls",
      ],
      icon: fusion,
    },
    {
      title: "Digital Forensics",
      description:
        "Recover and analyze digital evidence from phones, hard drives, and cloud platforms. Ensure secure handling with full chain-of-custody support for legal use.",
      features: [
        "Disk & mobile forensics",
        "Chain-of-custody logging",
        "Data recovery tools",
      ],
      icon: digital,
    },
  ];

  const basics = [
    {
      title: "Proactive Threat Monitoring",
      description:
        "Implementing systems to detect early signs of criminal activity across digital and physical spaces.",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Leveraging data to support informed, evidence-based decisions in investigations and operations.",
    },
    {
      title: "Scalable & Adaptive Solutions",
      description:
        "Designing solutions that evolve with law enforcement needs and adapt to emerging challenges.",
    },
    {
      title: "Collaboration-Centric Development",
      description:
        "Building secure platforms that promote real-time, inter-agency communication and teamwork.",
    },
    {
      title: "Technology Integration into Workflows",
      description:
        "Embedding IT solutions into daily law enforcement processes without disrupting critical operations.",
    },
    {
      title: "Automation of Investigative Tasks",
      description:
        "Identifying and automating repetitive tasks to enhance focus on complex investigative work.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

  return (
    <>
  <section className="hero-banner">

  <div className="hero-overlay">

    <motion.h1
      className="hero-heading"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Operational Intelligence Starts Here
    </motion.h1>

    <div className="hero-image-wrapper">

      <img
        src={newBanner}
        alt="Hero"
        className="hero-main-image"
      />

      <img
        src={circleImage}
        alt="Logo"
        className="center-logo"
      />

    </div>

    <h2 className="heros-heading">
      AI-powered Intelligence Solutions for Every Critical Situation
    </h2>

  </div>

</section>
      <section>
        <div className="basics-section">
       <motion.h2
  className="section-title"
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Approaches we take to empower law enforcement
</motion.h2>
         <motion.div
  className="basics-grid"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
  {basics.map((item, index) => (
    <motion.div
      key={index}
      className="basics-item"
      variants={itemVariants}
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="basics-title">{item.title}</h3>
      <p className="basics-description">{item.description}</p>
    </motion.div>
  ))}
</motion.div>
</div>
</section>

<section>
  <div className="industries-section">
    <h2 className="industries-title">Industries we serve</h2>

    <div className="industries-grid">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="industry-circle"
          style={{
            backgroundColor: industry.color,
            color: industry.textColor,
          }}
        >
          {industry.name}
        </div>
      ))}
    </div>
          <div className="industries-slider">
            <Slider {...settings}>
              {industries.map((industry, index) => (
                <div key={index}>
                  <div
                    className="industry-circle"
                    style={{
                      backgroundColor: industry.color,
                      color: industry.textColor,
                      margin: "0 auto",
                    }}
                  >
                    {industry.name}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="service-header-wrapper">
          <h2 className="section-header">Products we offer</h2>
        </div>
        {services.map((service, index) => (
          <div
            className={`service-row ${index % 2 === 1 ? 'reverse bg-grey' : 'bg-white'}`}
            key={index}
          >
    <div className="service-inner">

  <motion.div
    className="service-image-container"
    initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="icon-square-box">
      <img src={service.icon} alt={service.title} />
    </div>
  </motion.div>

  <motion.div
    className="service-content"
    initial={{ opacity: 0, x: index % 2 === 0 ? 120 : -120 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h3>{service.title}</h3>

    <p>{service.description}</p>

    <ul>
      {service.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  </motion.div>

</div>
          </div>
        ))}
      </section>    

     <section className="about-section">

  <motion.h2
    className="about-title"
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    About us
  </motion.h2>

  <motion.div
    className="about-content"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >

    <motion.div
      className="about-box"
      variants={itemVariants}
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
    >
      <h3>Company</h3>
      <p>
        Curated Codes is a digital engineering firm empowering law
        enforcement agencies with AI-driven tools and secure platforms.
        We help accelerate investigations, enhance intelligence gathering,
        and support national security through data-driven insights and
        real-time collaboration.
      </p>
    </motion.div>

    <motion.div
      className="about-box"
      variants={itemVariants}
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
    >
      <h3>People</h3>
      <p>
        We are a team of industry experts with deep, cross-domain
        experience in cutting-edge technologies. Every solution we build
        is precisely curated to meet the unique operational and security
        needs of law enforcement and intelligence agencies.
      </p>
    </motion.div>

  </motion.div>

</section>
      <Contact />
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.facebook.com/curatedcodes" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/company/curated-codes-technologies/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://x.com/Curatedcodes_in" aria-label="X"><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UC-g0Fa_E4bhwQF9SJ0-dDlg" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 Curated Codes - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
};
export default HomePage;
