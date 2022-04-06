export default function Counter({ increment }) {
  const handleIcrement = () => {
    increment((e) => e + 1);
  };

  const handleReset = () => {
    increment(100);
  };

  return (
    <div>
      <button onClick={handleIcrement}>count</button>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
}
