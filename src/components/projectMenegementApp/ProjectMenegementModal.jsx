import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import ProductMenegementButton from './ProductMenegementButton';

const ProjectMenegementModal = forwardRef(function (
  { children, captionButton },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-lg">
      {children}
      <form method="dialog" className="flex justify-end p-2">
        <ProductMenegementButton>{captionButton}</ProductMenegementButton>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ProjectMenegementModal;
