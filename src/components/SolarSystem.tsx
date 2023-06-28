import { v4 as uuidv4 } from 'uuid';
import "../styles/SolarSystem.css"
import Title from "./Title";
import PlanetCard from "./PlanetCard";
import planets from '../data/planets';

function SolarSystem() {
    const listOfPlanet = planets.map(({ name, image}) => (
        <PlanetCard key={ uuidv4() } planetName={ name } planetImage={ image } />
      ));

    return(
        <div className='solarSystem'>
            <div data-testid="solar-system">
                <Title headline="Planetas" />
            </div>
            <section className='PlanetCard'>
                {listOfPlanet}
            </section>
        </div>
    )
}

export default SolarSystem;