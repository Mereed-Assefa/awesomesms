import { useState } from "react";

export default function Display(props) {
  const [data, setData] = useState([]);
  const [name, setValue] = useState("");

  const handleAdd = () => {
    const value = name;
    if (value.trim() === "") return;

    setData((e) => {
      return [...e, value];
    });

    setValue("");
  };
  return (
    <div>
      <h1>Your rating is {props.mycount}</h1>
      {data.map((e) => (
        <h2>Name: {e}</h2>
      ))}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
