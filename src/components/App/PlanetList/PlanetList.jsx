export default function PlanetList ({items}) {
    return (
        <ul>
                {items.map(planet => (
                <li key={planet}>{planet}</li>
            ))}
            </ul>
    )
}