/*
==========================================================
📘 REACT CONCEPT 02: PROPS
==========================================================

📌 TOPICS COVERED
1. What are Props?
2. Why Props are needed
3. Passing and receiving Props
4. Props Destructuring
5. Parent-to-Child Data Flow
6. Types of Props
7. Default Prop Values
8. Reusable Components
9. Reusable Cards
10. Reusable List Items
11. map() and key
12. Props vs State
13. VS Code Emmet Shortcuts
14. Common Mistakes
15. Practice Checklist

==========================================================
1. WHAT ARE PROPS?
==========================================================

Definition:
Props (short for properties) are inputs passed to
React components so they can receive and use data.

Why do we need Props?
- To pass data from parent components to child components.
- To make components reusable.
- To avoid repeating similar JSX.
- To display different data using the same component.

🧠 MEMORY TRICK:
Component = Template
Props = Information supplied to the template

Example:
<CourseCard title="React Basics" />

==========================================================
2. PASSING PROPS
==========================================================

Syntax:

<ComponentName propName={value} />

Examples:

<Welcome name="Shri" />
<Welcome age={25} />
<Welcome isStudent={true} />

Rules:
- Strings can be passed using quotes.
- Numbers use curly braces.
- Booleans use curly braces or shorthand for true.
- JavaScript variables and expressions use curly braces.

Example:

const courseName = "React";

<CourseCard title={courseName} />

==========================================================
3. RECEIVING PROPS
==========================================================

Method 1: Receive the entire props object

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

Usage:

<Welcome name="Shri" />

Method 2: Destructure individual properties

function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}

Both methods work.

🧠 MEMORY TRICK:

function Welcome(props)
→ Access using props.name

function Welcome({ name })
→ Access using name

IMPORTANT:
function Welcome({ props }) is NOT the same as
function Welcome(props).

The first extracts a property literally named "props".
The second receives the complete props object.

==========================================================
4. PARENT-TO-CHILD DATA FLOW
==========================================================

Definition:
The parent passes data to a child through props.

Example:

function App() {
  return <Welcome name="Shri" />;
}

function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}

Flow:

App (Parent)
    |
    | name="Shri"
    v
Welcome (Child)
    |
    v
Displays: Hello, Shri!

Important:
- Props are read-only.
- A child should not directly modify its props.
- The parent can pass updated values when its data changes.

==========================================================
5. TYPES OF PROPS
==========================================================

A. STRING

<Profile name="Shri" />

function Profile({ name }) {
  return <h2>{name}</h2>;
}

B. NUMBER

<Product price={499} />

function Product({ price }) {
  return <p>Price: ₹{price}</p>;
}

C. BOOLEAN

<Profile isOnline={true} />

Shorthand for true:

<Profile isOnline />

Conditional rendering:

function Profile({ isOnline }) {
  return (
    <div>
      {isOnline && <p>Online</p>}
    </div>
  );
}

D. ARRAY

<SkillList skills={["HTML", "CSS", "React"]} />

E. OBJECT

<Profile user={{ name: "Shri", city: "Mysuru" }} />

F. FUNCTION

<Button onClick={handleClick} />

G. CHILDREN

<Card>
  <p>Hello!</p>
</Card>

function Card({ children }) {
  return <article>{children}</article>;
}

==========================================================
6. DEFAULT PROP VALUES
==========================================================

A default value is used when a prop is undefined.

Example:

function CourseCard({ title, featured = false }) {
  return (
    <div>
      <h2>{title}</h2>
      {featured && <p>Featured Course</p>}
    </div>
  );
}

Usage:

<CourseCard title="React Basics" />

Here, featured defaults to false.

Note:
A default parameter is used when the prop is undefined,
not when it is explicitly passed as null or false.

==========================================================
7. REUSABLE COMPONENTS
==========================================================

Definition:
A reusable component is a component that can be used
multiple times with different props or content.

Example:

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

Usage:

<Greeting name="Shri" />
<Greeting name="Arun" />
<Greeting name="Meera" />

One component + different props = reusable UI.

==========================================================
8. REUSABLE BOOK CARD
==========================================================

BookCard.jsx

function BookCard({ title, author, pages, isAvailable }) {
  return (
    <article className="book-card">
      <h2>Book Title: {title}</h2>
      <p>Author: {author}</p>
      <p>Pages: {pages}</p>
      <p>
        Status: {isAvailable ? "In stock" : "Out of stock"}
      </p>
    </article>
  );
}

export default BookCard;

App.jsx

import BookCard from "./components/BookCard";

function App() {
  return (
    <>
      <h1>Books Details</h1>

      <BookCard
        title="Kimetsu no Yaiba"
        author="Koyoharu Gotouge"
        pages={4400}
        isAvailable={true}
      />

      <BookCard
        title="FullMetal Alchemist"
        author="Hiromu Arakawa"
        pages={5000}
        isAvailable={true}
      />

      <BookCard
        title="Death Note"
        author="Tsugumi Ohba"
        pages={2400}
        isAvailable={false}
      />
    </>
  );
}

export default App;

Key learning:
All three cards share one component structure but
receive different data.

==========================================================
9. REUSABLE LIST ITEMS
==========================================================

TaskItem.jsx

function TaskItem({ title, completed }) {
  return (
    <>
      <p>Title: {title}</p>
      <p>
        Status: {completed ? "Completed" : "Pending"}
      </p>
    </>
  );
}

export default TaskItem;

App.jsx

import TaskItem from "./components/TaskItem";

function App() {
  const tasks = [
    { id: 1, title: "Learn Props", completed: true },
    { id: 2, title: "Practice React", completed: false },
    { id: 3, title: "Build a Project", completed: false }
  ];

  return (
    <>
      <h1>Array of Tasks</h1>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </>
  );
}

export default App;

==========================================================
10. UNDERSTANDING map() AND key
==========================================================

map():
- Iterates over an array.
- Calls a callback for every item.
- Creates a new array containing the callback's
  returned values.

Example:

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

// Result: [2, 4, 6]

IMPORTANT: RETURN IN ARROW FUNCTIONS

Implicit return:

numbers.map((number) => number * 2);

Explicit return:

numbers.map((number) => {
  return number * 2;
});

Incorrect:

numbers.map((number) => {
  number * 2;
});

The incorrect version returns undefined for every item
because the callback has no return statement.

If used with [1, 2, 3], the result is:

[undefined, undefined, undefined]

KEY:

key={task.id}

- Helps React identify items in a rendered list.
- Should be unique among siblings.
- Prefer stable IDs over array indexes when possible.
- key is a special React attribute.
- key is not passed to the child as a normal prop.

==========================================================
11. PROPS VS STATE
==========================================================

PROPS:
- Passed into a component.
- Read-only for the receiving component.
- Supply data and configuration.

STATE:
- Stores data managed by a component.
- Can change using a state setter.
- Commonly managed with React's useState Hook.

Example:
Props → A course's title
State → Whether a menu is open

MEMORY TRICK:
Props bring data in.
State manages changing data.

==========================================================
12. VS CODE EMMET SHORTCUTS
==========================================================

Type these in a JSX file and press Tab
when Emmet expansion is available.

A. CARD STRUCTURE

article.card>h2+p+strong

B. THREE LIST ITEMS

ul>li*3

C. THREE CARD ELEMENTS

div.card-grid>article.card*3

D. SIMPLE DIV WITH CLASS

div.card

E. HEADING AND PARAGRAPH

div>h2+p

Notes:
- Emmet generates markup, not React component logic.
- Emmet expansion depends on editor settings.
- Use className instead of class in JSX.
- Shortcuts like rafce require a React snippets extension;
  they are not built-in Emmet abbreviations.

==========================================================
13. COMMON MISTAKES
==========================================================

MISTAKE 1: Incorrect props destructuring

Incorrect:
function BookCard({ props }) { ... }

Correct:
function BookCard(props) { ... }

OR:

function BookCard({ title, author }) { ... }

MISTAKE 2: Missing return in App

Incorrect:
function App() {
  <Greeting name="Shri" />;
}

Correct:
function App() {
  return <Greeting name="Shri" />;
}

MISTAKE 3: Missing return inside map()

Incorrect:
tasks.map((task) => {
  <TaskItem title={task.title} />;
});

Correct:
tasks.map((task) => (
  <TaskItem title={task.title} />
));

MISTAKE 4: Forgetting the key

Correct:
<TaskItem key={task.id} title={task.title} />

MISTAKE 5: Passing a variable as a string

Incorrect:
<CourseCard title="courseName" />

Correct:
<CourseCard title={courseName} />

==========================================================
14. PRACTICE CHECKLIST
==========================================================

[COMPLETED] Greeting component using name and age props
[COMPLETED] Reusable BookCard with different data
[COMPLETED] Boolean props and conditional rendering
[COMPLETED] TaskItem component
[COMPLETED] Rendering tasks using map()
[COMPLETED] Using key={task.id}
[COMPLETED] Understanding implicit vs explicit return

==========================================================
15. FINAL REVISION
==========================================================

Component = Reusable template
Props = Data passed into a component
Parent = Passes data
Child = Receives and uses data
Destructuring = Extracts properties from an object
map() = Creates an array from callback return values
key = Helps React identify list items
State = Manages changing component data

==========================================================
END OF REACT PROPS NOTES
==========================================================
*/