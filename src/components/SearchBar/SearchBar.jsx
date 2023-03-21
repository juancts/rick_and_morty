import styles from "../SearchBar/SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;
    setId(value);
  };
  return (
    <div className={styles.container}>
      <input type="search" name="search" onChange={handleOnChange} />
      <button onClick={() => props.onSearch(id)}>Add</button>
    </div>
  );
}
