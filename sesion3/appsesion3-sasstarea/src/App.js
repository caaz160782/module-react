import styles from './App.css';
import Card from './components/Card/Card';
import fetchItems from "./services/fetchItems";


function App() {
  const items = fetchItems();
  return (
    <div className="container">
        <div className="cardcontainer">
            {
            items.map(({ title, imgUrl, text, linkBtn, oferta }) => (
              <Card 
               title={title}
               text={text}
               imgUrl={imgUrl}
           />
        ))                  
        }      
      </div>
     </div>
    
  );
}

export default App;
