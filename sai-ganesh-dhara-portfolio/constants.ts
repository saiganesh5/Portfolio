
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Sai Ganesh Dhara",
  title: "Associate Software Engineer",
  contact: {
    phone: "+91 9381103596",
    email: "saiganesh0813@gmail.com",
    linkedin: "https://linkedin.com/in/sai-ganesh-dhara",
    github: "https://github.com/saiganesh0813"
  },
  about: "I am a technology enthusiast with hands-on experience in Java, Spring Boot, REST APIs, and MySQL, along with a strong understanding of system design and application deployment. I focus on writing clean, efficient code and understanding how software behaves in real-world environments.",
  skills: [
    {
      name: "Languages",
      skills: ["JAVA", "PYTHON", "JAVASCRIPT"]
    },
    {
      name: "Backend",
      skills: ["SPRING BOOT", "REST APIS", "OAUTH", "MICROSERVICES", "NODE.JS"]
    },
    {
      name: "Frontend",
      skills: ["REACT", "HTML5", "CSS3", "BOOTSTRAP", "TAILWIND CSS"]
    },
    {
      name: "Cloud & Tools",
      skills: ["GIT", "GITHUB", "AWS", "KAFKA", "DOCKER", "CI/CD PIPELINES"]
    },
    {
      name: "Database",
      skills: ["MYSQL", "MONGODB", "POSTGRESQL"]
    },
    {
      name: "Data Analysis",
      skills: ["EDA", "TABLEAU", "PANDAS", "NUMPY"]
    }
  ],
  projects: [
    {
      title: "KeyPointHub – Centralized Knowledge Platform",
      tech: ["Java", "Spring Boot", "React", "MySQL", "JWT", "REST APIs"],
      githubUrl: "https://github.com/saiganesh5/key-point-hub",
      description: [
        "Developed a centralized platform for creating, organizing, and sharing concise key points for complex topics.",
        "Implemented secure user authentication and authorization using JWT (JSON Web Tokens).",
        "Built a responsive dashboard using React for intuitive content management and real-time search functionality.",
        "Designed a scalable database schema in MySQL to handle hierarchical data structures and relationships."
      ]
    },
    {
      title: "LifestyleMatcher – Smart Relocation Recommender",
      tech: ["Java", "Spring Boot", "MySQL", "JavaScript", "Bootstrap", "Chart.js", "Leaflet.js"],
      githubUrl: "https://github.com/saiganesh5/Life-Style-Matcher",
      description: [
        "Designed a web app to help users find ideal neighbourhoods based on lifestyle presets.",
        "Integrated Leaflet.js for interactive map views with live coordinate-based markers.",
        "Used Chart.js to display comparative score breakdowns for top matching areas.",
        "Developed MySQL-powered search and user authentication for personalized access."
      ]
    },
    {
      title: "Patient Treatment Classification",
      tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      githubUrl: "https://github.com/saiganesh5/patient-treatment-classification",
      description: [
        "Built a machine learning model to classify patient treatment types based on health features.",
        "Applied data cleaning and preprocessing techniques including missing value imputation.",
        "Trained multiple ML algorithms (Logistic Regression, Random Forest, SVM, Stacking Classifier).",
        "Achieved high prediction accuracy and supported data-driven healthcare decisions."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech – Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab",
      period: "Aug 2022 – Present",
      score: "CGPA: 6.54"
    },
    {
      degree: "Intermediate MPC",
      institution: "Sri Chaitanya Junior College, Vijayawada",
      period: "2019 – 2021"
    },
    {
      degree: "SSC 10th",
      institution: "Sri Chaitanya School, Anantapur",
      period: "2018 – 2019"
    }
  ],
  certifications: [
    {
      name: "Programming & Data Structures using Java",
      issuer: "Cipher Schools",
      date: "Jul 2024"
    },
    {
      name: "Data Science and Analytics",
      issuer: "LinkedIn",
      date: "Feb 2023"
    }
  ]
};
