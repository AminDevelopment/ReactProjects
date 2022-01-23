import Backdrop from "./Components/Backdrop";
import Empty from "./Components/Empty";
import Modal from "./Components/Modal";
import TaskCreator from "./Components/TaskCreator";
import Todo from "./Components/Todo";
/*
    App.js essentially is the model for the website where return returns the layout of the page
    The return returns HTML look-alike terms that are actually react modules
*/
function App() {
  /*
    to send data back, usee return + [js(HTML)] or return (HTML);
*/
  return (
    <div>
      <h1>My Todos</h1>
      {/*
        To pass in data to modules you call you can name them ex -> text=[SomeText]
        and then use props ( a parameter of the function ) .text [whatever name given]
      */}
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React Course" />
      <Empty />
      <TaskCreator text="Add New Task" />
    </div>
  );
}

/*
export allows other files to call app and is essential for all objects
*/
export default App;
