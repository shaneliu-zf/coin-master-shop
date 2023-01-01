import logo from './logo.svg';
import './App.css';
import GetDatas from './backend/databaseCtl/getData';
import { AddItem, GetCart, RemoveFromCart, AddToCart, CustomerCountAddOne, GetCustomerCount, GetItemOrFalse, GetNotSoldItems, ItemSold } from './function';
import SetCoin from './backend/databaseCtl/setCoin';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  let data = GetCart(0)

  return (
    <div className="App">
      {/* {Object.entries(data).map(
        ([key, value]) => <p>{key}: {value}</p>
      )} */}
      {/* {
        Object.entries(notSoldItems).map(
          ([key, value]) => <p>{key}: {value}</p>
        )
      } */}
      {
        Object.entries(data).map(
          ([key, value]) => <p>{key}: {value}</p>
        )
      }
      <SetCoin />
    </div>
  );
}

export default App;
