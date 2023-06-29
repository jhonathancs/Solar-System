import { v4 as uuidv4 } from 'uuid';
import Title from "./Title";
import PlanetCard from "./PlanetCard";
import planets from '../data/planets';

function SolarSystem() {
    const listOfPlanet = planets.map(({ name, image}, index) => (
        <PlanetCard key={uuidv4()} planetName={name} planetImage={image} style={{ "--i": index + 1 }} />
      ));

    return(
        <div className='solarSystem'>
            <Title headline="Planetas" />
            <div data-testid="solar-system">
            </div>
            <div className='PlanetCard'>
                {listOfPlanet}
            </div>
        </div>
    )
}

export default SolarSystem;