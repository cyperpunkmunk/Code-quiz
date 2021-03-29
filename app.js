
//declarations
var startButton = document.getElementById('start')
var title = document.getElementById('title')
var time = document.getElementById('time');
var answerList = document.querySelector('.answers')
var count = 60;
var gameActive = false
var problemNum = 0
var pos = problemNum


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

// problem object
var problems = [

    question1 = {
        problem : "this is a problem",
        answers: [
            "quesion1",
            "question2",
            "question3",
            "question4",
        ],
        correctAnswer : 0
        
    },
    question2 = {
        problem : "this is a problem 2",
        answers: [
            "quesion1",
            "question2",
            "question3",
            "question4",
        ],

        correctAnswer : 2
            
    }
   ]
console.log(problems[pos])

//getting the question
function getQuestion(){
    var question = problems[pos].problem
    title.innerHTML = question
}



//populating answers in answer div and checking for answer
function getAnswer(){
   
    problems[pos].answers.forEach(populateAns)

    function populateAns(item , index ){
        
        //creating anwer buttons
        var ans = document.createElement('button')
        var textnode = document.createTextNode(item);
        ans.id  = index;
        ans.appendChild(textnode);
        answerList.appendChild(ans);
    
        //Checking for correct anwser click
        ans.addEventListener("click", function(){
            if(index === problems[pos].correctAnswer){
                ans.style.background = "green"
                problemNum ++

                return problemNum    
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
    getAnswer()
    getQuestion()


})


