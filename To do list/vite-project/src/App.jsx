import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <h1>Create your To-do List</h1>
      <ToDoItems />
    </>
  );
}

const ToDoItems = () => {
  const [items, setItems] = useState([]); 
  const [currentItem, setCurrentItem] = useState(''); 

  const handleChange = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItem = () => {
    if (currentItem) { // 
      setItems([...items, currentItem]);
      setCurrentItem('');
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="data">Enter anything</label><br /><br />

      <input
        type="text"
        name="data"
        value={currentItem}
        onChange={handleChange}
      /><br /><br />

      <DisplayButton addItem={addItem} />
      <br />
      <DisplayData items={items} />
    </form>
  );
};

const DisplayData = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const DisplayButton = ({ addItem }) => {
  return (
    <button type="button" onClick={addItem}>
      Add to List
    </button>
  );
};

export default App;
