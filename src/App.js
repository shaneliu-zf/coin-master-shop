import logo from './logo.svg';
import './App.css';
import GetDatas from './backend/databaseCtl/getData';
import Post from './backend/databaseCtl/setData';

function App() {
  const data = GetDatas({ path: "userdata" })


  return (
    <div className="App">
      {Object.entries(data).map(
        ([key, value]) => <p>{key}: {value}</p>
      )}
      {/* {data} */}
      <Post />
    </div>
  );
}

export default App;
