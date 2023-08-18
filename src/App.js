import './App.css';
import Header from './Sharedcomponents/Header';
import Home from './Pages/Home';
import Productpage from './Pages/Productpage';

function App() {
  return (
    <div className="App">
      <Header/>
    
      <Home/>
     {/* <Productpage/> */}
      
    </div>
  );
}

export default App;
