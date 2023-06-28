import "./PlanetInfo.css";

export const PlanetsInfo = ({ planet }) => {

    return (
        <div className="planet-info">
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Orbital period: {planet.orbital_period}</p>
            <p>Population: {planet.population}</p>
            <p>Rotation period: {planet.rotation_period}</p>
            <p>Surface water: {planet.surface_water}</p>
            <p>Terrain: {planet.terrain}</p>
            <hr />
        </div>
    )
}