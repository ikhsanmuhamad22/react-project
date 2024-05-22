import { useRef, useState } from 'react';
import ModalDialog from './ModalDialog';

function TimerChallenge({ style, title, targetTime }) {
  let timer = useRef();
  let dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleRiset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleTimer() {
    console.log(timeIsActive);
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    console.log(timeIsActive);
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ModalDialog
        ref={dialog}
        style={style}
        timeRemaining={timeRemaining}
        targetTime={targetTime}
        onResult={handleRiset}
      />

      <section className={style.challenge}>
        <h2>{title}</h2>
        <p className={style.challengeTime}>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleTimer}>
            {timeIsActive ? 'Stop' : 'Start'} Challange
          </button>
        </p>
        <p className={timeIsActive ? style.active : 'undifined'}>
          {timeIsActive ? 'Time is running...' : 'Time inactive'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
