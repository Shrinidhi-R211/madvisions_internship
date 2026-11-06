
import { useEffect, useRef } from "react";
import "../styles/DeleteConfirmModal.css";

function DeleteConfirmModal({ task, onCancel, onConfirm }) {
  const cancelButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);

  useEffect(() => {
    if (!task) return;

    // Focus Cancel when the modal opens.
    cancelButtonRef.current?.focus();
  }, [task]);

  function handleDialogKeyDown(event) {
    const buttons = [
      cancelButtonRef.current,
      deleteButtonRef.current
    ];

    const currentIndex = buttons.indexOf(document.activeElement);

    // Navigate using left and right arrow keys.
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();

      if (currentIndex === -1) {
        cancelButtonRef.current?.focus();
        return;
      }

      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;

      buttons[nextIndex]?.focus();
    }

    // Escape cancels deletion.
    if (event.key === "Escape") {
      event.preventDefault();
      onCancel();
    }
  }

  if (!task) return null;

  return (
    <div className="delete-modal-overlay">
      <div
        className="delete-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-modal-title"
        onKeyDown={handleDialogKeyDown}
      >
        <h2 id="delete-modal-title">
          Delete this task?
        </h2>

        <p>
          Are you sure you want to delete
          <strong> "{task.title}"</strong>?
          This action cannot be undone.
        </p>

        <div className="delete-modal-actions">
          <button
            ref={cancelButtonRef}
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            ref={deleteButtonRef}
            type="button"
            onClick={onConfirm}
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
