type Missions = {
    name:string,
    year:string,
    country:string,
    destination:string
}

function MissionCard( missions: Missions) {
    const {name,year,country,destination} = missions
    return(
        <div data-testid="mission=card">
            <p data-testid="mission-name">{name}</p>
            <p data-testid="mission-year">{year}</p>
            <p data-testid="mission-country">{country}</p>
            <p data-testid="mission-destination">{destination}</p>
        </div>
    )
}

export default MissionCard;