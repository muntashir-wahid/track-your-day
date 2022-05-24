import TaskInputForm from "./TaskInputForm";
import "./NewTask.css";

function NewTask(props) {
  const saveTaskDescriptionHandler = function (inputTaskDescription) {
    const taskDescription = {
      ...inputTaskDescription,
      id: Math.random(),
    };
    props.onAddTaskDescription(taskDescription);
  };

  return (
    <section className="new-task">
      <TaskInputForm onSaveTaskDescription={saveTaskDescriptionHandler} />
    </section>
  );
}

export default NewTask;
