import logo from './logo.svg';
import './App.css';
import GetDatas from './backend/databaseCtl/getData';

function App() {
  const data = GetDatas({ path: "userdata" })
  // console.log("data")
  // console.log(data)
  //const setData = (datas) => { data = datas };
  //const fun = <GetData path="userdata/admin" setData={setData} />;


  return (
    <div className="App">
      {Object.entries(data).map(
        ([key, value]) => <p>{key}: {value}</p>
      )}
      {/* {data} */}
    </div>
  );
}

export default App;
