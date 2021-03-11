import React, { useState, useRef } from "react";

const App = () => {
  const [list, setList] = useState([
    { id: 0, value: "dupa-0", isChecked: false },
    { id: 1, value: "dupa-1", isChecked: false },
    { id: 2, value: "dupa-2", isChecked: false },
    { id: 3, value: "dupa-3", isChecked: false },
    { id: 4, value: "dupa-4", isChecked: false },
  ]);
  const input = useRef(null);
  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li>{item.value}</li>;
        })}
      </ul>
      <input type="text" ref={input} />
      <button
        onClick={() =>
          setList([
            ...list,
            { id: undefined, value: input.current.value, isChecked: false },
          ])
        }
      >
        Zmien tekst
      </button>
    </div>
  );
};

export default App;
