const Section = ({children, className=""})=> {
    return(
        <section className={`sm:py-20 py-8 ${className}`}>
            {children}
        </section>
    )
}

export default Section;