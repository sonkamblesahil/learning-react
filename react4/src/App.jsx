import Card from "./components/Card";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
    const [count,setCount] = useState(0)

    const handleclick=()=>{
      setCount(count+1)
    }

  return (
    <>
      <div>
        <Card>
          <h1>This is children element</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ad aperiam natus rem doloribus delectus obcaecati
            vero, ipsa dolor adipisci nulla, ut, commodi fugit iure illum dicta
            quibusdam totam earum.
          </p>
        </Card>

        <Card
          children={
            <div>
              <h1>This is children prop</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                deleniti.
              </p>
            </div>
          }
        />

        <Counter count={count} handleClick = {handleclick} />
      </div>
    </>
  );
}

export default App;
