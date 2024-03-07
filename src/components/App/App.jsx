import { useEffect, useMemo, useState } from 'react';
import PlanetList from './PlanetList/PlanetList';
import { SearchForm } from '../SearchForm/SearchForm';
import fetchPlanets from '../../api/api';

export default function App() {
  const [planets, setPlanets] = useState([]);
  const [query, setQuery] = useState('');

  const onSearch = planetName => {
    setQuery(planetName);
    console.log(planetName);
  };

  const filteredPlanets = useMemo(
    () => planets.filter(planet => planet.name.toLowerCase().includes(query.toLowerCase())),
    [planets, query]
  );

  useEffect(() => {
    async function getPlanets() {
    const response = await fetchPlanets()
    setPlanets(response);
    }
    getPlanets();
  }, []);


  return (
    <div>
      <h1>Planets</h1>
      <SearchForm onSearch={onSearch} />
      {planets.length > 0 && <PlanetList planets={filteredPlanets} />}
    </div>
  );
}