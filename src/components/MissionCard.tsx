import '../styles/MissionCard.css';

type Missions = {
    name:string,
    year:string,
    country:string,
    destination:string
}

function MissionCard( missions: Missions) {
    const {name,year,country,destination} = missions
    return(
        <div data-testid="missions" className='MissionCard'>
            <div className="missionName">
            <p data-testid="mission-name">{name}</p>
            </div>
            <div className="missionYcdest">
            <p data-testid="mission-year">{year}</p>
            <p data-testid="mission-country">{country}</p>
            <p data-testid="mission-destination">{destination}</p>
            </div>
        </div>
    )
}

export default MissionCard;