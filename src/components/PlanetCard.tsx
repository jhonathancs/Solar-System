import '../styles/PlanetCard.css'

type planets = {
    planetName: string,
    planetImage: string
}

function PlanetCard({planetName,planetImage}: planets) {
    return(
        <div>
        <div data-testid={ `${planetName} imagem` }>
            <img src={planetImage} alt={`Planeta ${planetName}`} />
            </div>
            <div className='planet'>
            <p>{planetName}</p>
            </div>
        </div>

    )
}

export default PlanetCard;