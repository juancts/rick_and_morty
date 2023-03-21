import Card from "../Card/Card";
import "./cards.css"


export default function Cards(props) {
  const { characters } = props;
  return (
    <div className="cards-container" >
      <div>
        <h1>WELCOME TO THE ULTRA</h1>
        <h1>MEGA RICK & MORTY APP</h1>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
      {characters.map((character) => (
        <Card
          detailId={character.id}
          key={character.name}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => props.onClose(character.id)}
        />
      ))}

      </div>
    </div>
  );
}
