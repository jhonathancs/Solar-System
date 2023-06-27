import { v4 as uuidv4 } from 'uuid';
import Title from "./Title";
import PlanetCard from "./PlanetCard";
import planets from '../data/planets';

function SolarSystem() {
    const listOfPlanet = planets.map(({ name, image}) => (
        <PlanetCard key={ uuidv4() } planetName={ name } planetImage={ image } />
      ));

    return(
        <div data-testid="solar-system">
            <h1>solar</h1>
            <Title headline="planetas" />
            <ul>{listOfPlanet}</ul>
        </div>
    )
}

export default SolarSystem;