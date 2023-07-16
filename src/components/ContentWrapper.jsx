import Card from "./card/index";
import Question from "./Question";
import Intro from "./Intro";
import Result from "./Result";
import { QuizContext } from "../context/QuizContext";
import { useContext, useState } from "react";

const ContentWrapper = () => {
    const {showComponent, questions, step, userAnswers} = useContext(QuizContext);
    return(
        <Card>
            { showComponent === 'intro' && <Intro /> }
            { showComponent === 'question' && <Question question={questions[step - 1]} /> }
            { showComponent === 'result' && <Result /> }
        </Card>
    )
}

export default ContentWrapper;