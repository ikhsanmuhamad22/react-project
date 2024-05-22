import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
const modalDialog = forwardRef(function ModalDialog(
  { style, timeRemaining, targetTime, onReset },
  ref
) {
  const dialog = useRef();
  const lose = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className={style.resultModal} onClose={onReset}>
      {lose && <h2>You Lose</h2>}
      {!lose && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form
        method="dialog"
        // onSubmit={onReset}
      >
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default modalDialog;
