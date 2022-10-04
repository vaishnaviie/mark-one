var readlineSync = require('readline-sync');
var score=0;

var userName = readlineSync.question("What is your name ?\n")

console.log("Hey "+ userName +" do you know Vaishnavi?")
console.log("Let's see how well do you know her!\n")

function play(question,answer){
  var userAns=readlineSync.question(question);

  if(userAns==answer){
    console.log("Right Answer!")
    score++;
  }
  else{
    console.log("Wrong Answer!")
  }

  console.log("Your current score is "+score ); 
  console.log("\n--------------------------------\n")
}


var questions=[{
  question:"Where do i live ? \n a. Maharashtra \n b. Karnataka  \n c. Kerela \n d. Gujrat \n",
  answer:"a"
},
{
  question:"What is my favourite color ? \n a. Pink \n b. Green  \n c. Yellow \n d. Red \n", 
  answer:"b"
},
{
  question:"What is my favourite cartoon ? \n a. Dora the Explorer \n b. Shinchan  \n c. Tom and Jerry \n d. Doraemon \n",
  answer:"d"
},
{
  question:"Who is my best friend ? \n a. Soniya \n b. Sagar  \n c. Atharv \n d. Dhanashree \n",
  answer:"b"
},
{
  question:"What is my favourite animal ? \n a. Elephant \n b. Giraf  \n c. Zebra \n d. Cow \n", 
  answer:"a"
},
{
  question:"What is my favourite season ?\n a. Winter \n b. Spring  \n c. Summer \n d. Monsoon \n", 
  answer:"c"
},
{
  question:"What is my date of birth ?\n a. 5 August \n b. 6 August  \n c. 7 August \n d. 8 August \n", 
  answer:"c"
},

]

for(var i=0;i<questions.length;i++){
  var curr=questions[i];
  play(curr.question,curr.answer);
}

console.log("Congradulations, Your final score is " + score)

console.log("\nScores :-")
console.log("Rank 1: Sagar - score : 7")
console.log("Rank 2: Ram - score : 5")
console.log("Rank 3: Dhanashree - score : 3 ")