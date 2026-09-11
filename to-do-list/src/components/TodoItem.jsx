export default function TodoItem(task) {
    return (
        <>
          <h3>My tasks</h3>
            <div className="my-Tasks-Div">
                <div className="my-Tasks-Div2">
                <input type="checkbox" />
                <span>{task.tasks}</span>
                </div>
            <button className="btn-Delete">Delete 🗑️</button>
        </div>
        </>
    );
}