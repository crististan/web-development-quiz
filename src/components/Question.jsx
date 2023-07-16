import { useContext, useState } from "react";
import CardSubheadline from "./card/CardSubheadline";
import CardHeadline from "./card/CardHeadline";
import CardBody from "./card/CardBody";
import PrimaryBtn from "./PrimaryBtn";
import { QuizContext } from "../context/QuizContext";

const Question = ({question}) => {
    const {setShowComponent, step, setStep, userAnswers, setUserAnswers} = useContext(QuizContext);
    const [userAnswer, setUserAnswer] = useState(null);

    const radioHandle = (e) => {
        setUserAnswer(e.target.value);
    }
    return(
        <>
            <CardSubheadline>{step} / 10</CardSubheadline>
            <CardHeadline>{question.question}</CardHeadline>
            <CardBody>
                {
                    question?.answers?.map((answer, index) => {
                        return(
                            <div key={index} className="w-full mb-3">
                                <input 
                                    className="mr-2" 
                                    type="radio" id={answer.answer} 
                                    name={`question-${1}`} 
                                    value={answer.answer} 
                                    checked={userAnswer == answer.answer}
                                    onChange={radioHandle}
                                />
                                <label htmlFor={answer.answer}>{answer.answer}</label>
                            </div>
                        )
                    })
                }
            </CardBody>
            <PrimaryBtn 
                title={'Submit answer'}
                onClick={() => {
                    if (step === 3) {
                        setShowComponent('result');
                        return;
                    }
                    if (userAnswer !== null) {
                        setStep(step + 1);
                        setUserAnswers(userAnswers.concat(userAnswer));
                    }
                    setUserAnswer(null);
                }} 
                disabled={userAnswer == null ? true : false}
            />
        </>
    );
}

export default Question;