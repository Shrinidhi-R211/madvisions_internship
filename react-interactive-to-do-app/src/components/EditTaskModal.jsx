import { useState, useEffect } from "react";
import "../styles/EditTaskModal.css";

function EditTaskModal({ task, onCancel, onSave }) {

    const [ editedTitle, setEditedTitle ] = useState(task?.title ?? "");
    const [ error, setError ] = useState("");

     // Close the modal when Escape is pressed.
  useEffect(() => {
    if (!task) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        onCancel();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [task, onCancel]);

    if (!task) {
        return null;
    }

    function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = editedTitle.trim();

    if (!trimmedTitle) {
      setError("Task title cannot be empty.");
      return;
    }

    onSave(task.id, trimmedTitle);
  }

  function handleTitleChange(event) {
    setEditedTitle(event.target.value);
    setError("");
  }

  return (
    <div className="edit-modal-overlay">
      <div
        className="edit-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-modal-title"
      >
        <div className="edit-modal-header">
          <h2 id="edit-modal-title">Edit Task</h2>
          <p>Make changes to your task below.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="edit-modal-field">
            <label htmlFor="edit-task-title">
              Task Title
            </label>

            <input
              id="edit-task-title"
              type="text"
              value={editedTitle}
              onChange={handleTitleChange}
              placeholder="Enter your task title"
              autoFocus
              aria-describedby={error ? "edit-task-error" : undefined}
              aria-invalid={Boolean(error)}
            />

            {error && (
              <p
                className="edit-modal-error"
                id="edit-task-error"
              >
                {error}
              </p>
            )}
          </div>

          <div className="edit-modal-actions">
            <button
              type="button"
              className="edit-cancel-btn"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="edit-save-btn"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default EditTaskModal;