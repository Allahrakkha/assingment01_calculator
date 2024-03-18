import inquirer from "inquirer"
const answer:{
  num1:number,
  num2:number,
  operator:string,
}= await inquirer.prompt([
  {
    type:"number",
    name:"num1",
    message:"please enter first number."
  },
  {
    type:"number",
    name:"num2",
    message:"please enter second number."
  },
  {
    type:"list",
    name:"operator",
    message:"select operator.",
    choices:['add','sub','div','mult']
  }
])
if(answer.operator==="add"){
  console.log(`your answer is:`, answer.num1 + answer.num2)
}
else if(answer.operator==="sub"){
  console.log(`your answer is:`, answer.num1 - answer.num2)
}
else if(answer.operator==="div"){
  console.log(`your answer is:`, answer.num1 / answer.num2)
}
else if(answer.operator==="mult"){
  console.log(`your answer is:`, answer.num1 * answer.num2)
}
else {
  console.log("pleasae seclect valid operator.")
}


