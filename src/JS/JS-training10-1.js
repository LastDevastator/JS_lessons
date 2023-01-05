'use strict'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month'
    },
     showAgeAndLangs: function (obj) {
      
      let result = `Мне ${obj.age} и я владею языками:`

      for (let key in obj.skills.languages){
        
       result += ` ${obj.skills.languages[key].toUpperCase()}`
      }

      return result

    }
};

function showExperience(plan) {
  return plan.skills.exp;
}

function showProgrammingLangs(plan) {

  let result = "";

  for (let key in plan.skills.programmingLangs) {
    

    result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]} \n`;

  }

  return result;


}


console.log(showProgrammingLangs(personalPlanPeter))