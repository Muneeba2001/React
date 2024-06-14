import { useState } from 'react'
import './App.css'

function App() {
  const [value, setvalue] = useState('Muneeba')
  const [count, setCount] = useState(0)

  return (
    <>

    <Form />
              {/* <h1>Vite + React</h1> */}
              <div className="card">
           
                <div>
                  <button onClick={() => setvalue((value) => value = 'Muneeba Waseem')}>
                    count is {value}
                  </button>
                </div>
                <br></br>
                <div>
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                </div>
              </div>
            </>
            )
};
const Form = () => {
  const [formData, setFormData] = useState({
    fname: 'John',
    lname: 'Doe',
    phoneNo: "",
    Address: "Street , Area and City"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label><br />
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        /><br />
        <label htmlFor="lname">Last name:</label><br />
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        /><br />

<label htmlFor="phoneNo">Phone Number:</label><br />
        <input
          type="number"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
        /><br />

<label htmlFor="Address">Address:</label><br />
        <input
          type="text"
          name="address"
          value={formData.Address}
          onChange={handleChange}
        /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

            export default App
