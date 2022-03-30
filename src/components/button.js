export default function MyButton(props) {
  return (
    <div>
      <h2>{props.header}</h2>
      <button>{props.name}</button>
    </div>
  );
}
