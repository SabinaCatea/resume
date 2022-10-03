import "./css/left-side.scss";
import { TextComponent } from "./TextComponent";

export const LeftSide = function () {
  const text = {
    about: {
      title: "ABOUT ME",
      details: `Looking for a job that offers me the opportunity to discover the secrets of web development field and encourage my
      appetite for learning all that necessary for becoming a good web developer.`,
    },
    work: {
      title: "WORK EXPERIENCE",
      details: `
      <b>• Freelancer </b> 
      <br>
      <i>January 2021 - Present</i>
      <br>
      Creating web pages using HTML, CSS, Javascript and React
      You can find my projects here:
      <br>
      - https://github.com/SabinaCatea
      <br>
      - https://codepen.io/SabinaCatea/pens/public
   <br></br>
      <b>• ETL Developer Deloitte </b> 
      <br>
      <i>January 2022 - Present</i>
      <br>
      - responsible for designing new and optimizing existing data models;
      <br>
      - providing a solution for migrating data from multiple sources, filtering the records based on business and reference integrity rules and preparing the data for a new system;
      <br>
      - creating and maintaining new workflow as per the requirements;
      <br>
      - designing template mappings for each layer of migration and developing the mapping for each source;
      <br></br>
      <b>• Data Engineer -IBM </b> 
      <br>
      <i>December 2018 - January 2022</i>
      <br>
      - responsible with delivering production bug fixes and modifying the existing workflows based on the requirements set by the business analysts
      <br>
      - creating and maintaining new workflows for the intern projects
      <br>
      - responsible with analyzing the business requirements and proposing solutions to improve the existing applications
      <br>
      - responsible for automated deployments in Jenkins
      <br>
      - manually deployments in PuTTY
      <br>
- provide technical support and advice to users in ETL/ Informatica/ Data Integration
<br></br>
<b>• Student Program - Work and Travel </b> 
<br>
<i>June 2017 - October 2017</i>
<br>
This experience helped me to integrate in a new environment and to be a good team player. Also, this experience taught me to be independent, handling all the problems alone.
          
<br></br>
<b>• Practicum Student - Crystal System </b> 
<br>
<i>February 2017 - April 2017</i>
<br>
Developed a project in SAP BW.
    
`,
    },
    soft_skills: {
      title: "SOFT SKILLS",
      details: `Design Sense, Creativity, Adaptable, Cooperative, Fast Learner, Team Spirit, Curious`,
    },
    special_skills: {
      title: "TECHNICAL SKILLS",
      details: `HTML, CSS, JavaScript, React, SQL Server, SQL Oracle, MySQL, Apex, R, Python, Informatica Power Center, Tableau, Statistics, Unix, Jenkins, AWS, Git`,
    },
  };
  return (
    <section className="left-side">
      <p className="contact-details">
        Call +40787 699 742 or
        <br />
        Email cateasabina5@gmail.com
      </p>
      {Object.keys(text).map((key) => (
        <TextComponent
          key={key}
          title={text[key].title}
          details={text[key].details}
        ></TextComponent>
      ))}
    </section>
  );
};
