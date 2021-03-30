var startButton = document.getElementById('start')
var title = document.getElementById('title')
var time = document.getElementById('time');
var answerList = document.querySelector('.answers')
var count = 60;
var gameActive = false
var problemNum = 0


//every 1 second decrements count by one
function countdown(){
    var second = setInterval(timeDec, 1000);
    
    function timeDec() {    
        
        time.innerHTML = "Time: " + count;
        count --;
        if(count < 0){
            
            clearInterval(second);

            console.log('done');
        }
    }

}

//removes start button
function removeStart(){
    startButton.style.display = 'none';
    title.style.textAlign ="left"

}

// problems
var problems = [{      
    problem : "this is a problem",
    answers: [
        "question1",
        "question2",
        "question3",
        "question4",
    ],
    correctAnswer : 'question1'},
    {
    problem : "this is a problem 2",
    answers: [
        "quesion1",
        "question2",
        "question3",
        "question4",
    ],
    correctAnswer : "question2"},
       
    
]


var problemScr = problems[problemNum].problem
var answerScr = problems[problemNum].answers
var correctScr = problems[problemNum].correctAnswer
console.log(correctScr)


//populating answers in answer div and checking for answer
function getScreen(){
   
    
    //what is displayed depending on the problem number
    function screen(problemScr , answerScr , correctScr){
        this.problemScr = problemScr;
        this.answerScr = answerScr;
        this.correctScr = correctScr
    }
    
    
    
    //gettig the question
    var question = problems[problemNum].problem
    title.innerHTML = question

    //populating each button with content
    answerScr.forEach(populateAns)
    function populateAns(index){
        
        //creating answer buttons
        var ans = document.createElement('button')
        var textnode = document.createTextNode([index]);
        console.log(index)
        ans.appendChild(textnode);
        answerList.appendChild(ans)
    
        //Checking for correct anwser click
        ans.addEventListener("click", function(){
            if(index === correctScr){
                ans.style.background = "green"
                problemNum ++
                
                new screen
                console.log(problemNum)
                return screen
            }
            else{
                ans.style.background = 'red'
                console.log('try again')
            }
            return
            
        })
       
    }
}


// when the button is clicked this is ran
startButton.addEventListener("click", function(){
    gameActive = "true";
    //starts coundown
    countdown()
    //removes start menu
    removeStart()
    // gets and posts answers with question
    getScreen()
   


})


