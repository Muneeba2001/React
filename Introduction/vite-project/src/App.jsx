import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../../components/navBar'

function App() {
  const [value, setValue] = useState(0) // first index have name and second have setter function, we can on ly set value through value and set them through setter function and assig it to usestate.

  return (
    <>
   
      <div>
      <NavBar/>
         <h1>Hello World</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquam nostrum illo iusto fuga. Aspernatur officia nesciunt illo eum est cumque ratione quod rem officiis, eligendi obcaecati minima excepturi nam veritatis facere, ex, illum aut ipsam enim reiciendis. Iusto accusamus similique ducimus reiciendis quos, neque blanditiis velit ratione! Et libero dicta officia. Dolor temporibus consectetur atque!</p>
         <div className="value">
            {value}
         </div>
        <button type="button" className ='Hello' onClick ={ ()=>{
          {setValue(value+1)}
        }}>
          Click me
        </button>
        
      </div>
    </>
  )
}

export default App
