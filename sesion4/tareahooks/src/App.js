import './App.css';
import Card from './components/Card/Card';
import fetchItems from "./services/fetchItems";
const items = fetchItems();
  
function App() {
  return (
   <div className="container">

      {items.map(({ title, imgUrl, text,price, oferta }) => (
         <Card 
            key={title}
            titleCard={title}
            imgUrl={imgUrl}
            text={text}
            precio={price}            
            oferta={oferta}
          />       
      ))}        


     
   </div>
  )
}

export default App;
