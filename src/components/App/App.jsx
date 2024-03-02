import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import PlanetList from './PlanetList/PlanetList';
import { SearchForm } from '../SearchForm/SearchForm';

axios.defaults.baseURL =
  'https://65e3367a88c4088649f57eb6.mockapi.io/api/planets/';

export default function App() {
  const [planets, setPlanets] = useState([]);
  const [query, setQuery] = useState('');

  const onSearch = planetName => {
    setQuery(planetName);
    console.log(planetName);
  };

  const visiblePlanets = useMemo(() =>
    planets.filter(
      planet => planet.name.toLowerCase().includes(query.toLowerCase()),
      [planets, query]
    )
  );

  useEffect(() => {
    async function fetchPlanets() {
      const response = await axios.get('/planets');
      console.log(response);
      setPlanets(response.data);
    }

    fetchPlanets();
  }, []);

  return (
    <div>
      <h1>Planets</h1>

      <SearchForm onSearch={onSearch} />
      {planets.length > 0 && <PlanetList planets={visiblePlanets} />}
    </div>
  );
}
