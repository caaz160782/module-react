import logo from './logo.svg';
import './App.css';

const Title= ()=><h1> Titulo </h1>

//const Title1= (title)=><h3> {title} </h3>

function App() { 
  const subtitle=(subtitle)=>{
    return subtitle
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        
        <div> <Title/> </div>

        <br/>
        {subtitle('sesion 1')}

      </header>
    </div>
  );
}

export default App;
