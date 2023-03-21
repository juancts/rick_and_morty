import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.container}>
      <h1>DETAILS!</h1>
      <Link to="/Home">
        <button>Go Back!</button>
      </Link>
      <h1>{character.origin?.name}</h1>
      <h3>Estado: {character.status}</h3>
      <h3>Species: {character.species}</h3>
      <img src={character.image} alt="" />
    </div>
  );
}
