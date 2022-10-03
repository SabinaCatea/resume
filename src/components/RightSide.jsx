import avatar from "../assets/avatar.jpg";
import "./css/right-side.scss";
import { TextComponent } from "./TextComponent";
import { RatingLevel } from "./RatingLevel";

export const RightSide = function () {
  const skills = [
    {
      name: "HTML",
      rate: 8,
    },
    {
      name: "CSS",
      rate: 9,
    },
    {
      name: "JS (ES6)",
      rate: 6,
    },
    {
      name: "REACT",
      rate: 6,
    },
    {
      name: "VUE.JS",
      rate: 2,
    },
    {
      name: "SQL",
      rate: 8,
    },
    {
      name: "Tableau",
      rate: 5,
    },
    {
      name: "AWS",
      rate: 5,
    }
  ];
const sections = {
  educations:{
    title:'EDUCATION',
    details: `<b>•	The Bucharest University of Economic Studies</b><br>
    The Faculty of Economic Cybernetics, Statistics and Informatics:
    <i>Master’s Degree: Databases - Business Support</i><br>
    <b>•	The Bucharest University of Economic Studies</b><br>
    The Faculty of Economic Cybernetics, Statistics and Informatics:
    <i>Bachelor’s Degree: Economic Cybernetics</i><br>`
  },
  current_projects:{
    title:'CERTIFICATIONS',
    details: `• AWS Certified Cloud Practitioner
    <br>
    • Microsoft Certified: Azure Data Fundamentals`
  },
  personal_projects:{
    title:'COURSES',
    details: `• Database Design and Database Programming with SQL(Oracle)
    <br>
    • Udemy Course (The Complete JavaScript Course 2021: From Zero to Expert!)
    <br>
    • Udemy Course (React – The complete Guide)
    <br>
    • SAP ABAP (Crystal System)
    <br>
    • IBM Cognos BI
    <br>
    • Tableau 365 Data Science
    <br>
    • Power BI 365 Data Science
    <br>
    • SQL 365 Data Science`
  },
}
  return (
    <section className="right-side">
      <header>
        <figure>
          <img src={avatar} alt="my profile pic" />
        </figure>
        <h1>
          SABINA
          <br />
          <b>CATEA</b>
        </h1>
        <h2>frontend developer</h2>
      </header>
      <TextComponent index='01' title="SKILLS">
        {skills.map(({ name, rate }) => (
          <RatingLevel key = {name}
          name={name} rate={rate} />
        ))}
      </TextComponent>
      {
        Object.keys(sections).map((key,index) => (
          <TextComponent index={`0${index+2}`}
          title ={sections[key].title} details= {sections[key].details}></TextComponent>
        ))
      }
    </section>
  );
};
