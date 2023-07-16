const Card = ({children}) => {
    return(
        <div className={`w-full max-w-[480px] py-7 sm:py-14 px-5 sm:px-10 rounded-3xl shadow-[0_12px_24px_0px_rgba(4,19,37,0.08)] m-5 transition-all duration-300 ease-in-out delay-300`}>
            {children}
        </div>
    )
};

export default Card;