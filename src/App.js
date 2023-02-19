import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  console.log(backendData.todos)

  return (
    <div>
      {(typeof backendData.todos === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.todos.map((todo,i) => (
          <div>
          <p key={i}>id: {todo.id}</p>
          <p key={i}>title: {todo.title}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App;
