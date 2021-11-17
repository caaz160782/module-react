import './App.css';
import Card  from './components/Card/Card'

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col"> </div>
          <div className="col"> 
                       <Card 
                          titulo="Cerveza"
                          img='https://dibujo.online/wp-content/uploads/2020/04/Cerveza.jpg'
                          info="La cerveza es la prueba de que Dios nos ama y quiere que seamos felices"
                          btnUrl="https://www.amazon.es/Cerveza-prueba-Benjamin-Franklin-cer%C3%A1mica/dp/B010TQ9VPY"
                          msg="i agree"
                        />                       
          </div>
          <div className="col"> 
                        <Card 
                          titulo="Cerveza"
                          img='https://dibujo.online/wp-content/uploads/2020/04/Cerveza.jpg'
                          info="La cerveza es la prueba de que Dios nos ama y quiere que seamos felices"
                          btnUrl="https://www.amazon.es/Cerveza-prueba-Benjamin-Franklin-cer%C3%A1mica/dp/B010TQ9VPY"
                          msg="i agree"
                        /> 
          </div>
        </div>
    </div>
  );
}
export default App;
