import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [todo, settodo] = useState();
  const [todos, settodos] = useState([]);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    settodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
  };
  const handleChange = (e) => {
    settodo(e.target.value);
    saveToLS();
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id);
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos[newTodos];
    saveToLS();
  };

  return (
    <>
      <NavBar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
        <h1 className="text-center font-bold text-lg">
          itask! Manage your todos here!
        </h1>
        <div className="addtodo my-5 flex flex-col gap-4">
          <h2>Add ToDos</h2>
          <input
            type="text "
            onChange={handleChange}
            value={todo}
            className="text  w-full bg-white "
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 font-bold p-2 py-1 text-white mx-6 rounded-md"
          >
            Add
          </button>
        </div>
        <h2 className="text-xl font-bold ">ToDoes</h2>
        <div className="">
          <div className="todo">
            {todos.length === 0 && (
              <div className="flex m-5">No todos to display</div>
            )}
            {todos.map((item) => {
              return (
                <div key={item.id} className="flex my-6 justify-between">
                  <div className="flex ">
                    <input
                      type="checkbox"
                      name={item.id}
                      onChange={handleCheckbox}
                      checked={item.isCompleted}
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="button flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-violet-800 hover:bg-violet-950 font-bold p-2 py-1 text-white mx-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-violet-800 hover:bg-violet-950 font-bold p-2 py-1 text-white mx-1 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
