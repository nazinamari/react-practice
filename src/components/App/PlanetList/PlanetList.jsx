import Planet from '../Planet/Planet';

export default function PlanetList({ planets }) {
  return (
    <ul>
      {planets.map(({ name, id, avatar, description }) => (
        <li key={id}>
          <Planet id={id} name={name} avatar={avatar} description={description} />
        </li>
      ))}
    </ul>
  );
}