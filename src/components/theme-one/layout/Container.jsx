const Container = ({children, className=""})=> {
    return(
        <div className={`px-4 ${className}`}>
            {children}
        </div>
    )
}

export default Container;