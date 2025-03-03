import React from 'react';

import './Exp.css';

const Exp = () => {
  return (
    <div className="experience-section-container">
      {/* Title */}
      <h1 className="experience-title">Professional Journey</h1>
      
      {/* Experience Section */}
      <div className="experience-section">
        {/* Experience 1 */}
        <div className="experience-item">
          <h2>Software Developer Intern</h2>
          <h3>Royal Bank of Canada (RBC)</h3>
          <p>Toronto, Canada</p>
          <p>January 2024 – August 2024</p>
          <ul>
            <li>Tech Stack: Angular, TypeScript, Java, Spring Boot, Node, Maven, Jenkins, Docker, Git, OCP4 (Container).</li>
            <li>Contributed to the migration of a Spring Boot-based application from Pivotal Cloud Foundry (PCF) to OpenShift Container Platform 4 (OCP4), improving scalability and resilience by 30%, while integrating Kafka and Elastic Search with various AD environments to enhance system performance.</li>
            <li>Managed Kubernetes pods and implemented Horizontal Pod Autoscaling and CronJob Scheduling, boosting resource utilization efficiency and application reliability by 85%.</li>
            <li>Enhanced application performance and scalability by implementing Cache as a Service using Armada and Dynatrace and integrating IVR systems with Omilia to improve customer interaction capabilities.</li>
            <li>Developed robust test cases using JUnit and Mockito, achieving over 55% code coverage on SonarQube and ensuring effective application monitoring with Log4J for improved reliability and quality assurance.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="experience-item">
          <h2>Lead Developer</h2>
          <h3>Tech Savi</h3>
          <p>Toronto, Canada</p>
          <p>February 2023 – October 2023</p>
          <ul>
            <li>Tech Stack: HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, Python, Azure, Git, JIRA, Confluence, PayPal.</li>
            <li>Designed and integrated RESTful APIs with Node.js and Express.js, enabling seamless communication between front-end and back-end services and ensuring scalable system architecture.</li>
            <li>Automated server provisioning using Ansible, reducing setup time by 50%, and implemented secure user authentication with role-based access control via Azure Active Directory for over 1,000 users.</li>
            <li>Streamlined development and deployment processes using GitHub Actions CI/CD, integrating Azure services for database, authentication, and hosting, achieving 99.9% uptime and scalability.</li>
          </ul>
        </div>

        {/* Experience 3 */}
        <div className="experience-item">
          <h2>Software Engineer Intern</h2>
          <h3>Frontline VR India Venture</h3>
          <p>Delhi, India</p>
          <p>May 2022 – December 2022</p>
          <ul>
            <li>Tech Stack: ReactJS, JavaScript, Node.js, MongoDB, Microservices Architecture.</li>
            <li>Spearheaded the development of a customer-facing platform using ReactJS and MongoDB, achieving rapid growth to 2,000 active users within 3 days of launch.</li>
            <li>Conducted rigorous testing using Jest, Postman, and Selenium, ensuring the reliability, functionality, and seamless integration of various components in the platform.</li>
            <li>Developed and deployed APIs to enhance integration capabilities and ensure seamless communication between services, improving system scalability by 40%.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exp;
