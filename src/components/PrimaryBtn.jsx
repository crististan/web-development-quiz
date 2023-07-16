import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";

const PrimaryBtn = ({
    title,
    onClick,
    disabled
}) => {
    return(
        <button 
            className="w-full text-white bg-[--clr-accent] rounded-full p-2 border border-[--clr-accent] hover:bg-[--clr-accent-dark] transition-all duration-300 disabled:bg-slate-200"
            onClick={onClick}
            disabled={disabled}
        >
            { title }
        </button>
    );
}

export default PrimaryBtn;