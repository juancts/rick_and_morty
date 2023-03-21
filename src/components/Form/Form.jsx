import { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validate";

export default function Form(props) {
  //ver de redirigir a HOME luego con el video de la code review

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; //forma desestructurada tomamos name
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
    console.log(errors);
  };

  const handleSubmit = () => {
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <div>
        <p>username: ejemplo@gmail.com</p>
        <p>pass: 1234</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            name="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
          />
          {/* <p className={styles.error}>{errors.username ? errors.username : null}</p> */}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {/* <p className={styles.error}>
            {errors.password ? errors.password : null}
          </p> */}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
