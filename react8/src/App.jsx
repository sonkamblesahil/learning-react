import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

   const handleClickCount = () => {
    setCount(count + 1);
  };

  const handleClickTotal = () => {
    setTotal(total + 1);
  };

  //runs on every render
  // useEffect(() => {

  //     alert("this runs on eery render")
  // })

  //that runs on only first render
  // useEffect(() => {

  //   alert("this runs on only first render only")
  //   return () => {
  //   }
  // }, [])

  //single dependency render renders only when the count is changed
  // useEffect(() => {
  //  alert("this runs only whe count is updated")
  // }, [count])

  //multiple dependencies
  // useEffect(() => {
  //    alert("this runs when count or total is updated");
  // }, [count,total]);

 //learning cleanup function in useEffect
 //purana wala component unmount hota hai aur fir naya wala component mount hota hai
 useEffect(() => {
    alert("count is updated");
   return () => {
     alert("count is unmounted from ui")
     
   }
 }, [count])
 


  return (
    <>
      <div>
        <div>
          <button onClick={handleClickCount}>UpdateCount</button>
          Count is :{count}
        </div>
        <div>
          <button onClick={handleClickTotal}>UpdateTotal</button>
          Total is :{total}
        </div>
      </div>
    </>
  );
}

export default App;
