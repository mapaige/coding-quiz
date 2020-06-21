var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var questions = [
  { q: "var in Javascript means",c:["coding","variable","expressions","argument"] ,a: "variable" },
  { q: "Which one is not a data type", c:["number","Beelean","String","Null"], a: "Beelean" },
  { q: "3. i++ is:", c:[" Name short for C++","increment","decrement","argruments"] , a:"increment"},
  { q: "An array:", c:["is a collection of values", "index starts at 0, in most cases","all of them.","can have mixed values"], a: "all of them" },
  
];
var index = 0
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining ";

    var question=questions[index].q
    document.getElementById("Q").textContent=question
    var choices = questions[index].c
    document.getElementById("choices").textContent=""
    for (var i=0;i < choices.length;i++){
   
      
    var li=document.createElement("li")
    var rowNumber=i+ 1
    li.textContent=rowNumber +". " +  choices[i]
    li.addEventListener("click",function(){
    index++
    })
    document.getElementById("choices").appendChild(li)

    }
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}


 const startButton = document.getElementById("start").addEventListener("click", startGame)

 function startGame() {
   document.getElementById("start-div").classList.add("hide")
   document.getElementById("question-div").classList.remove("hide")
 setTime()
 }


 

//   var score = 0; 
//   for (var i =0; i < questions.length; i ++) 
 
//   if ((answer === true && questions[i].a === "t") ||  (answer === false && questions[i].a === "f")) {
//     score++;
//      alert("Correct!");
//    }
//    else {
//      alert("Wrong!");
//    }

//  alert("You got " + score + "/" + questions.length);

 