import { CSSProperties } from 'react'
import '../styles/PlanetCard.css'

type planets = {
    planetName: string,
    planetImage: string,
    style: CSSProperties & { "--i": number };
}

function PlanetCard({planetName,planetImage,style}: planets) {
    return(
        <span style={style}>
        <div data-testid={ `${planetName} imagem` }>
            <img src={planetImage} alt={`Planeta ${planetName}`} />
            </div>
            <div className='planet'>
            <p>{planetName}</p>
            </div>
        </span>

    )
}

export default PlanetCard;