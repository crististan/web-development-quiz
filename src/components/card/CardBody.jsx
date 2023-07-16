const CardBody = ({children}) => {
    return(
        <>
            <div className="text-base text-[--clr-dark] font-regular mb-6">
                {children}
            </div>
        </>
    );
}

export default CardBody;