/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Wath",
  title: "Hi all, I'm Aditya",
  subTitle: emoji(
    "A passionate Machine Learning Engineer 🚀 who loves to Build and Engineer products."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QIzqm7jw8jnQ0DYIT_OXMF1azcbiB1hr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aditya6122",
  linkedin: "https://www.linkedin.com/in/aditya-wath-478698210/",
  gmail: "adityawath6122@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@akwmayur",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MACHINE LEARNING ENGINEER WHO LOVES TO DEVELOP ML APPLICATIONS AND EXPLORE EVERY RESEARCH IN THE FIELD OF AI",
  skills: [
    emoji("⚡ Develop customized Deep Learning model architectures for given particular applications"),
    emoji(
      "⚡ Build user friendly ML applications for different real world problems"
    ),
    emoji(
      "⚡ Research in different ML areas like Computer Vision, Natural Language Processing and their MultiModal usecase scenarios"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fa-solid fa-c"
    }
    ,
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology, Kottayam",
      logo: require("./assets/images/iiitkottayam_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "December 2020 - June 2024",
      desc: "CGPA-8.00.",
      descBullets: [
        "Courses:Machine Learning, Artificial Intelligence, Data Structures, Computer Networks, Operating Systems"
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Natural Language Processing", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Artificial Intelligence Intern",
      company: "Techolution",
      companylogo: require("./assets/images/techolution_logo.png"),
      date: "August 2023 – Present",
      desc: "Tech: Python, LangChain, Neo4J Graph Database",
      descBullets: [
        "Development of Chatbots for different business usecases using LLMs.",
        "Utilized Graph Databases with different kind of RAG techiques for achieving better accuracy.",
        "Design and Development innovative and intuitive Architecture and Workflows for llm based chatbots.",
        "Research and Development of Evaluation Metrics for defining the integrity of chatbots.",
        "Worked on Prompt Engineering for the refinement of generated responses by GPT-4.",
        "Worked on Internal AIfication of Organisation."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Harman International",
      companylogo: require("./assets/images/harman_logo.png"),
      date: "August 2022 – May 2023 (9 months)",
      desc: "Tech: Pytorch, NLTK, RestAPI, Pandas, Scikit-learn",
      descBullets: [
        "Performed extensive Data Cleaning such as Outlier Detection, worked with Data Imbalance, and implemented various Feature Engineering techniques to make the data more meaningful.",
        "Built a Custom Vectorizer and utilized BERT-base for feature extraction and achieved a classification Accuracy of 88% on 6 major classes.",
        "Performed experimentation with Word2Vec, Glove and LSTMs. Model development using traditional ML models like XGboost, Gradient Boosting on top of statistical Data Preprocessing techniques like Bag of Words, TF-IDF which gave around an 83 – 85% Accuracy for multiple project data.",
        "Model Integration with ELVIS server via REST API and automated classification process using cron jobs and deployment on AWS server.",
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "1st Prize Winner in Reflections Machine Learning Hackathon in IR4.0",
      subtitle:
        "Accurate failure forecasting in a challenge involving imbalanced dataset and unidentified features achieving F1-score of 100",
      image: require("./assets/images/reflections machine learning hackathon.jpeg"),
      imageAlt: "Reflections Machine Learning Hackathon Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1CXTUgWQ-gXaKjaFwmRDnRW9NtSQVpjrq/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Machine Learning Data Lifecycle in Production",
      subtitle:
        "Responsible data collection, feature engineering with TensorFlow Extended, ML metadata utilization.",
      image: require("./assets/images/Coursera-Education-Logo.jpg"),
      imageAlt: "Machine Learning Data Lifecycle in Production",
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/verify/Y3F9ZQR56U9N"
        }
      ]
    },
    {
      title: "Machine Learning Modeling Pipelines in Production",
      subtitle:
        "Optimize modeling resources, enhance fairness, explainability, and address inference bottlenecks.",
      image: require("./assets/images/Coursera-Education-Logo.jpg"),
      imageAlt: "Machine Learning Modeling Pipelines in Production",
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/verify/235DX2C5CT2V"
        }
      ]
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle:
      "Enhance deep neural networks through hyperparameter tuning, regularization, and optimization.",
      image: require("./assets/images/Coursera-Education-Logo.jpg"),
      imageAlt: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/verify/MDRM3VLAF73A"
        }
      ]
    },
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Research and Publications",
  subtitle:
    "I love to explore different research applications in AI.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1qQYel4jBiP8KiBjovXM-jrn8IWEE-rj6/view?usp=sharing",
      title: "Security Landscape of Anomaly Based Detection Mechanisms in Edge Environments.",
      description:
        "Areas : Deep Learning, Anomaly Detection, Graph Neural Networks, Network Intrusion Detection System"
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7620960119",
  email_address: "adityawath6122@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "AdityaWath2", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
