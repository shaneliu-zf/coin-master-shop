import logo from './logo.svg';
import './App.css';
import GetDatas from './backend/databaseCtl/getData';
import { GetNotSoldItems } from './function';
import SetCoin from './backend/databaseCtl/setCoin';

function App() {
  //let data = GetNotSoldItems();



  return (
    <div className="App">
      {/* {Object.entries(data).map(
        ([key, value]) => <p>{key}: {value}</p>
      )} */}
      <SetCoin />
    </div>
  );
}

export default App;
