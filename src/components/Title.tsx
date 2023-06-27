type Titleprops = {
    headline: string
}

function Title({headline}: Titleprops){
    return(
        <h2>{headline}</h2>
    )
}

export default Title;