import './App.css';
import Header from './components/Header';
import Sea from './components/Search';
import Body from './components/body';

function App() {
  return (
  <div id = "wrapper">
    <div id ="shapka"><Header /></div>
    <div id ="vivod"><Sea /></div>
    <div id ="telo"><Body /></div>
    </div>
  );
}

export default App;
