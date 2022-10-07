import React, {useState} from 'react'


const QuizComp = () => {
    var Questionbank = [
        {
            Question: "Who is the Father of our Nation?",
            Answers: [
                { Answer: "Mahatma Gandhi", isCorrect: true },
                { Answer: "Netaji Subhash Chandra Bose", isCorrect: false },
              
            ]
        },
        {
            Question: "Who invented Computer?",
            Answers: [
                { Answer: "Charles Babbage", isCorrect: true },
                { Answer: "Elon Musk", isCorrect: false},
                
            ]
        }, {
            Question: "Brain of computer is?",
            Answers: [
                { Answer: "CPU", isCorrect: true },
                { Answer: "Computer", isCorrect: false },
                
            ]
        },
        {
            Question: "What comes after january?",
            Answers: [
                { Answer: "feb", isCorrect: true },
                { Answer: "march", isCorrect: false },
            ]
        },
        {
            Question: "Capital of Maharashtra",
            Answers: [
                { Answer: "Pune", isCorrect: false },
                { Answer: "Mumbai", isCorrect: true },
            ]
        },
        {
            Question: "Which country are the Giza Pyramids in?",
            Answers: [
                { Answer: "Egypt", isCorrect: true },
                { Answer: "Paris", isCorrect: false },
            ]
        },
        {
            Question: "  How many players are there in one Baseball team?",
            Answers: [
                { Answer: "10", isCorrect: false },
                { Answer: "9", isCorrect: true },
            ]
        },
        {
            Question: " What city is the statue of liberty in?",
            Answers: [
                { Answer: "New York", isCorrect: true },
                { Answer: "Ho Chi Minh", isCorrect:false },
            ]
        },
        {
            Question: "Due to bite of mad dog the disease hydrophobia is caused by which virus?",
            Answers: [
                { Answer: "Chinkengunia ", isCorrect: false },
                { Answer: "Rabies virus", isCorrect: true },
            ]
        },
        {
            Question: "  Which rocks is transformed into marble?",
            Answers: [
                { Answer: "Lime Stone", isCorrect: true },
                { Answer: "Grenite", isCorrect: false },
            ]
        },
        
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const[life,setlife]=useState(3)
                



const AnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }
    else{
        if(life === 1){
            setShowScore(true);
        }
        else{
        setlife(life-1);
        }
    }
    
   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
  else{
    setShowScore(true);
    
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setlife(3);

}
    return (
        <>
                    <div id="welcome"> Welcome to my quiz</div>
                    <p class ="lifes">lives lefts: {life}</p>
                    
        <div className='app'>
           
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>AnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                          
                        </div>
                       
                    </>
                )
            }

        </div>
</>
    );
    
}

export default QuizComp;