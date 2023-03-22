import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import "./cards.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className="title">
      <div color="white">
        <h1>WELCOME TO THE ULTRA</h1>
        <h1>MEGA RICK & MORTY APP</h1>
        <p>¡Add a card and se its details!</p>
      </div>
      <div>
      <SearchBar onSearch={props.onSearch} />
      {console.log("PROPS ON SEARCH:", props.onSearch)}
      </div>
      <div className="cards-container">
        {characters.map((character) => (
          <Card
            className="card"
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
