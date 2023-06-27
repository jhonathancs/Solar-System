import '../styles/PlanetCard.css'

type planets = {
    planetName: string,
    planetImage: string
}

function PlanetCard({planetName,planetImage}: planets) {
    return(
        <div data-destida="planet-name">
            <p>{planetName}</p>
            <img src={planetImage} alt={`Planeta ${planetName}`} />
        </div>
    )
}

export default PlanetCard;