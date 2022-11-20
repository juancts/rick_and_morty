export default function SearchBar(props) {
   return (
      <div>
         <input type='search' name='search'/>
      <button onClick={()=> props.onSearch('Card a buscar')}>Buscar</button>
      </div>
   );
}
