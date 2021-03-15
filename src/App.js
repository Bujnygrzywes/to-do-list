import React, { useState, useRef } from "react";

const App = () => {
  const [list, setList] = useState([
    { id: 0, value: "dupa-0", isChecked: false },
  ]);
  const [postId, setPostId] = useState(1);
  const input = useRef(null);

  const addPost = () => {
    setList([
      ...list,
      { id: postId, value: input.current.value, isChecked: false },
    ]);
    setPostId(postId + 1);
  };
  const removePost = (id) => {
    const modifiedPosts = list.filter((item) => {
      if (id === item.id) return null;
      return item;
    });
    setList(modifiedPosts);
  };

  return (
    <div>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.value}</span>
              <button onClick={() => removePost(item.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <input type="text" ref={input} />
      <button onClick={addPost}>Zmien tekst</button>
    </div>
  );
};

export default App;
