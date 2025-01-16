import { useState } from "react";
import './QuizPage.css';

const QuizPage = ({category,quizdata,onFinished}) => {
    const [currentIdx,setCurrentIdx]=useState(0);
    const [score,setScore]=useState(0);
    //quizData에 있는 quizzes배열에서 각 category를 quizArr에 다시 저장
    const quizArr = quizdata.filter((data)=>{
        return data.category === category;
    });
    const currentQuiz = quizArr[currentIdx];
    const handleAnswer=(answer)=>{
        // if(answer === currentQuiz.correct){
        //     setScore(score+10);
        // }
        //result에는 answer와 currentQuiz(quizData)에 correct과 같아 ? 참 : 거짓
        const result = (answer === currentQuiz.correct) ? score+20 : score;
            if(currentIdx+1 < quizArr.length){
                setScore(result);
                setCurrentIdx(currentIdx+1);
            }else{
                //퀴즈 종료
                onFinished(result);
            }
    }
    return (
        <div className="quiz-page">
            <div className="quiz-txt">
                <p>{category} 영역</p>
                {/* p태그로 문제 제출, div태그.choices > button */}
                <p>{currentIdx+1} / {quizArr.length}</p>
            </div>
            <div className="q-and-a">
                <div className="question">
                    <p>Q</p>
                    <span>{currentQuiz.question}</span>
                </div>
                    <div className="choices">
                        {
                            currentQuiz.choices.map((txt,idx)=>{
                                return <button key={idx} onClick={()=>{handleAnswer(txt)}}>{txt}</button>
                            })
                        }
                    </div>
            </div>
        </div>
    );
};

export default QuizPage;