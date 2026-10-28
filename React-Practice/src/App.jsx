import BookCard from "./components/BookCard";
import Greeting from "./components/Greeting"
import TaskItem from "./components/TaskItem";

function App() {

 const tasks = [
  { id: 1, title: "Learn Props", completed: true },
  { id: 2, title: "Practice React", completed: false },
  { id: 3, title: "Build a Project", completed: false }
];

 return (
  <>
  <Greeting name = "Shri"
  age = {25}
  />

  <h1>Books Details : </h1>
  <BookCard title = "Kimetsu no Yaiba"
  author = "Koyoharu Gotouge"
  pages = {4400}
  isAvailable = {true}
  />

  <BookCard title = "FullMetal Alchemist"
  author = "Hiromu Arakawa"
  pages = {5000}
  isAvailable = {true}
  />

  <BookCard title = "Death Note"
  author = "Tsugumi Ohba"
  pages = {2400}
  isAvailable = {false}
  />

<br />
  <h1>Array of Tasks</h1>

  {tasks.map((task) => {
    return (
      <TaskItem 
      key = {task.id}
      title = {task.title}
      completed = {task.completed}
    />
    );
  })
}
  </>
 )
}

export default App;
