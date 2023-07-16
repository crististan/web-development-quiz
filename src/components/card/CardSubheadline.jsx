const CardSubheadline = ({children}) => {
    return(
        <>
            <div className="text-xl text-[--clr-accent-light] font-medium mb-6">
                {children}
            </div>
        </>
    );
}

export default CardSubheadline;