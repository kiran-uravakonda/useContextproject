import './App.css'
import Child1 from './components/child1'
import { createContext, useEffect, useState } from 'react';
export var Context = createContext();

// console.log(Context)
function App() {
  let [data, setValue] = useState([])
  // console.log(data)
  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((val) => setValue(val))
        .catch((err) => {
          throw new Error("data was not fetched")
        })

    }
    catch (e) {
      console.log(alert(e))
    }
  }, [])
  return (
    <div>
      <Context.Provider value={data}>
        <Child1 />
      </Context.Provider>
    </div>
  );
}

export default App;
