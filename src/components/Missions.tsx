import { v4 as uuidv4 } from 'uuid';
import Title from "./Title";
import Mission from '../data/missions'
import MissionCard from "./MissionCard";

function Missions() {

    const missionsList = Mission.map(({name,year,country,destination})=>(
        <MissionCard key={uuidv4()} name={name} year={year} country={country} destination={destination}  />
    ))
    
    return(
        <div data-testid="missions">
            <Title headline="Missões"/>
            {missionsList}
        </div>
    )
}

export default Missions;