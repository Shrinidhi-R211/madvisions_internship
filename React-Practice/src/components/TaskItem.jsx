function TaskItem(props){
return (
    <>
    <p>Title : {props.title}</p>

    <p>Status : {props.completed ? "Completed" : "Need to be done...!"}</p>
    <br />
    </>
)
};

export default TaskItem;