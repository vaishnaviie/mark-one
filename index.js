var readlineSync = require('readline-sync');
var score=0;

var userName = readlineSync.question("What is your name ?")

console.log("Hey "+ userName +" do you know Vaishnavi?")
console.log("Let's see how well do you know her!")

function play(question,answer){
  var userAns=readlineSync.question(question);

  if(userAns==answer){
    console.log("Right Answer!")
    score++;
  }
  else{
    console.log("Wrong Answer!")
  }

  console.log("Your current score is "+score); 
  console.log("---------------------")
}


var questions=[{
  question:"Where do i live ?",
  answer:"Maharashtra"
},
{
  question:"What is my favourite color ?",
  answer:"Pink"
},
{
  question:"What is my favourite cartoon ?",
  answer:"Doraemon"
},
{
  question:"Who is my best friend ?",
  answer:userName
},
{
  question:"What is my favourite animal ?",
  answer:"Elephant"
},
{
  question:"What is my favourite season ?",
  answer:"Summer"
},
{
  question:"What is my date of birth ?",
  answer:"7 August"
},

]

for(var i=0;i<questions.length;i++){
  var curr=questions[i];
  play(curr.question,curr.answer);
}