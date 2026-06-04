import { useState } from "react";


const App = () => {
  const [num, setnum] = useState(0)
  function increasenum(){
    setnum(num+1);
  }
  function decreasenum(){
    setnum(num-1);
  }
  function jump5Num(){
    setnum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>increase</button>
      <button onClick={decreasenum}>decrease</button>
      <button onClick={jump5Num}>increase by 5</button>
    </div>
  )
}

export default App
