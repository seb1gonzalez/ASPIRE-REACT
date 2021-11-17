
import './App.css';
import Header from './components/Header'
import {Body} from "./components/Body";
import Footer from "./components/Footer";
import {utep_styles} from './styles/utepStyles';

function App() {
  return (
    <div style={utep_styles.grayBackground}>
        <Header/>
        <Body />
        <Footer/>
    </div>
  );
}

export default App;
