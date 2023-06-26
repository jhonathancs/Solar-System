type Titleprops = {
    headline: string
}

function Title(prop: Titleprops){
    const { headline } = prop
    
    return(
        <h2>{headline}</h2>
    )
}

export default Title;