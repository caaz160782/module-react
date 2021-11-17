import './App.css';
import Card  from './components/Card/Card'
import fetchItems from "./services/fetchItems";

function App() {
  const items = fetchItems();
  
  return (
    <div className="container">
      <div className="row">

      {items.map(({ title, imgUrl, text, linkBtn, oferta }) => (
        <div className="col"> 
          <Card
            title={title}
            imgUrl={imgUrl}
            text={text}
            linkBtn={linkBtn}
            oferta={oferta}
          />
       </div>
      ))}        


      
        </div>
    </div>
  );
}
export default App;
