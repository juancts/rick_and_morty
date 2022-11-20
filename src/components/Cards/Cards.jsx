import { Card } from "../Card/Card.jsx";

export function Cards(props) {
   const { characters } = props;
   return (<div style={{
      display: 'flex', justifyContent: 'space-around'
   }}>
      {characters.map((e) => (
         <Card
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      ))}
   </div>

   );
}
