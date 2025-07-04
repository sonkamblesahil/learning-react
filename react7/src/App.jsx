import "./App.css";

function App() {
  function handleClick() {
    alert("btn clicked");
  }

  function handlemouseover() {
    alert("mouse over the paragraph");
  }

  function handleonchange(e) {
    console.log("value changed to:" + e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    alert("form submitted");
    console.log("form submitted with value: " + e.target[0].value);
  }

  return (
    <div>

      {/* <button onClick={alert("immediante invocation")}>
        immediate invocation
      // </button> */} gives alert on every render 


      <button onClick={handleClick}>clickme</button>
      <button
        onClick={() => {
          alert("btn2 clicked");
        }}
      >
        clickme2
      </button>

      <p
        onMouseOver={handlemouseover}
        style={{ color: "red", border: "2px solid red" }}
      >
        I am a paragraaph{" "}
      </p>

      <form onSubmit={handlesubmit}>
        <input type="text" onChange={handleonchange} />
        <button type="submit">submit</button>
      </form>




    </div>
  );
}

export default App;
