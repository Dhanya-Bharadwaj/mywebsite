import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Blog.css';
import quadcopter1 from '../assets/quadcopter1.webp';
import quadcopter2 from '../assets/quadcopter2.webp';

// Blog posts data
const blogPosts = [
  {
    id: 'esp32-quadcopter',
    title: 'Building an ESP32-Based Quadcopter Flight Controller',
    excerpt: 'A comprehensive guide to designing a custom quadcopter flight controller using the ESP32 microcontroller, covering sensor fusion, PID control, and motor management.',
    date: 'December 2024',
    category: 'Hardware & Embedded Systems',
    featured: true
  },
  /*
    id: 'machine-learning-basics',
    title: 'Introduction to Machine Learning Fundamentals',
    excerpt: 'Understanding the core concepts of machine learning, from supervised and unsupervised learning to neural networks and deep learning applications.',
    date: 'November 2024',
    category: 'Machine Learning',
    readTime: '12 min read'
  },
  {
    id: 'web-development-trends',
    title: 'Modern Web Development Trends in 2024',
    excerpt: 'Exploring the latest trends in web development including React 18, Next.js 14, and emerging technologies that are shaping the future of the web.',
    date: 'October 2024',
    category: 'Web Development',
    readTime: '6 min read'
  },
  {
    id: 'python-automation',
    title: 'Automating Daily Tasks with Python',
    excerpt: 'Practical examples of how to use Python for automation, from file management to web scraping and data processing workflows.',
    date: 'September 2024',
    category: 'Programming',
    readTime: '10 min read'
  }*/
  
];

const BlogList = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  const openBlogPost = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="blog-page">
      <nav className="blog-navbar">
        <div className="container">
          <button onClick={goBack} className="back-btn">
            ← Back to Portfolio
          </button>
        </div>
      </nav>

      <div className="blog-container">
        <header className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">Thoughts, tutorials, and insights from my journey in technology</p>
        </header>

        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card" onClick={() => openBlogPost(post.id)}>
              {post.featured && <div className="featured-badge">Featured</div>}
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-category">{post.category}</span>
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-card-read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="read-more">Read More →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="blog-page">
        <nav className="blog-navbar">
          <div className="container">
            <button onClick={() => navigate('/blog')} className="back-btn">
              ← Back to Blog
            </button>
          </div>
        </nav>
        <div className="blog-container">
          <h1>Blog post not found</h1>
        </div>
      </div>
    );
  }

  const goBack = () => {
    navigate('/blog');
  };

  const openImageModal = (imageSrc, altText) => {
    setSelectedImage({ src: imageSrc, alt: altText });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // ESP32 Quadcopter content
  const esp32Content = (
    <div className="blog-content">
      <section className="blog-section">
        <h2>Introduction</h2>
        <p>
          Welcome to my journey of designing a custom quadcopter flight controller using the ESP32 microcontroller! 
          This project leverages the ESP32's capabilities to process sensor data, handle iBus communication, and 
          control motors via ESCs, delivering stable flight performance. Below, I'll provide a technical overview 
          of the system, its components, and how it all comes together.
        </p>
      </section>

      <section className="blog-section">
        <h2>System Overview</h2>
        <p>
          This flight controller is built around the ESP32, a powerful and versatile microcontroller with built-in 
          PWM capabilities and I2C for sensor communication. It integrates a MPU-6050 sensor for motion tracking, 
          processes iBus signals from a remote transmitter, and drives four ESCs to control quadcopter motors. 
          The goal is to achieve stable flight by balancing roll, pitch, and yaw through a combination of sensor 
          fusion and PID control.
        </p>
      </section>

      <section className="blog-section">
        <h2>Key Components</h2>
        <ul className="component-list">
          <li>
            <strong>ESP32 Microcontroller:</strong> The brain of the operation, handling sensor data, receiver input, 
            and motor control with high-speed PWM signals at 400 Hz.
          </li>
          <li>
            <strong>MPU-6050 Sensor:</strong> Combines a 3-axis accelerometer and 3-axis gyroscope to measure 
            acceleration and rotation rates, critical for determining the quadcopter's orientation.
          </li>
          <li>
            <strong>iBus Protocol:</strong> A serial communication protocol (115200 baud) that receives pilot inputs 
            (roll, pitch, throttle, yaw) from the transmitter for real-time control.
          </li>
          <li>
            <strong>ESCs and Motors:</strong> Four electronic speed controllers (ESCs) drive the motors, with pulse 
            widths ranging from 1000 µs (idle) to 2000 µs (full throttle).
          </li>
          <li>
            <strong>Software:</strong> Custom C++ code running on the ESP32, implementing sensor calibration, 
            a Kalman filter, and cascaded PID loops.
          </li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Hardware Assembly</h2>
        <p>
          The quadcopter frame and electronics assembly is a critical part of the project. Here's how the 
          ESP32 flight controller and components are integrated:
        </p>
        
        <div className="blog-image-container">
          <img 
            src={quadcopter1} 
            alt="ESP32 Flight Controller Assembly" 
            className="blog-image" 
            onClick={() => openImageModal(quadcopter1, "ESP32 Flight Controller Assembly")}
          />
          <p className="image-caption">ESP32 Flight Controller Assembly</p>
        </div>
      </section>

      <section className="blog-section">
        <h2>How It Works</h2>
        <p>
          The flight controller operates in a continuous 8ms loop (125 Hz) to ensure responsive control. 
          Here's the high-level process:
        </p>

        <h3>Sensor Data Acquisition</h3>
        <ul>
          <li>The MPU-6050 communicates via I2C to provide raw accelerometer and gyroscope data.</li>
          <li>Acceleration (AccX, AccY, AccZ) is used to calculate roll and pitch angles, while gyro rates 
          (RateRoll, RatePitch, RateYaw) track rotational speed.</li>
          <li>A calibration routine averages 2000 samples at startup to remove gyro drift.</li>
        </ul>

        <h3>Sensor Fusion with Kalman Filter</h3>
        <ul>
          <li>A 1D Kalman filter combines noisy accelerometer data with gyro rates to estimate accurate 
          roll and pitch angles, reducing drift and improving stability.</li>
          <li>The filter updates every 4ms, balancing measurement noise and process uncertainty.</li>
        </ul>

        <h3>Pilot Input via iBus</h3>
        <ul>
          <li>The iBus protocol delivers pilot commands (roll, pitch, throttle, yaw) through a serial 
          connection (RX pin 16).</li>
          <li>Inputs are constrained between 1000 and 2000 µs, with a failsafe mechanism that cuts 
          throttle to 1030 µs if no signal is detected for 500ms.</li>
        </ul>

        <h3>PID Control</h3>
        <ul>
          <li>A cascaded PID approach is used: an outer loop controls angles (roll, pitch) to set desired 
          rotation rates, and an inner loop adjusts motor speeds based on rate errors.</li>
          <li>Tuned PID gains (e.g., PAngleRoll = 2, IRateRoll = 2.1, DRateRoll = 0.0088) ensure smooth 
          and responsive flight.</li>
          <li>Outputs are limited to ±400 to prevent excessive corrections.</li>
        </ul>

        <h3>Motor Control</h3>
        <ul>
          <li>Motor inputs are calculated by combining throttle, roll, pitch, and yaw contributions, 
          scaled by 1.024 for fine adjustment.</li>
          <li>Values are capped at 1999 µs and idle at 1180 µs, with a cutoff at 1030 µs for safety.</li>
          <li>ESCs receive PWM signals to drive the motors: front-right (CW), rear-right (CCW), 
          rear-left (CW), and front-left (CCW).</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Flight Testing</h2>
        <p>
          After assembly and initial testing, the quadcopter demonstrates stable flight characteristics. 
          The ESP32-based flight controller successfully maintains balance and responds to pilot inputs:
        </p>
        
        <div className="blog-image-container">
          <img 
            src={quadcopter2} 
            alt="Quadcopter in Flight" 
            className="blog-image" 
            onClick={() => openImageModal(quadcopter2, "Quadcopter in Action")}
          />
          <p className="image-caption">Quadcopter in Action</p>
        </div>
      </section>

      <section className="blog-section">
        <h2>Safety Features</h2>
        <ul>
          <li><strong>Failsafe:</strong> If the iBus signal is lost for over 500ms, motors drop to a safe 
          throttle level and PID terms reset.</li>
          <li><strong>Throttle Limits:</strong> Prevents excessive power and ensures a minimum idle speed 
          for stability.</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Challenges and Tuning</h2>
        <p>
          Tuning the PID gains was critical—too high, and the quadcopter oscillates; too low, and it's sluggish. 
          The Kalman filter parameters also required adjustment to balance sensor noise and responsiveness. 
          The 400 Hz PWM frequency matches typical ESC requirements, and a 2-second delay at startup allows 
          ESCs to arm safely.
        </p>
      </section>

      <section className="blog-section">
        <h2>Conclusion</h2>
        <p>
          This ESP32-based flight controller demonstrates how a compact microcontroller can handle complex 
          tasks like sensor fusion, PID control, and motor management. It's a solid foundation for a quadcopter, 
          offering stability and responsiveness. Future improvements could include adding altitude control, 
          GPS integration, or fine-tuning for specific flight modes. Stay tuned for more updates as I refine 
          this project!
        </p>
      </section>
    </div>
  );

  // Placeholder content for other blog posts
  const placeholderContent = (
    <div className="blog-content">
      <section className="blog-section">
        <h2>Coming Soon</h2>
        <p>
          This blog post is currently being written. Check back soon for the full content!
        </p>
        <p>
          In the meantime, feel free to explore my other blog posts or check out my projects.
        </p>
      </section>
    </div>
  );

  return (
    <div className="blog-page">
      <nav className="blog-navbar">
        <div className="container">
          <button onClick={goBack} className="back-btn">
            ← Back to Blog
          </button>
        </div>
      </nav>

      <div className="blog-container">
        <article className="blog-post">
          <header className="blog-header">
            <h1 className="blog-title">{post.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-category">{post.category}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
          </header>

          {postId === 'esp32-quadcopter' ? esp32Content : placeholderContent}
        </article>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className={`image-modal ${selectedImage ? 'active' : ''}`} onClick={closeImageModal}>
          <button className="modal-close" onClick={closeImageModal}>×</button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

const Blog = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  
  if (postId) {
    return <BlogPost />;
  }
  
  return <BlogList />;
};

export default Blog; 