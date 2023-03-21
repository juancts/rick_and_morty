import React from "react";
import myPhoto from "../../assets/perfil3.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <img src={myPhoto} alt="My photo" className="about-photo" />
      <h1>About Me</h1>
      <p>
        Hi, my name is Juan and I'm a FullStack Developer based in Spain,
        Barcelona.
      </p>
      <p>
        JavaScript | React | Redux | Node.Js | Express | sqLite | PostgreSQL |
        Sequelize
      </p>
      <div>
        <h4>
          <p>whatsapp: +34663687261</p>
        </h4>
        <h4>
          <p>email: jotarodriguez@gmail.com</p>
        </h4>
      </div>
      <div>
        <a href="#" class="fa fa-facebook"></a>
        <a href="https://twitter.com/jotar81" class="fa fa-twitter"></a>
        <a href="https://github.com/juancts" class="fa fa-github"></a>
        <a href="https://www.linkedin.com/in/jjrodriguez81/" class="fa fa-linkedin"></a>
        
      </div>
    </div>
  );
}

export default About;
