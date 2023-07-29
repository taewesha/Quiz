const myQuestions = [
	{
		question: "1. Courtney Cox initially auditioned for which FRIENDS character ?",
		answers: [{ text: "Monica", isCorrect: false },
            { text: "Phoebe", isCorrect: false },
            { text: "Rachel", isCorrect: true }
        ]
	},
	{
		question: "2. Which Jonas Brother's idea was to call for a hiatus ?",
		answers: [{ text: "Joe", isCorrect: false },
            { text: "Kevin", isCorrect: false },
            { text: "Nick", isCorrect: true }
        ]
	},
    {
		question: "3. Who inspired Jungkook to join the band ?",
		answers: [{text: "RM",isCorrect: true},
			{text: "Suga",isCorrect: false},
			{text: "Jin", isCorrect: false}
	        ]   
	},
    {
		question: "4. Which member of One Direction had an acting career before ?",
		answers: [{text: "Zayn",isCorrect: false},
			{text: "Harry Styles",isCorrect: false},
			{text: "Louis Tomlinson",isCorrect: true}
	]
	},
    {

		question: "5. Which actor from The Big Bang Theory has a PhD degree ?",
		answers: [{text: "Kaley Cuoco",isCorrect: false},
			{text: "Jim Parsons",isCorrect: false},
			{text: "Mayim Bialik",isCorrect: true}
	]
	},
    {

		question: "6. Which member from The Game Of Thrones auditioned seven times ?",
		answers: [{text:"Emilia Clarke" ,isCorrect: false},
			{text: "Sam Heughan", isCorrect:true},
			{text: "Charles Dance", isCorrect:false}
	     ]
		},
    {   
		question: "7. What was Marilyn Monroe's real name ?",
		answers: [{text: "Norma Jeane Mortenson",isCorrect: true},
			{text: "Elizabeth Lauren McAdams",isCorrect: false},
			{text: "Judy Marigold Cooper", isCorrect:false}
	    ]
		},
    {
		question: "8. Which Beatles song holds the record for the most versions recorded by different artists ?",
		answers: [{text: "Hey Jude",isCorrect: false},
			{text: "Let It Be",isCorrect: false},
			{text: "Yesterday",isCorrect: true}
	    ]
	},
    {
		question: "9. Which is NOT a rumor about Regina George ?",
		answers: [{text: "She does car commercials in Japan.",isCorrect: false},
			{text: "Donatella Versace is on her speed dial.",isCorrect:true},
			{text: "She met John Stamos on a plane.",isCorrect: false}
	]
	},
    {
		question: "10. At what age did Taylor Swift first picked up the guitar",
		answers: [{text: "12",isCorrect: true},
			{text: "8",isCorrect: false},
			{text: "10",isCorrect: false}
	 ]
	}

]


let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = myQuestions[currQuestion].question;
    opt.innerHTML = ""
 
    for (let i = 0; i < myQuestions[currQuestion].answers.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choiceLabel.textContent = myQuestions[currQuestion].answers[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${myQuestions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < myQuestions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (myQuestions[currQuestion].answers[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}