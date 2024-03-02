export default function Planet({ name, avatar, description }) {
    return (
      <>
        <h3>{name}</h3>
        <img src={avatar} alt={description} width="200px" />
      </>
    );
  }