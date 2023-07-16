import CardSubheadline from "./card/CardSubheadline";
import CardHeadline from "./card/CardHeadline";
import CardBody from "./card/CardBody";
import PrimaryBtn from "./PrimaryBtn";

const Result = () => {
    return(
        <>
            <CardSubheadline>Result</CardSubheadline>
            <CardHeadline>Test your web development knowledge with this quiz and evaluate your understanding of HTML, CSS, and JavaScript by answering 10 questions.</CardHeadline>
            <CardBody>
                To pass the quiz, aim to answer at least 8 questions correctly.
            </CardBody>
            <PrimaryBtn 
                title={'Again'}
                onClick={() => {
                    window.location.reload(false);
                }} 
            />
        </>
    );
}

export default Result;