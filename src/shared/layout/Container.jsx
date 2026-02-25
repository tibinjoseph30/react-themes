const Container = ({children, className=""})=> {
    return(
        <div className={`px-(--containerPadding) ${className}`}>
            {children}
        </div>
    )
}

export default Container;