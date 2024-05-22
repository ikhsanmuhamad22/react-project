import { useRef, useState } from 'react';

export default function PlayerChallenges({ style }) {
  const [inputName, setInputName] = useState(null);
  const name = useRef();
  const handleClick = () => {
    setInputName(name.current.value);
  };
  return (
    <section id={style.player}>
      <h2>Welcome {inputName ?? 'unknown entity'} </h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
