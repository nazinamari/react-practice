import { fetchPlanet } from "../../../api/api";

export default function Planet({ id, name, avatar, description }) {

  const handleDelete = async () => {
    await fetchPlanet(id)
  }

    return (
      <>
        <h3>{name}</h3>
        <img src={avatar} alt={description} width="200px" />
        <button onClick={handleDelete}>delete</button>
      </>
    );
  }