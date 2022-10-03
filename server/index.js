
const { get } = require('cypress/types/lodash')
const express = require('express')
const app = express()
const PORT = 3031
const server = app.listen(PORT, function(){console.log(`server started at ${PORT}`)})

app.get('/resume',function(req,res){
    const data = {   about: {
        title: "ABOUT ME",
        details: `With an appetite for learning the meaning of the data, I am looking for a job that gives me this opportunity, so I am open for a job in Data Science field.`,
      },
      work: {
        title: "WORK EXPERIENCE",
        details: `<b>ETL Developer</b> Deloitte
              <br>
              <b>Data Engineer<b/> IBM Romania
             `,
      },
      soft_skills: { title: "SOFT SKILLS", details: `curioous, bla bla` },
      special_skills: {
        title: "SPECIAL SKILLS",
        details: `special skills bla bla`,
      },

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
        title:'CURRENT PROJECTS',
        details: `project 1 <br><br/>
        project 2 <br><br/>`
      },
      personal_projects:{
        title:'PERSONAL PROJECTS',
        details: `project 1 <br><br/>
        project 2 <br><br/>`
      }

    }
    res.send()
})