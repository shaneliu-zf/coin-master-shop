import logo from './logo.svg';
import './App.css';
import GetDatas from './backend/databaseCtl/getData';
import { AddItem, CustomerCountAddOne, GetCustomerCount, GetItemOrFalse, GetNotSoldItems, ItemSold } from './function/function';
import SetCoin from './backend/databaseCtl/setCoin';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  let data = 0//GetDatas({ path: '/customer_count' })
  console.log("data")
  console.log(data)
  console.log(typeof (data))
  // let data1 = GetCustomerCount()
  let data1 = 0//CustomerCountAddOne();

  // console.log("data1")
  // console.log(data1)
  // console.log(typeof (data1))


  return (
    <div className="App">
      {/* {Object.entries(data).map(
        ([key, value]) => <p>{key}: {value}</p>
      )} */}
      {data}
      <SetCoin />
    </div>
  );
}

export default App;
