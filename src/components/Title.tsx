import '../styles/Title.css'

type Titleprops = {
    headline: string
}

function Title({headline}: Titleprops){
    return(
        <div className='title'>
            <h2>{headline}</h2>
        </div>
    )
}

export default Title;