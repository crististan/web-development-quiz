const CardHeadline = ({children}) => {
    return(
        <>
            <div className="text-xl text-[--clr-dark] font-medium mb-6">
                {children}
            </div>
        </>
    );
}

export default CardHeadline;