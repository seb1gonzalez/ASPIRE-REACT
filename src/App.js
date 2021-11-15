
import './App.css';
import Header from './components/Header'
import {Body} from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{backgroundColor: '#eceff1'}}>
        <Header/>
        <Body />
        <Footer/>
    </div>
  );
}

export default App;
