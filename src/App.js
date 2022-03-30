import "./styles.css";
import MyButton from "./components/button.js";

const buttonList = [
  {
    id: "b1",
    header: "Heading one",
    name: "Click me"
  },
  {
    id: "b2",
    header: "Heading two",
    name: "Click here"
  }
];
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyButton
        header={buttonList[0].header}
        name={buttonList[0].name}
      ></MyButton>
      <MyButton
        header={buttonList[1].header}
        name={buttonList[1].name}
      ></MyButton>
    </div>
  );
}
