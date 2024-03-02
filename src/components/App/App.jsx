import { useState, useEffect, useMemo } from 'react';
import PlanetList from './PlanetList/PlanetList';
import { SearchForm } from '../SearchForm/SearchForm';
import { fetchPlanetsWithName } from '../../planets-api';

export default function App () {
    const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
    const [query, setQuery] = useState("");
    const [clicks, setClicks] = useState(0);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const filteredPlanets = useMemo(
        () => planets.filter(planet => 
        planet.includes(query)),
        [planets, query]
    )

    const handleSearch = async (newQuery) => {
        setQuery(newQuery);
        console.log(newQuery);
    };

    useEffect(() => {
        async function fetchPlanets () {
            try {
                // setPlanets([]);
                setError(false);
                setLoading(true);
                const data = await fetchPlanetsWithName();
                setPlanets(data);
            } catch(error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchPlanets ()
    }, [])
    
    // const handleSearch = async (planet) => {
    //     try {
    //         setPlanets([]);
    //         setError(false);
    //         setLoading(true);
    //         const data = await fetchPlanetsWithName(planet);
    //         setPlanets(data);
    //     } catch(error) {
    //         setError(true);
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    return (
        <div>
            <SearchForm onSearch={handleSearch} />
            {loading && <p>Loading data, please wait...</p>}
            {error && (
                <p>Whoops, something went wrong! Please try reloading this page!</p>
                )}
            <button onClick={() => setClicks(clicks + 1)}>
                Number of clicks: {clicks}
            </button>
            {planets.length > 0 && <PlanetList items={filteredPlanets} />}
        </div>
    );
}